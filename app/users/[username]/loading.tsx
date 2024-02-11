"use server"

import React from 'react'
import style from './loading.module.css'

const Loading: React.FC = () => {
    return (
        <div className={style.wrapper}>
         
         <div className={style.img}><div className={style.imganimation}></div></div>
            
            
            <div className={style.info}>
                <div className={style.text}><div className={style.animation}></div></div>
                <div className={style.text}><div className={style.animation}></div></div>
                <div className={style.text}><div className={style.animation}></div></div>
            </div>
        </div>
    );
};

export default Loading;
