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
            <a href={props.avatar}/>
            <div>{props.avatar}</div>
            <div>{props.name}</div>
            <div>{props.message}</div>
            <div>{props.time}</div>

        </div>
    )
}

export default Message
