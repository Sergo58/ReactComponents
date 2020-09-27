import React, {useState} from "react";
import s from "./OnOff.module.css"
type PropsType={
 onChange:(on:boolean)=>void
    defaultOn?:boolean
}



export function UncontrolledOnOff(props:PropsType) {
    let[on,setOn] =useState(props.defaultOn?props.defaultOn:false)
    const onClicked=()=>{
        setOn(true)
        props.onChange(true)
    }
    const offClicked=()=>{
        setOn(false)
        props.onChange(false)
    }
    if (!on) {




        return <div>
            <div className={s.square1}>ON</div>
            <div className={s.square2} onClick={onClicked}>OFF</div>
            <div className={s.round1}>light</div>
        </div>
    } else {
        return <div>
            <div className={s.square3} onClick={offClicked}>ON</div>
            <div className={s.square4}>OFF</div>
            <div className={s.round2}>light</div>
        </div>
    }
}

