import React from 'react';
import './Timetable.css';
import Couple from "./Couple";


const UserTimetable = (props) => {

    const tempDay = (tempWeek, tempState) => {
        let tempTT
        for (let i = 0; i < 6; i++) {
            tempTT = 'timetable_' + (i + 1)
            tempWeek[i] = tempState[tempTT].map(temp => <Couple subjectName={temp.subject}
                                                                teacherName={temp.teacher}
                                                                placeName={temp.place}
                                                                Id={temp.id}/>)
        }
        return tempWeek
    }

    let tempWeek = []
    let WeekTT = tempDay(tempWeek, props.state)

    return (

        <div className="timetable">
            <h2>Timetable</h2>
            <div className="day">
                1. Monday
                <div className="lessons">
                    <ul className="column">
                        {WeekTT[0]}
                    </ul>
                </div>
            </div>
            {/*---------------------------------------------------------------------*/}
            <div className="day">
                2. Tuesday
                <div className="lessons">
                    <ul className="column">
                        {WeekTT[1]}
                    </ul>
                </div>
            </div>
            {/*---------------------------------------------------------------------*/}
            <div className="day">
                3. Wednesday
                <div className="lessons">
                    <ul className="column">
                        {WeekTT[2]}
                    </ul>
                </div>
            </div>
            {/*---------------------------------------------------------------------*/}
            <div className="day">
                4. Thursday
                <div className="lessons">
                    <ul className="column">
                        {WeekTT[3]}
                    </ul>
                </div>
            </div>
            {/*---------------------------------------------------------------------*/}
            <div className="day">
                5. Friday
                <div className="lessons">
                    <ul className="column">
                        {WeekTT[4]}
                    </ul>
                </div>
            </div>
            {/*---------------------------------------------------------------------*/}
            <div className="day">
                6. Saturday
                <div className="lessons">
                    <ul className="column">
                        {WeekTT[5]}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UserTimetable;