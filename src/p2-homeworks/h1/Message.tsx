import React from 'react'
import s from "./Message.module.css"

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.imgTime}>
                <img className={s.imgClass} src={props.avatar}/>
                <div>{props.time}</div>
            </div>

            <div>{props.name}</div>
            <div>{props.message}</div>


        </div>
    )
}

export default Message
