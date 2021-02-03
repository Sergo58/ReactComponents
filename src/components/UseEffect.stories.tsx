import React, {useEffect, useState} from 'react';


// This default export determines where you story goes in the story list
export default {
    title: 'useEffect',

};


export const SetTimeoutExample = () => {
    let hours =new Date().getHours()
    let minutes=new Date().getMinutes()
    let seconds=new Date().getSeconds()
    const [hour,setHour]=useState(hours)
    const [minute,setMinute]=useState(minutes)
    const [second,setSecond]=useState(seconds)

    useEffect(()=>{
        setInterval(()=>{
            setHour(state=>new Date().getHours())
            setMinute(state=>new Date().getMinutes())
            setSecond(state=>new Date().getSeconds())
        },1000)
    },)

    return <>
        {hour>9?`${hour}`:`0${hour}`}-{minute>9?`${minute}`:`0${minute}`}-{second>9?`${second}`:`0${second}`}
    </>
}

