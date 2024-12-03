import { useCallback } from "react";

function OGDashboard() {
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
            
            //if (day == 6) {
              //  setTimer("Enjoy your weekend!");
                //setNextClass("Take a break and do something fun!")
                //return;
            
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
    return (
        <div>
            
        </div>
    )
}

export default OGDashboard
