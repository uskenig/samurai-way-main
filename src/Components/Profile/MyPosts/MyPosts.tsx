import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";


export const MyPosts = () => {
    const messageOne = 'Hey how are you?'
    const messageTwo = 'This is my post'
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post message={messageOne}/>
                    <Post message={messageTwo}/>
                </div>
            </div>
    );
}