import state, {updateTimeTableData} from '../../redux/state';
import realAdminCode from '../../redux/state';
import React from 'react';
import './UserAndAdminTimetable.css';


const Couple = (props) => {
    return (
        <li>
            <div className="row">
                <div className="info">1</div>
                <text>{props.subjectName}</text>
                <text>{props.teacherName}</text>
                <text>{props.placeName}</text>
            </div>
        </li>
    )
}

const UserTimetable = (props) => {

    let Monday = state.TimeTableData[0].map(temp => <Couple subjectName={temp.subjectName}
                                                           teacherName={temp.teacherName}
                                                           placeName={temp.placeName}
    />);

    let Tuesday = state.TimeTableData[1].map(temp => <Couple subjectName={temp.subjectName}
                                                            teacherName={temp.teacherName}
                                                            placeName={temp.placeName}
    />);

    let Wednesday = state.TimeTableData[2].map(temp => <Couple subjectName={temp.subjectName}
                                                              teacherName={temp.teacherName}
                                                              placeName={temp.placeName}
    />);

    let Thursday = state.TimeTableData[3].map(temp => <Couple subjectName={temp.subjectName}
                                                             teacherName={temp.teacherName}
                                                             placeName={temp.placeName}
    />);

    let Friday = state.TimeTableData[4].map(temp => <Couple subjectName={temp.subjectName}
                                                           teacherName={temp.teacherName}
                                                           placeName={temp.placeName}
    />);

    let Saturday = state.TimeTableData[5].map(temp => <Couple subjectName={temp.subjectName}
                                                             teacherName={temp.teacherName}
                                                             placeName={temp.placeName}
    />);

    let newSubject = React.createRef()
    let newTeacher = React.createRef()
    let newPlace = React.createRef()
    let newCouple = React.createRef()
    let newDay = React.createRef()
    let AdminCode = React.createRef()

    let updateTT = () => {
        updateTimeTableData(AdminCode.current.value, newDay.current.value, newCouple.current.value, newSubject.current.value, newTeacher.current.value, newPlace.current.value)
        if (AdminCode.current.value == state.realAdminCode) {
            newDay.current.value = ''
            newCouple.current.value = ''
            newSubject.current.value = ''
            newTeacher.current.value = ''
            newPlace.current.value = ''
        }
    }

    return (
        <div className='bgPosts'>

            {/*<div className="row">*/}
            {/*    <div className="info">Update it -></div>*/}
            {/*    <textarea className="info" name="object" id="" cols="15" rows="1"*/}
            {/*              ref={AdminCode}*/}
            {/*              placeholder="Day? Ex: Monday">888</textarea>*/}
            {/*    <textarea className="info" name="object" id="" cols="15" rows="1"*/}
            {/*              ref={newDay}*/}
            {/*              placeholder="Day? Ex: Monday">1</textarea>*/}
            {/*    <textarea className="info" name="object" id="" cols="15" rows="1"*/}
            {/*              ref={newCouple}*/}
            {/*              placeholder="Couple? Ex: 3">3</textarea>*/}
            {/*    <textarea className="info" name="object" id="" cols="15" rows="1"*/}
            {/*              ref={newSubject}*/}
            {/*              placeholder="Subject?">123</textarea>*/}
            {/*    <textarea className="info" name="professor" id="" cols="15" rows="1"*/}
            {/*              ref={newTeacher} placeholder="Teacher?">123</textarea>*/}
            {/*    <textarea className="info" name="class" id="" cols="15" rows="1"*/}
            {/*              ref={newPlace} placeholder="Place?">123</textarea>*/}
            {/*    <button onClick={updateTT}>Update it!</button>*/}
            {/*</div>*/}


            {/*---------------------------------------------------------------------*/}


            <div className="timetable">
                <div className="day">
                    1. Monday
                    <div className="lessons">
                        <ul className="column">
                            {Monday}
                        </ul>
                    </div>
                </div>
                {/*---------------------------------------------------------------------*/}
                <div className="day">
                    2. Tuesday
                    <div className="lessons">
                        <ul className="column">
                            {Tuesday}
                        </ul>
                    </div>
                </div>
                {/*---------------------------------------------------------------------*/}
                <div className="day">
                    3. Wednesday
                    <div className="lessons">
                        <ul className="column">
                            {Wednesday}
                        </ul>
                    </div>
                </div>
                {/*---------------------------------------------------------------------*/}
                <div className="day">
                    4. Thursday
                    <div className="lessons">
                        <ul className="column">
                            {Thursday}
                        </ul>
                    </div>
                </div>
                {/*---------------------------------------------------------------------*/}
                <div className="day">
                    5. Friday
                    <div className="lessons">
                        <ul className="column">
                            {Friday}
                        </ul>
                    </div>
                </div>
                {/*---------------------------------------------------------------------*/}
                <div className="day">
                    6. Saturday
                    <div className="lessons">
                        <ul className="column">
                            {Saturday}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserTimetable;