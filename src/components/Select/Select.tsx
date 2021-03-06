import React, {useState, KeyboardEvent, useEffect} from "react";

import {RatingValueType} from "../Rating/Rating";
import styles from "./Select.module.css"
type itemType = {
    title: string;
    value: any
}
export type SelectPropsType = {
    value?: string
    onChange: (collapsed: string|undefined) => void
    items: itemType[]

}


function Select0(props: SelectPropsType) {

    const [active,setActive]=useState(false)
    const [hoveredElementValue,setHoveredElementValue]=useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(()=>{
        setHoveredElementValue(props.value);
    },[props.value])

    const toggleItems= () =>setActive(!active)
const onItemClick=(value:any)=>{
    props.onChange(value);
    toggleItems()
}
const onKeyUp=(e:KeyboardEvent<HTMLDivElement>)=>{
        if(e.key==="ArrowDown"||e.key==="ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElementIndex=e.key==="ArrowDown"?props.items[i + 1]:props.items[i - 1]
                    if (pretendentElementIndex) {
                        props.onChange(pretendentElementIndex.value);
                        return;
                    }


                }
            }
            if (!selectedItem){
                props.onChange(props.items[0].value);
            }

        }
        if (e.key==="Enter"||e.key==="Escape"){
            setActive(false)
        }

}
    return (
        <>

        <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0} >

        <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {active &&
            <div className={styles.items}>
                {props.items.map(i => <div
                    onMouseEnter={()=>{setHoveredElementValue(i.value)}}
                    className={styles.item+" "+(hoveredItem===i?styles.selected:"")}
                    onClick={()=>{onItemClick(i.value)}}
                    key={i.value}>{i.title}</div>)}
            </div>
            }

    </div>
        </>)



}

export const Select=React.memo(Select0)
