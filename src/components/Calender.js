import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';

import './calender.css'

const CalenderSections = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [time, setTime] = useState('');
    const [time1, setTime1] = useState('');
    return (
        <>
            <div className="card">

                <div className="card-body ">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center">
                            <Calendar
                                value={selectedDay}
                                onChange={setSelectedDay}
                                calendarClassName="responsive-calendar" // added this
                                shouldHighlightWeekends
                            />
                        </div>
                        <div className="col-md-6 ">
                            <div className="mt-5 pb-4">
                            <h5>CheckIn time: {time || '-'}</h5>
                            <TimePicker
                                
                                placeholder="Select Time"
                                use12Hours
                                showSecond={false}
                                focusOnOpen={true}
                                format="hh:mm A"
                                onChange={e => setTime(e.format('LT'))}
                            />
                            </div>
                            <div className="text-secondary h3">
                                To
                            </div>
                            <div className="pt-4">
                            <h5>Checkout Time: {time1 || '-'}</h5>
                            <TimePicker
                                placeholder="Select Time"
                                use12Hours
                                showSecond={false}
                                focusOnOpen={true}
                                format="hh:mm A"
                                onChange={e => setTime1(e.format('LT'))}
                            />
                            </div>
                        </div>

                    </div>





                </div>
            </div>
        </>
    )
}
export default CalenderSections