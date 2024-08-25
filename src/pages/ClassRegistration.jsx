import { useEffect, useState } from "react"
import { getClasses } from "../registration_data/apiClasses"
import { addClassTime, addClassName, removeClass } from "../state/classSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../ui/Loader";


function ClassRegistration() {
    const dispatch = useDispatch();
    const classTimes = useSelector(store => store.classes.classTimes);
    const classNames = useSelector(store => store.classes.classNames);
    const [availableClasses, setAvailableClasses] = useState({});

    const [selectedClassTime, setSelectedClassTime] = useState("");
    const [selectedClassName, setSelectedClassName] = useState("");
    const [isLoading, setIsLoading] = useState(true)

    function handleAddClass() {
        if (selectedClassName !== "" && selectedClassTime !== "") {
            dispatch(addClassName(selectedClassName));
            dispatch(addClassTime(selectedClassTime));
            setSelectedClassTime("");
            setSelectedClassName("");
        }
    }

    function handleAddClassFromDB(name, time) {
            const alreadyScheduled = classNames.includes(name) && classTimes.includes(time)
            if(!alreadyScheduled) {
                dispatch(addClassName(name));
                dispatch(addClassTime(time));
            }
            
        
    }

    function handleDeleteClass(index) {
        dispatch(removeClass(index));
    }

    
    useEffect(function() {
        getClasses().then(data=>{
            console.log(data);
            const classesObject = {}
            data.forEach(classObj => {
                const { id, class_number: classNumber, class: className, meeting_time: meetingTime, instructor, total_enrollment } = classObj;
                classesObject[id] = {
                    classNumber,
                    className,
                    meetingTime,
                    instructor,
                    total_enrollment
                };
        });
        setAvailableClasses(classesObject);
        setIsLoading(false);
        });
    }, [])
    
   
    return (
        <>
        <div>
                <span>Todays date</span>
                <form onSubmit={e => {
                    e.preventDefault();
                    handleAddClass();
                }}>
                    <input type="text" placeholder="class name" value={selectedClassName} onChange={e => setSelectedClassName(e.target.value)} />
                    <input type="text" placeholder="class time" value={selectedClassTime} onChange={e => setSelectedClassTime(e.target.value)} />
                    <button type="submit">Add</button>
                </form>
               
                <ul>
                    {classTimes.map((time, index) => (
                    <li key={index}>{classNames[index]} at {time}
                    <button className="px-10" onClick={() => handleDeleteClass(index)}>Delete</button>
                    </li>))}
                </ul>

                {isLoading ? <Loader />
                 : ( <div>
                    <h1 className="text-center text-xl py-10">Add these DUMMY CLASSES!</h1>
                    <ul className="flex flex-col gap-4">
                        {Object.values(availableClasses).map(( classObject, index ) => (
                               <li key={index} className="pl-16 flex justify-center">
                                <button key={index} className="p-3 pl-6 w-48 rounded-xl text-left bg-red-700 text-carolina-tarheelblue"
                                onClick={() => handleAddClassFromDB(classObject.className, classObject.meetingTime)}>
                             
                                    {classObject.className}
                                    </button>
                                </li>
                                
                        ))}
                    </ul>
                </div>)}
            </div>
            </>
    )
}

export default ClassRegistration