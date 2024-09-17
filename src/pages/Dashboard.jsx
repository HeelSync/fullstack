import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function Dashboard() {
    const dispatch = useDispatch();
    const classTimesRaw = useSelector(store => store.classes.classTimes);
    const classNames = useSelector(store => store.classes.classNames);
    
    const [timer, setTimer] = useState("You don't have a schedule!");
    const [nextClass, setNextClass] = useState("No class to go to!");
   const classTimes = Array.isArray(classTimesRaw) ? classTimesRaw : classTimesRaw.split(',');

   //console.log("class times: " + classTimes);
    //console.log("class names: " + classNames);
    //console.log(formattedTimes)
    //console.log(classTimes)
    console.log(classNames)

    function timeToMinutes(time) {
        if (!time || typeof time !== 'string') {
            console.error("Invalid time format:", time);  // Log if time is invalid
            return 0;  // Return 0 for invalid times
        }
    
        const [hours, minutes] = time.split(':').slice(0, 2).map(Number);  // Extract hours and minutes
        if (isNaN(hours) || isNaN(minutes)) {
            console.error("Invalid hours or minutes:", time);  // Log invalid time parts
            return 0;
        }
    
        const totalMinutes = hours * 60 + minutes;  // Calculate total minutes
       // console.log(`Converted time: ${time} -> ${totalMinutes} minutes`);  // Log the conversion
        return totalMinutes;
    }


    // Function to calculate current time in minutes since midnight
    const currentTimeCalc = useCallback(() => {
        console.log("Running currentTimeCalc");
    
        const now = new Date();
        const currentHours = now.getHours();
        const currentMinutes = currentHours * 60 + now.getMinutes();
        const currentSeconds = now.getSeconds();
        const currentTotalSeconds = (currentHours * 3600) + (now.getMinutes() * 60) + currentSeconds;  // Total seconds since midnight
    
        //console.log(`Current time: ${currentHours}:${now.getMinutes()}:${currentSeconds} (Total seconds: ${currentTotalSeconds})`);
    
        //console.log("Start Times: ", classTimes);  // Ensure the classTimes are correct
    
        // Map over classTimes, and filter to find the next or ongoing class
        const todayClasses = classTimes.reduce((acc, _, index) => {
            if (index % 2 === 0 && classTimes[index] && classTimes[index + 1]) { // Ensure valid start and end times
                const startTime = classTimes[index];
                const startMinutes = timeToMinutes(startTime);
                const startSeconds = startMinutes * 60;  // Convert start time to total seconds for comparison
    
                const endTime = classTimes[index + 1];
                const endMinutes = timeToMinutes(endTime);
                const endSeconds = endMinutes * 60;
    
                console.log(`Class ${classNames[Math.floor(index / 2)]}: Start ${startTime} (${startSeconds} seconds), End ${endTime} (${endSeconds} seconds)`);
    
                acc.push({
                    startSeconds,  // Total seconds for comparison
                    endSeconds,
                    startOriginal: startTime,  // Keep the original time string for display
                    endOriginal: endTime,
                    name: classNames[Math.floor(index / 2)]
                });
            }
            return acc;
        }, [])
        .filter(classObj => classObj.endSeconds > currentTotalSeconds)  // Only keep classes that haven't ended yet
        .sort((a, b) => a.startSeconds - b.startSeconds);  // Sort by start time in seconds
    
        console.log("TODAY'S CLASSES!!!!!! ", todayClasses);  // Check the output of today's classes
    
        if (todayClasses.length > 0) {
            const ongoingClass = todayClasses[0];  // This is the next class, whether it's ongoing or upcoming
            
            if (ongoingClass.startSeconds <= currentTotalSeconds && currentTotalSeconds < ongoingClass.endSeconds) {
                // Class is currently ongoing
                const timeDiff = ongoingClass.endSeconds - currentTotalSeconds;  // Time left until the class ends
                
                const hours = Math.floor(timeDiff / 3600).toString().padStart(2, '0');
                const minutes = Math.floor((timeDiff % 3600) / 60).toString().padStart(2, '0');
                const seconds = (timeDiff % 60).toString().padStart(2, '0');
    
                // Set the timer to display hours, minutes, and seconds until the class ends
                setTimer(`${hours}:${minutes}:${seconds}`);
                setNextClass(`${ongoingClass.name} (ends at ${ongoingClass.endOriginal})`);  // Display the class name and end time
            } else {
                // Class hasn't started yet, show time until it starts
                const timeDiff = ongoingClass.startSeconds - currentTotalSeconds;  // Time difference in seconds until the next class starts
    
                const hours = Math.floor(timeDiff / 3600).toString().padStart(2, '0');
                const minutes = Math.floor((timeDiff % 3600) / 60).toString().padStart(2, '0');
                const seconds = (timeDiff % 60).toString().padStart(2, '0');
    
                // Set the timer to display hours, minutes, and seconds until the class starts
                setTimer(`${hours}:${minutes}:${seconds}`);
                setNextClass(ongoingClass.name + " starts at " + ongoingClass.startOriginal);  // Display the class name and original time
            }
        } else {
            // If there are no more classes left
            setTimer("No more classes today!");
            setNextClass("Take a break!");
        }
    }, [classTimes, classNames]);
    
    useEffect(() => {
        currentTimeCalc();
        const timerId = setInterval(() => currentTimeCalc(), 1000);  // Recalculate every second
        return () => clearInterval(timerId); // Clear the timeout if the component unmounts or dependencies change
    }, [currentTimeCalc]);


    // Sort classes by start time for display
    function sortClasses(times, names) {
        //console.log("Sorted with")
        //console.log(formattedTimes, classNames)
        const classes = times.map((time, index) => ({
            time: timeToMinutes(time),
            name: names[Math.floor(index / 2)]
        }));
    
        // Sort the array of objects by time
        classes.sort((a, b) => a.time - b.time);
    
        // Separate the sorted classes back into times and names arrays
        const sortedTimes = classes.map(classObj => classObj.time).filter(element => element !== undefined);
        const sortedNames = classes.map(classObj => classObj.name).filter(element => element !== undefined);
        return { sortedTimes, sortedNames };
    }
    
    const { sortedTimes, sortedNames } = sortClasses(classTimes, classNames);
    //console.log(sortedTimes, sortedNames)


    useEffect(() => {
        currentTimeCalc();
        const timerId = setInterval(() => currentTimeCalc(), 1000);  // Recalculate every minute
        return () => clearInterval(timerId); // Clear the timeout if the component unmounts or dependencies change
    }, [currentTimeCalc]);

    function convertToNormalTime(time) {
        const timeStr = time.split(":");
        let hour = parseInt(timeStr[0]); 
        const minute = timeStr[1];
        const sign = hour >= 12 ? "PM" : "AM";

        // Convert to 12-hour format
        if (hour > 12) {
            hour -= 12;
        } else if (hour === 0) {
            hour = 12;  // Midnight case
        }

        return `${hour}:${minute}${sign}`;
    }
    
    
    return (
        <>
            <div className="flex flex-col justify-evenly items-center h-screen gap-1">
                <h3 className={`text-6xl font-extrabold text-black pt-8 text-center mx-auto tabular-nums`}>{timer}</h3>
                <h5 className="text-3xl font-light text-carolina-blue">{nextClass}</h5>
                <div className="p-10 h-128 w-full">
                    <ul className="p-8 shadow-md rounded-3xl bg-gradient-to-t from-sidebar-apurwa4 to-sidebar-apurwa5 h-full w-full
                    box-border max-h-full overflow-y-scroll"> 
                        {classTimes.map((time, originalIndex) => ({time, originalIndex})).filter(({ originalIndex }) => originalIndex%2==1)
                        .map(({ time, originalIndex }, index) => (
                            <li className="p-4 text-2xl text-center text-better-white font-light" key={index}>
                                {index+1}. {classNames[originalIndex]} at {convertToNormalTime(classTimes[originalIndex])}
                                </li>
                        ))
                    }
                     
                    </ul>
                </div>
            </div> 
        </>
    )
}

export default Dashboard