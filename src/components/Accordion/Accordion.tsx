import React from "react";
import {RatingValueType} from "../Rating/Rating";
type itemType={
    title:string;
    value:any
}
export type AccordionPropsType={
    titleValue:string
    collapsed:boolean
    onChange:(collapsed:boolean)=>void
    items:itemType[]
    onClick:(value:any)=>void
}




export function Accordion(props: AccordionPropsType) {

        return <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} collapsed={props.collapsed}/>

            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items} />}
        </div>


}

type AccordionTitlePropsType={
    title:string
    onChange:(collapsed:boolean)=>void
    collapsed:boolean
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={()=>{props.onChange(!props.collapsed)}}>{props.title}</h3>
        </div>
    )
}
type AccordionBodyPropsType={
    items:itemType[]
    onClick:(value:any)=>void
}
function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <div>
            <ul>
                {props.items.map((i,index)=><li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
            </ul>
        </div>
    )
}