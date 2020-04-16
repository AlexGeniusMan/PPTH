import React from 'react';
import './Timetable.css';

const Couple = (props) => {
    return (
        <li>
            <div className="row">
                <div className="info">
                    {props.Id}
                    <text>{props.subjectName}</text>
                </div>
                <div className="lecturer">
                    <text>{props.teacherName}</text>
                    <text>{props.placeName}</text>
                </div>
            </div>
        </li>
    )
}

export default Couple;