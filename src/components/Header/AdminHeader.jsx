import React from 'react';
import './UserAndAdminHeader.css';
import {NavLink} from "react-router-dom";

const AdminHeader = () => {
    return (
        <div className='HeaderStyle'>
            <div className='adminHeaderText'>
                Princeton-Plainsboro Teaching Hospital [Admin]
            </div>
                <NavLink to='/' className="userHeader">Go to User's Panel</NavLink>
        </div>
    )
}

export default AdminHeader;