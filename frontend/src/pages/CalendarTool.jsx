import { useState } from "react"
import Calendar from "react-calendar"

const ValuePiece = Date | null;
const Value = ValuePiece | [ValuePiece, ValuePiece];

function CalendarTool() {
    const [value, setValue] = useState(new Date());
    return (
        <div className="flex flex-row flex-wrap p-3 mx-3">
            <Calendar className="flex max-w-full basis-[420px] flex-col flex-grow items-stretch pt-4"
             value={value} />
        </div>
    )
}

export default CalendarTool
