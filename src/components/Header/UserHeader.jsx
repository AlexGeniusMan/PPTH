import React from 'react';
import './UserAndAdminHeader.css';
import {NavLink} from "react-router-dom";

const AdminHeader = () => {
    return (
        <div className='HeaderStyle'>
            <div className='adminHeaderText'>
                Princeton-Plainsboro Teaching Hospital
            </div>
                <NavLink to='/admin' className='userHeader'>Go to Admin's Panel</NavLink>
        </div>
    )
}

export default AdminHeader;