import {NavLink} from "react-router-dom";
import React from 'react';
import './Header.css';

const AdminHeader = () => {
    return (
        <div className='HeaderStyle'>
            <div className='adminHeaderText'>
                Princeton-Plainsboro Teaching Hospital
            </div>
            <NavLink to='/admin-news' className='userHeader'>Go to Admin's Panel</NavLink>
        </div>
    )
}

export default AdminHeader;