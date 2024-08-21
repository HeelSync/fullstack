import { useReducer, useState } from "react";
import ramses from "../assets/ramsesHead-removebg-preview.png";

const starterSchedule = [
    ""
]

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
function Dashboard() {
    const [times, setTimes] = useState()
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
            </div>
        </>
    )
}

export default Dashboard
