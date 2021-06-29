import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import './calender.css'

const CalenderSections = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    return (
        <>
            <div className="card">

                <div className="card-body d-flex justify-content-center">


                    <Calendar
                        value={selectedDay}
                        onChange={setSelectedDay}
                        calendarClassName="responsive-calendar" // added this
                        shouldHighlightWeekends
                    />


                </div>
            </div>
        </>
    )
}
export default CalenderSections