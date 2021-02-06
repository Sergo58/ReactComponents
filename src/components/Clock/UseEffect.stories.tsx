import React, {useEffect, useState} from 'react';


// This default export determines where you story goes in the story list
export default {
    title: 'useEffect',

};


export const SetTimeoutExample = () => {

    const [date,setDate]=useState(new Date())


    useEffect(()=>{
        setInterval(()=>{
           setDate(new Date())

        },1000)
    },[])





    return <>
        {date.getHours()>9?`${date.getHours()}`:`0${date.getHours()}`}-{date.getMinutes()>9?`${date.getMinutes()}`:`0${date.getMinutes()}`}-{date.getSeconds()>9?`${date.getSeconds()}`:`0${date.getSeconds()}`}
    </>


}

