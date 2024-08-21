import { useEffect, useState } from "react"
import { getClasses } from "../registration_data/apiClasses"
function ClassRegistration() {
    useEffect(function() {
        getClasses().then(data=>console.log(data));
    }, [])
    const [schedule, setSchedule] = useState([]);
    return (
        <div>
            Class Registration
        </div>
    )
}

export default ClassRegistration