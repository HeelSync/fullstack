import { useCallback, useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
function Dashboard() {
    const dispatch = useDispatch();
    const classTimes = useSelector(store => store.classes.classTimes);
    const classNames = useSelector(store => store.classes.classNames);
    const [timer, setTimer] = useState("You don't have a schedule!");
    const [nextClass, setNextClass] = useState("No class to go to!");


    function parseClassDetails(timeArray) {
        if (!Array.isArray(timeArray) || timeArray.length === 0) {
            return [];
        }
        
        const classDetails = timeArray.map(timeRange => {
            const dayPatternRegex = /Mo|Tu|We|Th|Fr/g;
            const dayMatches = timeRange.match(dayPatternRegex);
            const dayPattern = dayMatches ? dayMatches.join("") : "";
            const timeParts = timeRange.match(/\d{1,2}:\d{2}\s?[APMapm]{2}/g);
    
            const convertedTimes = timeParts ? timeParts.map(time => {
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
                return `${hour}.${minute}`;
            }) : [];
    
            return {
                dayPattern: dayPattern,
                times: convertedTimes
            };
        });
    
        return classDetails;
    }

    const classDetails = parseClassDetails(classTimes);
    const formattedTimes = classDetails.flatMap(detail => detail.times);
    const dayPatterns = classDetails.map(detail => detail.dayPattern);
    //console.log(formattedTimes)
    //console.log(classTimes)

    const daysMap = {
        MWF: [1, 3, 5],
        TTH: [2, 4]
    }

    const currentTimeCalc = useCallback((times, periods) =>{
        console.log("Called with times" , times, periods)
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
        console.log("times")
        const currentTime = parseFloat(hh) + parseFloat(mm / 60); 

        for(let i=0; i<times.length; i++) {
            let [classHour, classMinute] = times[i].split(".");
            let classTimeInMinutes = parseFloat(classHour) * 60 + parseFloat(classMinute);
            let currentTimeInMinutes = hh * 60 + mm;
            let timeDiffInMinutes;
            if (day == 6) {
                setTimer("Enjoy your weekend!");
                setNextClass("Take a break and do something fun!")
                return;
            }
            if (parseFloat(times[i]) > currentTime) {
                timeDiffInMinutes = classTimeInMinutes - currentTimeInMinutes;
            } 
            else if ((parseFloat(times[i+1]) > currentTime) && ((day == 1) || (day == 3) || (day == 5))) {
                timeDiffInMinutes = classTimeInMinutes - currentTimeInMinutes + 50;
            }
            else if ((parseFloat(times[i+1]) > currentTime) && ((day == 2) || (day == 4))) {
                timeDiffInMinutes = classTimeInMinutes - currentTimeInMinutes + 75;
            }
            else {
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

    function sortClasses(times, names) {
        
        // Combine times and names into an array of objects
        const classes = times.map((time, index) => ({
            time,
            name: names[index]
        }));
    
        // Sort the array of objects by time
        classes.sort((a, b) => {
            let [hourA, minuteA] = a.time.split(".");
            let [hourB, minuteB] = b.time.split(".");
            hourA = parseFloat(hourA);
            minuteA = parseFloat(minuteA);
            hourB = parseFloat(hourB);
            minuteB = parseFloat(minuteB);
            return hourA !== hourB ? hourA - hourB : minuteA - minuteB;
        });
    
        // Separate the sorted classes back into times and names arrays
        const sortedTimes = classes.map(classObj => classObj.time).filter(element => element !== undefined);
        const sortedNames = classes.map(classObj => classObj.name).filter(element => element !== undefined);
        return { sortedTimes, sortedNames };
    }
    
    const { sortedTimes, sortedNames } = sortClasses(formattedTimes, classNames);
    console.log(sortedTimes, sortedNames)
    useEffect(() => {
        currentTimeCalc(sortedTimes, sortedNames);
        const timerId = setTimeout(() => currentTimeCalc(sortedTimes, sortedNames), 1000);
        return () => clearTimeout(timerId); // Clear the timeout if the component unmounts or dependencies change
    }, [sortedTimes, sortedNames, classNames, formattedTimes, currentTimeCalc]);
    

    
    return (
        <>
            <div className="flex flex-col justify-evenly items-center h-screen gap-1">
              
                <h3 className="text-6xl font-extrabold text-black pt-8">{timer}</h3>

                <h5 className="text-3xl font-light text-carolina-blue">{nextClass}</h5>

                <div className="p-10 h-128 w-full">

                    <ul className="p-8 shadow-md rounded-3xl bg-gradient-to-t from-sidebar-apurwa4 to-sidebar-apurwa5 h-full w-full
                    box-border max-h-full overflow-y-scroll">
                    
                        {classTimes.map((time, index) => (<li className="p-4 text-2xl text-center text-better-white font-light"
                            key={index}>
                            {index+1}. {sortedNames[index]} at {time}
                            </li>) )}
                    </ul>
                </div>
                
            </div>

        
            
        </>
    )
}

export default Dashboard

