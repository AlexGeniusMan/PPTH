import {updateTimeTableData} from '../../redux/state';
import React from 'react';
import './Timetable.css';


let realAdminCode = "8888-8888"


const AdminTimetable = (props) => {

    let newSubject = React.createRef()
    let newTeacher = React.createRef()
    let newPlace = React.createRef()
    let newCouple = React.createRef()
    let newDay = React.createRef()
    let AdminCode = React.createRef()

    let updateTT = () => {
        updateTimeTableData(AdminCode.current.value, newDay.current.value, newCouple.current.value, newSubject.current.value, newTeacher.current.value, newPlace.current.value)
        if (AdminCode.current.value === realAdminCode) {
            newDay.current.value = ''
            newCouple.current.value = ''
            newSubject.current.value = ''
            newTeacher.current.value = ''
            newPlace.current.value = ''
        }
    }

    return (

        <div className="timetable">
            Update timetable:
            <div className="timetableUpdate">
                    <textarea ref={AdminCode}
                              placeholder="Admin code? Ex: GhT-mJF"
                              name="" id="" cols="" rows="1" className="timetableAdmin"></textarea>
                <textarea ref={newSubject}
                          placeholder="Subject? Ex: Сomputer science"
                          name="" id="" cols="" rows="1" className="timetableContent"></textarea>
            </div>
            <div className="timetableUpdate">
                    <textarea ref={newDay}
                              placeholder="Day number? Ex: 2"
                              name="" id="" cols="" rows="1" className="timetableAdmin"></textarea>
                <textarea ref={newTeacher}
                          placeholder="Teacher? Ex: Karpov"
                          name="" id="" cols="" rows="1" className="timetableContent"></textarea>
            </div>
            <div className="timetableUpdate">
                    <textarea ref={newCouple}
                              placeholder="Couple number? Ex: 3"
                              name="" id="" cols="" rows="1" className="timetableAdmin"></textarea>
                <textarea ref={newPlace}
                          placeholder="Place? Ex: A-11"
                          name="" id="" cols="" rows="1" className="timetableContent"></textarea>
            </div>
            <button className="updateButton" onClick={updateTT}>Update</button>
        </div>
    )
}

export default AdminTimetable;