import React from "react";


const Post = (props) => {
    return <div className='bgPost'>
        <div className='columnDate'>
            <div id='column-4' className='columnNews'>{props.header}</div>
            <div id='column-5' className=''>{props.date} [{props.id}]</div>
        </div>
        <div>
            <div id='column-6' className='columnNews'>{props.content}</div>
        </div>
    </div>
}

export default Post