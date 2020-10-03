import React, {useReducer} from "react";
import {reducer} from "./reducer";

type AccordionPropsType={
    titleValue:string

}


 function UncontrolledAccordion0(props: AccordionPropsType) {
//let[collapsed,setCollapsed] = useState(false)
let[state,dispatch] = useReducer(reducer,{collapsed:false})

            return <div>
            <AccordionTitle title={props.titleValue} onClick={()=>{dispatch({type:"TOGGLE-COLLAPSED"})} }/>


            {!state.collapsed && <AccordionBody/>}
        </div>


}

type AccordionTitlePropsType={
    title:string
    onClick:()=>void
}
function AccordionTitle0(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
        </div>
    )
}

function AccordionBody0() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
export const UncontrolledAccordion=React.memo(UncontrolledAccordion0)
export const AccordionTitle=React.memo(AccordionTitle0)
export const AccordionBody=React.memo(AccordionBody0)