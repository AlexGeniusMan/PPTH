import state, {updateTimeTableData} from '../../redux/state';
import realAdminCode from '../../redux/state';
import React from 'react';
import './UserAndAdminTimetable.css';


const Couple = (props) => {
    return (
        <li>
            <div className="row">
                <div className="info">{props.coupleName}</div>
                <text>{props.subjectName}</text>
                <text>{props.teacherName}</text>
                <text>{props.placeName}</text>
            </div>
        </li>
    )
}

const AdminTimetable = (props) => {

    let Monday = state.TimeTableData[0].map(temp => <Couple subjectName={temp.subjectName}
                                                            teacherName={temp.teacherName}
                                                            placeName={temp.placeName}
                                                            coupleName={temp.coupleName}
    />);

    let Tuesday = state.TimeTableData[1].map(temp => <Couple subjectName={temp.subjectName}
                                                             teacherName={temp.teacherName}
                                                             placeName={temp.placeName}
                                                             coupleName={temp.coupleName}
    />);

    let Wednesday = state.TimeTableData[2].map(temp => <Couple subjectName={temp.subjectName}
                                                               teacherName={temp.teacherName}
                                                               placeName={temp.placeName}
                                                               coupleName={temp.coupleName}
    />);

    let Thursday = state.TimeTableData[3].map(temp => <Couple subjectName={temp.subjectName}
                                                              teacherName={temp.teacherName}
                                                              placeName={temp.placeName}
                                                              coupleName={temp.coupleName}
    />);

    let Friday = state.TimeTableData[4].map(temp => <Couple subjectName={temp.subjectName}
                                                            teacherName={temp.teacherName}
                                                            placeName={temp.placeName}
                                                            coupleName={temp.coupleName}
    />);

    let Saturday = state.TimeTableData[5].map(temp => <Couple subjectName={temp.subjectName}
                                                              teacherName={temp.teacherName}
                                                              placeName={temp.placeName}
                                                              coupleName={temp.coupleName}
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

            <div className="timetable">
                There you can update timetable
                <div className="timetableUpdate">
                    <textarea ref={AdminCode}
                              placeholder="Admin code?"
                              name="" id="" cols="" rows="1" className="timetableAdmin">888</textarea>
                    <textarea ref={newSubject}
                              placeholder="Subject?"
                              name="" id="" cols="" rows="1" className="timetableContent">Subject</textarea>
                </div>
                <div className="timetableUpdate">
                    <textarea ref={newDay}
                              placeholder="Day number? Ex: 2"
                              name="" id="" cols="" rows="1" className="timetableAdmin">1</textarea>
                    <textarea ref={newTeacher}
                              placeholder="Teacher?"
                              name="" id="" cols="" rows="1" className="timetableContent">Teacher</textarea>
                </div>
                <div className="timetableUpdate">
                    <textarea ref={newCouple}
                              placeholder="Couple? Ex: 3"
                              name="" id="" cols="" rows="1" className="timetableAdmin">1</textarea>
                    <textarea  ref={newPlace}
                               placeholder="Place?"
                               name="" id="" cols="" rows="1" className="timetableContent">Place</textarea>
                </div>
                <button className="updateButton" onClick={updateTT}>Update</button>
                {/*<a href="#" className="timetableUpdateButton">Обновить расписание</a>*/}
            </div>
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

export default AdminTimetable;