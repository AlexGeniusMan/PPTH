import React from 'react';
import Post from './Post';
import './News.css';

const UserNews = (props) => {
    let Posts = []
    if (props.state.posts_data !== []) {
        Posts = props.state.posts_data.map(temp => <Post id={temp.id} header={temp.header} date={temp.date}
                                                         content={temp.content}/>);
    }

    let Posts_Reversed = Posts.reverse()

    return (
        <div>
            <h2>News</h2>
            <div>{Posts_Reversed}</div>
        </div>
    )
}

export default UserNews;