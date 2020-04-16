import {NavLink} from "react-router-dom";
import React from 'react';
import './Header.css';

const AdminHeader = () => {
    return (
        <div className='HeaderStyle'>
            <div className='adminHeaderText'>
                Princeton-Plainsboro Teaching Hospital [Admin]
            </div>
            <NavLink to='/news' className="userHeader">Go to User's Panel</NavLink>
        </div>
    )
}

export default AdminHeader;