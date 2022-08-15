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

        </div>
    )
}

export default Message
