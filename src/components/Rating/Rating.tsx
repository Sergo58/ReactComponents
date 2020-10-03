import React from "react";
import {action} from "@storybook/addon-actions";

type RatingPropsType={
    value:1|2|3|4|5|0
    onClick:(value:RatingValueType)=>void
}
export type RatingValueType=0|1|2|3|4|5;



function Rating0(props:RatingPropsType) {
return (<div>
        <Star selected={props.value>0} onClick={props.onClick} value={1}/>
        <Star selected={props.value>1} onClick={props.onClick} value={2}/>
        <Star selected={props.value>2} onClick={props.onClick} value={3}/>
        <Star selected={props.value>3} onClick={props.onClick} value={4}/>
        <Star selected={props.value>4} onClick={props.onClick} value={5}/>
    </div>

)
}

type StarsPropsType={
    selected:boolean
onClick:(value:RatingValueType)=>void
    value:RatingValueType
}


function Star0(props:StarsPropsType) {

        return <span onClick={()=>{props.onClick(props.value)}}>
            {props.selected?<b>star </b>:"star "}
        </span>



}

export const Rating=React.memo(Rating0)
export const Star=React.memo(Star0)
