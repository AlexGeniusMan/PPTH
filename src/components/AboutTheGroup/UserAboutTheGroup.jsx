import React from 'react';
import './UserAndAdminAboutTheGroup.css';
import state, {updateAboutDesc, updateAboutName} from "../../redux/state";


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


const UserAboutTheGroup = (props) => {

    let newNameId = React.createRef()
    let newName = React.createRef()
    let newDescId = React.createRef()
    let newDesc = React.createRef()
    let AdminCode4Desc = React.createRef()
    let AdminCode4Name = React.createRef()

    let updateName = () => {
        updateAboutName(AdminCode4Name.current.value, newNameId.current.value, newName.current.value)
        if(AdminCode4Name.current.value == state.realAdminCode) {
            newNameId.current.value = ''
            newName.current.value = ''
        }
    }
    let updateDesc = () => {
        updateAboutDesc(AdminCode4Desc.current.value, newDescId.current.value, newDesc.current.value)
        if(AdminCode4Desc.current.value == state.realAdminCode) {
            newDescId.current.value = ''
            newDesc.current.value = ''
        }
    }

    let Users = state.AboutData.map(temp => <User id={temp.id} name={temp.name} image={temp.image} desc={temp.desc}/>);

    return (
        <div className='bgPosts'>

            {/*<div>*/}
            {/*<textarea className="info" name="class" id="" cols="15" rows="1"*/}
            {/*          ref={AdminCode4Name} placeholder="Id?">888</textarea>*/}
            {/*<textarea className="info" name="class" id="" cols="15" rows="1"*/}
            {/*          ref={newNameId} placeholder="Id?">2</textarea>*/}
            {/*<textarea className="info" name="class" id="" cols="15" rows="1"*/}
            {/*          ref={newName} placeholder="New name?">123</textarea>*/}
            {/*<button onClick={updateName}>Update it!</button>*/}
            {/*</div>*/}

            {/*<div>*/}
            {/*<textarea className="info" name="class" id="" cols="15" rows="1"*/}
            {/*          ref={AdminCode4Desc} placeholder="Id?">888</textarea>*/}
            {/*<textarea className="info" name="class" id="" cols="15" rows="1"*/}
            {/*          ref={newDescId} placeholder="Id?">2</textarea>*/}
            {/*<textarea className="info" name="class" id="" cols="15" rows="1"*/}
            {/*          ref={newDesc} placeholder="New name?">123</textarea>*/}
            {/*<button onClick={updateDesc}>Update it!</button>*/}
            {/*</div>*/}

            <h2>О нас</h2>
            <div className="information">Информация</div>
            {Users}
        </div>
    )
}

export default UserAboutTheGroup;