import { useCallback, useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
function Dashboard() {
    const dispatch = useDispatch();
    const classTimes = useSelector(store => store.classes.classTimes);
    const classNames = useSelector(store => store.classes.classNames);
    console.log(classTimes);
    console.log(classNames);
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
        //console.log("Called with times" , times, periods)
        if (times.length === 0 || periods.length === 0) {
            return;
        }
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
        
        const currentTime = parseFloat(hh) + parseFloat(mm / 60); 
        

        const timeToMinutes = time => {
            let [hours, min] = time.split('.').map(Number);
            return hours * 60 + min;
        }
        let classStartInMin = timeToMinutes(times[0]);
        let classEndInMin = timeToMinutes(times[1])
        let classPeriodLength = classEndInMin - classStartInMin //THIS
        for(let i=0; i<times.length; i++) {
            let [classHour, classMinute] = times[i].split(".");
            let classTimeInMinutes = parseFloat(classHour) * 60 + parseFloat(classMinute);
            let currentTimeInMinutes = hh * 60 + mm;
            let timeDiffInMinutes;
            /*
            if (day == 6) {
                setTimer("Enjoy your weekend!");
                setNextClass("Take a break and do something fun!")
                return;
            }*/
            if (parseFloat(times[i]) > currentTime) {
                timeDiffInMinutes = classTimeInMinutes - currentTimeInMinutes;
            } 
            else if ((parseFloat(times[i+1]) > currentTime) ) {
                timeDiffInMinutes = classTimeInMinutes - currentTimeInMinutes + classPeriodLength;
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
                setNextClass(`${periods[i]}`);

                break;
        
        }
    }, [])


    function sortClasses(times, names) {
        //console.log("Sorted with")
        //console.log(formattedTimes, classNames)
        const classes = times.map((time, index) => ({
            time,
            name: names[index]
        }));
    
        // Sort the array of objects by time
        classes.sort((a, b) => {
            // Convert time to minutes for proper comparison
            const timeToMinutes = (time) => {
                let [hours, minutes] = time.split('.').map(Number);
                return hours * 60 + minutes;  // Convert time to total minutes
            };
    
            // Compare the converted time (in minutes)
            return timeToMinutes(a.time) - timeToMinutes(b.time);
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
                            {index+1}. {sortedNames[index]} at {sortedTimes.map(time => time + ", ")}
                            </li>) )}
                    </ul>
                </div>
                
            </div>

        
            
        </>
    )
}

export default Dashboard

