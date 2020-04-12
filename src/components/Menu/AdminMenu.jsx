import React from 'react';
import './UserAndAdminMenu.css';
import {NavLink} from "react-router-dom";

const AdminMenu = () => {

    let GoToAbout = () => {
        window.location.assign('/admin-news');
    }

    return <div class="classAdminMenu">
        <NavLink to='/admin-news' id="column-1" className ='classAdminMenuButton' activeClassName="selected">News</NavLink>
        <NavLink to='/admin-timetable' id="column-2" className ='classAdminMenuButton' activeClassName="selected">Timetable</NavLink>
        <NavLink to='/admin-about-the-group' id="column-31" className ='classAdminMenuButton' activeClassName="selected">About</NavLink>
    </div>
}

export default AdminMenu;