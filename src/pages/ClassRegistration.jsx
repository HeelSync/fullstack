import { useEffect, useState } from "react"
import { getClasses } from "../registration_data/apiClasses"
import { addClassTime, addClassName, removeClass } from "../state/classSlice";
import { useDispatch, useSelector } from "react-redux";
function ClassRegistration() {
    const dispatch = useDispatch();
    const classTimes = useSelector(store => store.classes.classTimes);
    const classNames = useSelector(store => store.classes.classNames);

    const [selectedClassTime, setSelectedClassTime] = useState("");
    const [selectedClassName, setSelectedClassName] = useState("");

    function handleAddClassTime() {
        if (selectedClassTime === "" && selectedClassName === "") return;
        const classtime = selectedClassTime;
        dispatch(addClassTime(classtime));
        setSelectedClassTime("");
    }
    function handleAddClassName() {
        if (selectedClassName === "" && selectedClassTime === "") return;
        const classname = selectedClassName;
        dispatch(addClassName(classname));
        setSelectedClassName("");
    }

    function handleAddClass() {
        if (selectedClassName !== "" && selectedClassTime !== "") {
            dispatch(addClassName(selectedClassName));
            dispatch(addClassTime(selectedClassTime));
            setSelectedClassTime("");
            setSelectedClassName("");
        }
    }

    function handleDeleteClass(index) {
        dispatch(removeClass(index));
    }
        useEffect(function() {
        getClasses().then(data=>console.log(data));
    }, [])
    const [schedule, setSchedule] = useState([]);
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
            </div>
            </>
    )
}

export default ClassRegistration