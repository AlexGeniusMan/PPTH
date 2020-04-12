import {NavLink} from "react-router-dom";
import React from 'react';
import './UserAndAdminNews.css';

const Post = (props) => {
    return <div className='bgPost'>
        {/*<NavLink to='/news'>{props.name}</NavLink>*/}
        <div>
            <div id='column-4'>{props.header}</div>
            <div id='column-5'>{props.date}</div>
        </div>
        <div>
            <div id='column-6'>{props.content}</div>
        </div>
    </div>
}
const UserNews = (props) => {

    let Posts = props.PostsData.map(temp => <Post id={temp.id} header={temp.header} date={temp.date}
                                            content={temp.content}/>);

    return (
        <div className='bgPosts'>
            {Posts}
        </div>
    )
}

export default UserNews;