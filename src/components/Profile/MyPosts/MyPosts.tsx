import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <>
            <div>
                my posts
            </div>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>remove</button>
            </div>
            <div className={s.posts}>
               <Post message={'Hi, how are you?'} likesCount={'4'}/>
               <Post message={'It is my first post'} likesCount={'23'}/>

            </div>
        </>
    )
}