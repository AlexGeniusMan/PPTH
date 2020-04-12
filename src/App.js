import {BrowserRouter, Route} from "react-router-dom";
import {addPost} from "./redux/state";
import React from 'react';
import './App.css';

import AdminHeader from "./components/Header/AdminHeader";
import UserHeader from './components/Header/UserHeader';

import AdminMenu from "./components/Menu/AdminMenu";
import UserMenu from "./components/Menu/UserMenu";

import UserNews from "./components/News/UserNews";
import AdminNews from "./components/News/AdminNews";

import UserTimetable from "./components/Timetable/UserTimetable";
import AdminTimetable from './components/Timetable/AdminTimetable';

import UserAboutTheGroup from "./components/AboutTheGroup/UserAboutTheGroup";
import AdminAboutTheGroup from "./components/AboutTheGroup/AdminAboutTheGroup";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="App">
                {/*-----------------------------------------------*/}
                <Route exact path='/'
                       render={() => <UserHeader/>}/>
                <Route exact path='/news'
                       render={() => <UserHeader/>}/>
                <Route exact path='/timetable'
                       render={() => <UserHeader/>}/>
                <Route exact path='/about-the-group'
                       render={() => <UserHeader/>}/>

                <Route exact path='/admin'
                       render={() => <AdminHeader/>}/>
                <Route exact path='/admin-news'
                       render={() => <AdminHeader/>}/>
                <Route exact path='/admin-timetable'
                       render={() => <AdminHeader/>}/>
                <Route exact path='/admin-about-the-group'
                       render={() => <AdminHeader/>}/>
                {/*-----------------------------------------------*/}
                <Route exact path='/'
                       render={() => <UserMenu/>}/>
                <Route exact path='/news'
                       render={() => <UserMenu/>}/>
                <Route exact path='/timetable'
                       render={() => <UserMenu/>}/>
                <Route exact path='/about-the-group'
                       render={() => <UserMenu/>}/>

                <Route exact path='/admin'
                       render={() => <AdminMenu/>}/>
                <Route exact path='/admin-news'
                       render={() => <AdminMenu/>}/>
                <Route exact path='/admin-timetable'
                       render={() => <AdminMenu/>}/>
                <Route exact path='/admin-about-the-group'
                       render={() => <AdminMenu/>}/>
                {/*-----------------------------------------------*/}
                <div className='AppStyle'>
                    <Route exact path='/news'
                           render={() => <UserNews
                               PostsData={props.StateData.PostsData}/>}/>

                    <Route exact path='/timetable'
                           render={() => <UserTimetable/>}/>

                    <Route exact path='/about-the-group'
                           render={() => <UserAboutTheGroup/>}/>
                </div>

                <div className='AppStyle'>
                    <Route exact path='/admin-news'
                           render={() => <AdminNews
                               addPost={addPost}
                               PostsData={props.StateData.PostsData}/>}/>

                    <Route exact path='/admin-timetable'
                           render={() => <AdminTimetable/>}/>

                    <Route exact path='/admin-about-the-group'
                           render={() => <AdminAboutTheGroup/>}/>
                </div>

                {/*<Route exact path='/'*/}
                {/*       render={() => <div>*/}
                {/*           <text className='LETTER'>H</text>*/}
                {/*       </div>}/>*/}
                {/*-----------------------------------------------*/}
            </div>
        </BrowserRouter>)
}

export default App;