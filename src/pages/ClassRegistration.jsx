import { useEffect, useState } from "react"
import { getClasses } from "../registration_data/apiClasses"
import { addClassTime, addClassName, removeClass, addClass } from "../state/classSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../ui/Loader";
import { GiKitchenKnives } from "react-icons/gi";
import SearchBar from "../ui/SearchBar";


function ClassRegistration() {
    const dispatch = useDispatch();
    const classTimes = useSelector(store => store.classes.classTimes);
    const classNames = useSelector(store => store.classes.classNames);
    const classNumbers = useSelector(store => store.classes.classNumber);
    const [availableClasses, setAvailableClasses] = useState({});
    const [selectedClassTime, setSelectedClassTime] = useState("");
    const [selectedClassName, setSelectedClassName] = useState("");
    const [selectedClassNumber, setSelectedClassNumber] = useState("");
    //const [selectedDayPattern, setSelectedDayPattern] = useState("");
    const [isLoading, setIsLoading] = useState(true)

    function handleAddClass() {
        if (selectedClassName !== "" && selectedClassTime !== "") {
            dispatch(addClass(selectedClassName, selectedClassTime))
            setSelectedClassTime("");
            setSelectedClassName("");
           // setSelectedDayPattern("")
        }
    }

    function handleAddClassFromDB(name, start, end) {
            const alreadyScheduled = classNames.includes(name) && classTimes.includes(start) && classTimes.includes(end);
            if(!alreadyScheduled) {
                dispatch(addClassName(name));
                dispatch(addClassTime(start));
                dispatch(addClassTime(end));
                
            }   
    }

    function handleDeleteClass(index) {
        dispatch(removeClass(index));
    }

    function log() {
        console.log(classTimes);
        console.log(classNames);
    }

    
    useEffect(function() {
        getClasses().then(data=>{
            console.log(data);
            const classesObject = {}
            data.forEach(classObj => {
                const { class_number: id, class: className, meeting_end: meetingEnd, meeting_start: meetingStart, meeting_day: meetingDay, instructor, total_enrollment } = classObj;
                classesObject[id] = {
                    className,
                    meetingStart,
                    meetingEnd,
                    meetingDay,
                    instructor,
                    total_enrollment
                };
                console.log(classObj)
        });
        setAvailableClasses(classesObject);
        setIsLoading(false);
        });
    }, [])
    
   
    return (
        <>
        <div className="mt-10 text-center">
            <span className="mb-10 text-xl mt-10 p-10">Todays date</span>
            <form onSubmit={e => {
                    e.preventDefault();
                    handleAddClass();
                }}>

                    <input className=" mr-4 -border-slate-100 -bw-1 text-xl rounded-l pl-10"type="text" placeholder="class name" value={selectedClassName} onChange={e => setSelectedClassName(e.target.value)} />
                    <input className=" -border-slate-100 -bw-1 text-xl rounded-l pl-10"type="text" placeholder="class time" value={selectedClassTime} onChange={e => setSelectedClassTime(e.target.value)} />
                    <button className=" ml-4 p-2 w-38 rounded-xl  text-slate-500 text-center bg-blue-400 gray-200 border-2 border-slate-500 text-white" type="submit">Add</button>
            </form>
               
            
            <ul>
                    {classTimes.map((time, index) => (
                    <li key={index}>{classNames[index]} at {time}
                    <button className=" ml-4 p-2 w-38 rounded-xl  text-slate-500 text-center bg-blue-100 gray-200 border-2 border-slate-500 text-carolina-tarheelblue" onClick={() => handleDeleteClass(index)}>Delete</button>
                    </li>))}
            </ul>
                <div>
                    <button onClick={log}>
                        TEST
                    </button>
                </div>

                {/* Loader or Main Content */}
                {isLoading ? <Loader />
                 : ( <div className="flex justify-center items-center">
                        <div className="flex flex-col items-center">
                            <h1 className="text-center text-xl py-10">Add these DUMMY CLASSES!</h1>
                            <SearchBar />
                            

                            <ul className="flex flex-col gap-4">
                                {Object.values(availableClasses).map(( classObject, index ) => (
                                    <li key={index} className="pl-16 flex justify-center">
                                        <button key={index} className="p-3 pl-6 w-48 rounded-xl text-left bg-blue-100 gray-800 stroke-2 text-carolina-tarheelblue"
                                        onClick={() => handleAddClassFromDB(classObject.className, classObject.meetingStart, classObject.meetingEnd)}>
                                    
                                            {classObject.className}
                                            </button>
                                        </li>
                                        
                                ))}
                            </ul>
                        </div>
                        <div className="ml-10 flex items-center">
                            <p>schedule</p>
                    </div>
                </div>
                )
                }
            </div>
            </>
    )
}

export default ClassRegistration