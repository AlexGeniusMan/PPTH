import {NavLink} from "react-router-dom";
import React from 'react';
import './Menu.css';

const AdminMenu = () => {

    return <div className="classAdminMenu">
        <NavLink to='/admin-news' id="column-1" className='classAdminMenuButton'
                 activeClassName="selected">News</NavLink>
        <NavLink to='/admin-timetable' id="column-2" className='classAdminMenuButton'
                 activeClassName="selected">Timetable</NavLink>
        <NavLink to='/admin-about-the-group' id="column-31" className='classAdminMenuButton'
                 activeClassName="selected">About</NavLink>
    </div>
}

export default AdminMenu;