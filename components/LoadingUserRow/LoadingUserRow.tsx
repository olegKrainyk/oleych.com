"use server"

import React from 'react'
import style from './loading.module.css'


export default async function LoadingUserRow() {
    return (
        <div className={style.wrapper}>
            <div className={style.remove}></div>
            <div className={style.user}>
                <div>
                    <div className={style.pic} />
                </div>
                <div className={style.info}><div className={style.infotext}></div></div>
            </div>

        </div>
    );
};
