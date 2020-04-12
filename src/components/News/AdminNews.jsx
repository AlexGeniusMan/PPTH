import React from 'react';
import './UserAndAdminNews.css';
import state from './../../redux/state'

const Post = (props) => {
    return <div className='bgPost'>
        <div className='columnDate'>
            <div className='columnNews' id='column-4'>{props.header}</div>
            <div className='columnNews' id='column-5'>{props.date}</div>
        </div>
        <div>
            <div className='columnNews' id='column-6'>{props.content}</div>
        </div>
    </div>
}
const AdminNews = (props) => {

    let newPostHeader = React.createRef();
    let newPostContent = React.createRef();
    let AdminCode = React.createRef();

    let addPost = () => {
        let tempContent = newPostContent.current.value;
        let tempHeader = newPostHeader.current.value;
        props.addPost(AdminCode.current.value, tempHeader, tempContent)
        if (AdminCode.current.value == state.realAdminCode) {
            newPostContent.current.value = ''
            newPostHeader.current.value = ''
        }
    }

    let Posts = props.PostsData.map(temp => <Post id={temp.id} header={temp.header} date={temp.date}
                                                  content={temp.content}/>);

    return (


        <div className='bgPosts'>
            <div className='bgPost'>
                <div className="news">
                    There you can add new post
                    <div className="newsUpdate">
                        <textarea ref={AdminCode}
                                  placeholder="Admin code?"
                                  name="" id="" cols="" rows="1" className="timetableAdmin">888</textarea>
                        <textarea ref={newPostHeader}
                                  placeholder="Header"
                                  name="" id="" cols="" rows="1"
                                  className="timetableContent"/>
                    </div>
                    <div className="newsContainer">
                        <textarea ref={newPostContent}
                                  placeholder="Content"
                                  name="" id="" cols="" rows="1" className="newsText"/>
                    </div>
                    <button className="updateButton" onClick={addPost}>Add post</button>
                </div>
            </div>

            {/*<div>*/}
            {/*    <textarea ref={AdminCode}>888</textarea>*/}
            {/*    <textarea ref={newPostHeader}>Header</textarea>*/}
            {/*    <textarea ref={newPostContent}>Content</textarea>*/}
            {/*    <button className="updateButton" onClick={addPost}>Add</button>*/}
            {/*</div>*/}

            {/*<div className='bgPost'>*/}
            {/*    <div className="update">*/}
            {/*        <div className="updateText">*/}
            {/*            Change description*/}
            {/*        </div>*/}
            {/*        <div className="updateChange">*/}
            {/*            <textarea name="" cols="9" rows="1" placeholder='Admin Code'></textarea>*/}
            {/*            <textarea name="" cols="3" rows="1" placeholder='Id'></textarea>*/}
            {/*            <textarea name="" cols="10" rows="1" className="updateName"*/}
            {/*                      placeholder='New description'></textarea>*/}
            {/*        </div>*/}
            {/*        <a href="#" className="updateButton">Update</a>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {Posts}
        </div>
    )
}

export default AdminNews;