import './AboutTheGroup.css';
import React from 'react';

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

export default User;