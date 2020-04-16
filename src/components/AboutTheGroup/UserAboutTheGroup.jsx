import {rerenderEntireTree} from "../../render";
import image_1 from "../../redux/Images/1.jpg";
import image_2 from "../../redux/Images/2.jpg";
import image_3 from "../../redux/Images/3.jpg";
import image_4 from "../../redux/Images/4.jpg";
import image_5 from "../../redux/Images/5.jpg";
import image_6 from "../../redux/Images/6.jpg";
import state from "../../redux/state";
import './AboutTheGroup.css';
import React from 'react';
import User from './User'

let realAdminCode = "888"

let stateAbout = {
    realAdminCode: 888,
    AboutData: [
        {
            id: 1,
            name: 'Gregory House',
            image: image_1,
            desc: '"It’s a basic truth of the human condition that everybody lies. The only variable is about what."'
        },
        {
            id: 2,
            name: 'Lisa Cuddy',
            image: image_2,
            desc: '"When things go run, I don\'t wanna hope I\'m not alone, I wanna know it."'
        },
        {
            id: 3,
            name: 'James Wilson',
            image: image_3,
            desc: '"My watch must have stopped. Must be a quarter to never."'
        },
        {
            id: 4,
            name: 'Eric Foreman',
            image: image_4,
            desc: '"I\'d stand outside your apartment all night and hold a boom box, except you told me you hate 80\'s music."'
        },
        {
            id: 5,
            name: 'Allison Cameron',
            image: image_5,
            desc: '"We need to get away from Princeton-Plainsboro."'
        },
        {
            id: 6,
            name: 'Robert Chase',
            image: image_6,
            desc: '"Getting knifed doesn\'t get me an extension?"'
        }
    ]
}



export let updateAboutName = (AdminCode4Name, newNameId, newName) => {
    if (AdminCode4Name === realAdminCode) {
        if (Number(newNameId) > 0 && Number(newNameId) < 7) {
            let Id = String(+newNameId - 1)
            debugger
            stateAbout.AboutData[Id].name = newName

            rerenderEntireTree(state)
        } else {
            alert('False id!')
        }
    } else {
        alert('False AdminCode!')
    }
}

export let updateAboutDesc = (AdminCode4Desc, newDescId, newDesc) => {
    if (AdminCode4Desc === realAdminCode) {
        if (Number(newDescId) > 0 && Number(newDescId) < 7) {
            let Id = String(+newDescId - 1)
            stateAbout.AboutData[Id].desc = newDesc

            rerenderEntireTree(state)
        } else {
            alert('False id!')
        }
    } else {
        alert('False AdminCode!')
    }
}

const UserAboutTheGroup = (props) => {

    let Users = stateAbout.AboutData.map(temp => <User id={temp.id} name={temp.name} image={temp.image}
                                                       desc={temp.desc}/>);

    return (
        <div className='bgPosts'>

            <h2>About us</h2>
            <div className="information">Princeton-Plainsboro Teaching Hospital (or PPTH) is the fictitious teaching
                hospital where House is set. It is located in Princeton, New Jersey on Prospect Street (as seen on
                Chase's GPS when he rushes to the hospital in After Hours) The hospital presumably is located near the
                neighboring township of Plainsboro. Princeton University's Frist Campus Center is used in the aerial
                screen shots. It was apparently based on a hospital near where series co-creator Bryan Singer grew up.
            </div>
            {Users}

        </div>
    )
}

export default UserAboutTheGroup;