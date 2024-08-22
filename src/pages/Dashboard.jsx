import { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addClassTime, addClassName, removeClass } from "../state/classSlice";
import ramses from "../assets/ramsesHead-removebg-preview.png";


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
function Dashboard() {
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
    return (
        <>
            <div>
                <img className="h-60 w-62"
                src={ramses} alt="Image of UNC mascot Ramses"/>
                <h5>Circle Time</h5>
                <h5>Circle Text</h5>
            </div>
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

export default Dashboard

