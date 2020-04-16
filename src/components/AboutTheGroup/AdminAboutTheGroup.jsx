import {updateAboutName, updateAboutDesc} from "./UserAboutTheGroup";
import './AboutTheGroup.css';
import React from 'react';

let realAdminCode = "888"


const AdminAboutTheGroup = (props) => {

    let newName = React.createRef()
    let newDesc = React.createRef()
    // let newImage = React.createRef()
    let newNameId = React.createRef()
    let newDescId = React.createRef()
    // let newImageId = React.createRef()
    let AdminCode4Name = React.createRef()
    let AdminCode4Desc = React.createRef()
    // let AdminCode4Image = React.createRef()

    let updateName = () => {
        updateAboutName(AdminCode4Name.current.value, newNameId.current.value, newName.current.value)
        if (AdminCode4Name.current.value === realAdminCode) {
            newNameId.current.value = ''
            newName.current.value = ''
        }
    }
    let updateDesc = () => {
        updateAboutDesc(AdminCode4Desc.current.value, newDescId.current.value, newDesc.current.value)
        if (AdminCode4Desc.current.value === realAdminCode) {
            newDescId.current.value = ''
            newDesc.current.value = ''
        }
    }

    return (

        <div className='bgPosts'>

            <div className='bgPost'>
                <div className="update">
                    <div className="updateText">
                        Change name:
                    </div>
                    <div className="updateChange">
                        <textarea ref={AdminCode4Name} placeholder="Admin code" name="" cols="9" rows="1"></textarea>
                        <textarea ref={newNameId} placeholder="Id?" name="" cols="3" rows="1"></textarea>
                        <textarea ref={newName} placeholder="New name?" name="" cols="10" rows="1"
                                  class="updateName"></textarea>
                    </div>
                    <button className="updateButton" onClick={updateName}>Update</button>
                </div>
            </div>

            <div className='bgPost'>
                <div className="update">
                    <div className="updateText">
                        Change description:
                    </div>
                    <div className="updateChange">
                        <textarea ref={AdminCode4Desc} placeholder="Admin code" name="" cols="9" rows="1"></textarea>
                        <textarea ref={newDescId} placeholder="Id?" name="" cols="3" rows="1"></textarea>
                        <textarea ref={newDesc} placeholder="Description?" name="" cols="10" rows="1"
                                  class="updateName"></textarea>
                    </div>
                    <button className="updateButton" onClick={updateDesc}>Update</button>
                </div>
            </div>

        </div>
    )

}

export default AdminAboutTheGroup;