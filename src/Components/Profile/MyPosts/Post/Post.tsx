import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string
}
export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src='https://www.allcables.ru/storage/goodsImages/64/64688/1000x1000-64688_1.webp'/>
            post 1
            <div>
                <span>like</span>
            </div>
            {/*<input value={}/>*/}
        </div>
    );
}