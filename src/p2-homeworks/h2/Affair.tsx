import React from 'react'
import {AffairType} from "./HW2";
import affairs from "./Affairs";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={s.mainClass}>
            <div>{props.affair.name}</div>
            <div className={props.affair.priority === "high" ? s.green : ""
            || props.affair.priority === "middle" ? s.blue : ""
            || props.affair.priority === "low" ? s.darksalmon : ""}>{props.affair.priority}</div>
            <div>{props.affair._id}</div>

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
