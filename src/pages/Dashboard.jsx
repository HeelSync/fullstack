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
            <div className="flex flex-col justify-evenly items-center h-screen gap-1">
              
                <h3 className="text-6xl font-semibold pt-8">01:23:37</h3>
                <h5 className="text-3xl font-light text-carolina-blue">Until LOOKSMAXXING 550</h5>

                <div className="p-10 h-128 w-full">

                    <ul className="p-8 rounded-xl bg-gradient-to-tr from-sidebar-apurwa2 to-sidebar-apurwa1 h-full w-full
                    box-border max-h-full overflow-y-scroll">
                    
                        {classTimes.map((time, index) => (<li className="p-4 text-xl text-center text-stone-500"
                            key={index}>
                            {classNames[index]} at {time}
                            </li>) )}
                    </ul>
                </div>
                
            </div>

        
            
        </>
    )
}

export default Dashboard

