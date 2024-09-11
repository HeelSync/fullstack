import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
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
    
    const parsedClassDetails = classTimes.length > 0 ? parseClassDetails(classTimes) : [];
    const sortedDetails = sortClasses(parsedClassDetails.flatMap(detail => detail.times), classNames);


    function parseClassDetails(timeArray) {
        if (!Array.isArray(timeArray) || timeArray.length === 0) {
            return [];
        }
        const classDetails = timeArray.map((timeString) => {
            const timeParts = timeString.split(":");
            return parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]);
        });
        return classDetails;
    }

    const classDetails = parseClassDetails(classTimes);
    const formattedTimes = classDetails.flatMap(detail => detail.times);
    const dayPatterns = classDetails.map(detail => detail.dayPattern);
    //console.log(formattedTimes)
    //console.log(classTimes)

    const daysMap = useMemo(() => ({
        MWF: [1, 3, 5],
        TTH: [2, 4]
    }), [])

    function timeToMinutes(time) {
        if(!time || typeof time !== 'string') {
            console.error("TIME IS NOT A VALID STRING");
            console.log(typeof(time))
            return 0;
        }
        const [hours, minutes] = time.split(':').slice(0, 2).map(Number);
        return hours * 60 + minutes;  // Return total minutes
    }

    const currentTimeCalc = useCallback(() => {
        console.log("Running currentTimeCalc");
        console.log("Start Times: " + classTimes)
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();

        const todayClasses = classTimes.reduce((acc, _, index) => {
            if (index % 2 === 0 && classTimes[index] && classTimes[index + 1]) { // Ensure valid start and end times
                acc.push({
                    start: timeToMinutes(classTimes[index]),
                    end: timeToMinutes(classTimes[index + 1]),
                    name: classNames[Math.floor(index / 2)]
                });
            }
            return acc;
        }, [])
        .filter(classObj => classObj.start > currentMinutes)
        .sort((a, b) => a.start - b.start);

        if (todayClasses.length > 0) {
            const upcomingClass = todayClasses[0];
            const timeDiff = upcomingClass.start - currentMinutes;
            setTimer(`${Math.floor(timeDiff / 60).toString().padStart(2, "0")}:${(timeDiff % 60).toString().padStart(2, "0")}`);
            setNextClass(upcomingClass.name);
        } else {
            setTimer("No more classes today!");
            setNextClass("Take a break!");
        }
    }, [classTimes, classNames]);


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
    
    const { sortedTimes, sortedNames } = sortClasses(formattedTimes, classNames);
    //console.log(sortedTimes, sortedNames)


    useEffect(() => {
        currentTimeCalc();
        const timerId = setInterval(() => currentTimeCalc(), 60000);
        return () => clearInterval(timerId); // Clear the timeout if the component unmounts or dependencies change
    }, [currentTimeCalc]);
    
    
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
                            {index+1}. {sortedNames[index]} at {sortedTimes}
                            </li>) )}
                    </ul>
                </div>
            </div> 
        </>
    )
}

export default Dashboard

