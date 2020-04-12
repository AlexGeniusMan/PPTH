import React from 'react';
import './UserAndAdminAboutTheGroup.css';
import * as axios from 'axios';
import state, {updateAboutDesc, updateAboutImage, updateAboutName} from "../../redux/state";
import image_1 from "../../redux/Images/1.jpg";
import image_2 from "../../redux/Images/2.jpg";
import image_3 from "../../redux/Images/3.jpg";
import image_4 from "../../redux/Images/4.jpg";
import image_5 from "../../redux/Images/5.jpg";
import image_6 from "../../redux/Images/6.jpg";


const User = (props) => {
    return <div>
        <div className="group-mate">
            <div className="pos">{props.id}</div>
            <div className="photo">
                <img src={props.image} alt="profile-photo" vspace="0"/>
            </div>
            <div className="profile">
                <div className="profile-name">{props.name}</div>
                <div className="profile-text">{props.desc}</div>
            </div>
        </div>
    </div>
}


const AdminAboutTheGroup = (props) => {

    // axios.get("https://my-json-server.typicode.com/typicode/demo/posts").then(response => {
    //     debugger
    //     let dataTemp = response.data;
    //     debugger
    // })

    let newName = React.createRef()
    let newDesc = React.createRef()
    let newImage = React.createRef()
    let newNameId = React.createRef()
    let newDescId = React.createRef()
    let newImageId = React.createRef()
    let AdminCode4Name = React.createRef()
    let AdminCode4Desc = React.createRef()
    let AdminCode4Image = React.createRef()

    let updateName = () => {
        updateAboutName(AdminCode4Name.current.value, newNameId.current.value, newName.current.value)
        if (AdminCode4Name.current.value == state.realAdminCode) {
            newNameId.current.value = ''
            newName.current.value = ''
        }
    }
    let updateDesc = () => {
        updateAboutDesc(AdminCode4Desc.current.value, newDescId.current.value, newDesc.current.value)
        if (AdminCode4Desc.current.value == state.realAdminCode) {
            newDescId.current.value = ''
            newDesc.current.value = ''
        }
    }



    let updateImage = (e) => {
        debugger
        updateAboutImage(e.target.files[0])
        debugger
        // if (AdminCode4Image.current.value == state.realAdminCode) {
        //     newImageId.current.value = ''
        //     туцШ.current.value = ''
        // }
    }


    let Users = state.AboutData.map(temp => <User id={temp.id} name={temp.name} image={temp.image} desc={temp.desc}/>);

    return (

        <div className='bgPosts'>

            <div className='bgPost'>
                <div className="update">
                    <div className="updateText">
                        Change description
                    </div>
                    <div className="updateChange">
                        <textarea name="" cols="9" rows="1" placeholder='Admin Code' ref={AdminCode4Image}></textarea>
                        <textarea name="" cols="3" rows="1" placeholder='Id' ref={newImageId}></textarea>
                        <input type="file" accept='image/jpeg, image/png' onChange={updateImage}/>
                    </div>
                    <a className="updateButton" >Update</a>
                </div>
            </div>

            {/*<div className='bgPost'>*/}
            {/*    <div className="update">*/}
            {/*        Change name:*/}
            {/*        <textarea ref={AdminCode4Name} placeholder="Admin code?" name="" cols="9" rows="1"></textarea>*/}
            {/*        <textarea ref={newNameId} placeholder="Id?" name="" cols="3" rows="1"></textarea>*/}
            {/*        <textarea ref={newName} placeholder="New name?" name="" cols="10" rows="1"></textarea>*/}
            {/*        <button className="updateButton" onClick={updateName}>Update it!</button>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className='bgPost'>*/}
            {/*    <div className="update">*/}
            {/*        Change description:*/}
            {/*        <textarea ref={AdminCode4Desc} placeholder="Admin code?" name="" cols="9" rows="1"></textarea>*/}
            {/*        <textarea ref={newDescId} placeholder="Id?" name="" cols="3" rows="1"></textarea>*/}
            {/*        <textarea ref={newDesc} placeholder="Description?" name="" cols="10" rows="1"></textarea>*/}
            {/*        <button className="updateButton" onClick={updateDesc}>Update it!</button>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className='bgPost'>*/}
            {/*    <div className="update">*/}
            {/*        <div className="updateText">*/}
            {/*            Change name*/}
            {/*        </div>*/}
            {/*        <div className="updateChange">*/}
            {/*            <textarea name="" cols="9" rows="1" placeholder='Admin Code'></textarea>*/}
            {/*            <textarea name="" cols="3" rows="1" placeholder='Id'></textarea>*/}
            {/*            <textarea name="" cols="10" rows="1" className="updateName" placeholder='New name'></textarea>*/}
            {/*        </div>*/}
            {/*        <a href="#" className="updateButton">Update</a>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className='bgPost'>*/}
            {/*    <div className="update">*/}
            {/*        <div className="updateText">*/}
            {/*            Change description*/}
            {/*        </div>*/}
            {/*        <div className="updateChange">*/}
            {/*            <textarea name="" cols="9" rows="1" placeholder='Admin Code'></textarea>*/}
            {/*            <textarea name="" cols="3" rows="1" placeholder='Id'></textarea>*/}
            {/*            <textarea name="" cols="10" rows="1" className="updateName" placeholder='New description'></textarea>*/}
            {/*        </div>*/}
            {/*        <a href="#" className="updateButton">Update</a>*/}
            {/*    </div>*/}
            {/*</div>*/}



            <h2>About us</h2>
            <div className="information">Info about Princeton-Plainsboro Teaching Hospital</div>
            {Users}
        </div>
    )
}

export default AdminAboutTheGroup;