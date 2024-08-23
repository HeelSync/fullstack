import { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addClassTime, addClassName, removeClass } from "../state/classSlice";
import ramses from "../assets/ramsesHead-removebg-preview.png";


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
function Dashboard() {
    const dispatch = useDispatch();
    const classTimes = useSelector(store => store.classes.classTimes);
    const classNames = useSelector(store => store.classes.classNames);



    
    return (
        <>
            <div className="flex flex-col justify-stretch items-center h-screen gap-10">
              
                <h3 className="text-6xl font-semibold pt-20">01:23:37</h3>
                <h5 className="text-3xl font-light text-carolina-blue">Until LOOKSMAXXING 550</h5>
                <ul>
                {classTimes.map((time, index) => (<li key={index}>{classNames[index]} at {time}</li>) )}
            </ul>
            </div>

        <div>
            Classes!
           
        </div>
            
        </>
    )
}

export default Dashboard

