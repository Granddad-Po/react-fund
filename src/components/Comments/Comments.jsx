import React from 'react';
import style from './Comments.module.css';

const Comments = ({email, body}) => {
    return (
        <div className={style.comment}>
            <h5 className={style.email}>{email}</h5>
            <div className={style.body}>{body}</div>
        </div>
    );
};

export default Comments;