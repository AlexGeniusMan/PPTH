import React from 'react';
import './News.css';

let realAdminCode = "888"

const AdminNews = (props) => {

    let newPostHeader = React.createRef();
    let newPostContent = React.createRef();
    let newPostAdminCode = React.createRef();

    let addNewPost = () => {
        let tempContent = newPostContent.current.value;
        let tempHeader = newPostHeader.current.value;
        let tempAdminCode = newPostAdminCode.current.value
        props.addPost(tempAdminCode, tempHeader, tempContent)
        if (tempAdminCode === realAdminCode) {
            newPostContent.current.value = ''
            newPostHeader.current.value = ''
        }
    }

    let deletePostId = React.createRef();
    let deletePostAdminCode = React.createRef();

    let deleteOldPost = () => {
        let deletePostAdminCodeTemp = deletePostAdminCode.current.value;
        let deletePostIdTemp = deletePostId.current.value;
        props.deletePost(deletePostAdminCodeTemp, deletePostIdTemp)
        if (deletePostAdminCodeTemp === realAdminCode) {
            deletePostId.current.value = ''
        }
    }

    return (
        <div>
            <div className='bgPost'>
                <div className="news">
                    Add new post:
                    <div className="newsUpdate">
                        <textarea ref={newPostAdminCode}
                                  placeholder="Admin code?"
                                  name="" id="" cols="" rows="1"
                                  className="timetableAdmin"></textarea>
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
                    <button className="updateButton" onClick={addNewPost}>Add post</button>


                </div>

            </div>

            <div className='bgPost'>
                <div className="update">
                    <div className="updateText">
                        Delete post:
                    </div>
                    <div className="updateChange">
                        <textarea ref={deletePostAdminCode} placeholder="Admin code" name="" cols="9"
                                  rows="1"></textarea>
                        <textarea ref={deletePostId} placeholder="Id?" name="" cols="4" rows="1"></textarea>
                    </div>
                    <button className="updateButton" onClick={deleteOldPost}>Delete</button>
                </div>
            </div>
        </div>


    )

}

export default AdminNews;