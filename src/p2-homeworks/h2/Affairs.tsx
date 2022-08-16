import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter("all")} // need to fix
    const setHigh = () => {props.setFilter("high")}
    const setMiddle = () => {props.setFilter("middle")}
    const setLow = () => {props.setFilter("low")}

    return (
        <div>

            {mappedAffairs}

            <button className={props.filter === "all" ? s.activeButton : ''}
                onClick={setAll}>All</button>
            <button className={props.filter === "high" ? s.activeButton : ''}
                onClick={setHigh}>High</button>
            <button className={props.filter === "middle" ? s.activeButton : ''}
                onClick={setMiddle}>Middle</button>
            <button className={props.filter === "low" ? s.activeButton : ''}
                onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
