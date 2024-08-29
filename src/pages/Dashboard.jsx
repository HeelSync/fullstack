import { useCallback, useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
function Dashboard({ times, periods }) {
    const dispatch = useDispatch();
    const classTimes = useSelector(store => store.classes.classTimes);
    const classNames = useSelector(store => store.classes.classNames);
    const [timer, setTimer] = useState("You don't have a schedule!");
    const [nextClass, setNextClass] = useState("No class to go to!");


    function convertTimes(timeArray) {
        if(!Array.isArray(timeArray)) {
            return [];
        }
        const convertedTimes = [];
        if (timeArray.length === 0) return [];
        timeArray.forEach(timeRange => {
            // Extract the time parts using regex
            const timeParts = timeRange.match(/\d{1,2}:\d{2}\s?[APMapm]{2}/g);
    
            timeParts.forEach(time => {
                let [hour, minute] = time.match(/\d+/g); // Extract the hour and minute
                let period = time.match(/[APMapm]{2}/)[0].toUpperCase(); // Extract AM/PM
    
                // Convert hour to 24-hour format
                hour = parseInt(hour);
                if (period === "PM" && hour !== 12) {
                    hour += 12;
                } else if (period === "AM" && hour === 12) {
                    hour = 0; // Handle midnight case
                }
    
                // Convert hour and minute to the decimal format
                const decimalTime = `${hour}.${minute}`;
                convertedTimes.push(decimalTime);
            });
        });
    
        return convertedTimes;
    }

    const formattedTimes = convertTimes(classTimes);
    console.log(formattedTimes)

    const currentTimeCalc = useCallback((times, periods) => {
        let date = new Date();
        let day = date.getDay();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();

        const options = {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        }
        console.log("hi")
        const currentTime = parseFloat(hh) + parseFloat(mm / 60); 

        for(let i=0; i<times.length; i++) {
            let [classHour, classMinute] = times[i].split(".");
            let classTimeInMinutes = parseFloat(classHour) * 60 + parseFloat(classMinute);
            let currentTimeInMinutes = hh * 60 + mm;
            let timeDiffInMinutes;
            if (parseFloat(times[i]) > currentTime) {
                timeDiffInMinutes = classTimeInMinutes - currentTimeInMinutes;
            } else {
                timeDiffInMinutes = classTimeInMinutes + 1440 - currentTimeInMinutes;
            }

                let remainingHours = Math.floor(timeDiffInMinutes / 60);
                let remainingMinutes = timeDiffInMinutes % 60;

                remainingHours = remainingHours.toString().padStart(2, "0");
                remainingMinutes = remainingMinutes.toString().padStart(2, "0");
                ss = (60 - ss).toString().padStart(2, "0");

                setTimer(`${remainingHours}:${remainingMinutes}:${ss}`);
                setNextClass(`Until ${periods[i]}`);

                break;
        
        }
    }, [])
    
    useEffect(() => {
        currentTimeCalc(formattedTimes, classNames);
        const timerId = setTimeout(() => currentTimeCalc(formattedTimes, classNames), 1000);
        return () => clearTimeout(timerId); // Clear the timeout if the component unmounts or dependencies change
    }, [formattedTimes, classNames, currentTimeCalc]);
    
    return (
        <>
            <div className="flex flex-col justify-evenly items-center h-screen gap-1">
              
                <h3 className="text-6xl font-semibold pt-8">{timer}</h3>

                <h5 className="text-3xl font-light text-carolina-blue">{nextClass}</h5>

                <div className="p-10 h-128 w-full">

                    <ul className="p-8 rounded-3xl bg-gradient-to-tr from-sidebar-apurwa2 to-sidebar-apurwa1 h-full w-full
                    box-border max-h-full overflow-y-scroll">
                    
                        {classTimes.map((time, index) => (<li className="p-4 text-xl text-center text-stone-500"
                            key={index}>
                            {index+1}. {classNames[index]} at {time}
                            </li>) )}
                    </ul>
                </div>
                
            </div>

        
            
        </>
    )
}

export default Dashboard

