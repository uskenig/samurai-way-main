import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://c8.alamy.com/comp/CB99EX/terraced-houses-in-blackheath-near-birmingham-with-cars-parked-on-CB99EX.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}