import React, {useState} from 'react';
import {Accordion,AccordionPropsType} from './Accordion';
import {action} from "@storybook/addon-actions";
// This default export determines where you story goes in the story list
export default {
    title: 'Accordion',
    component: Accordion,
};

const callback=action("accordion mode change event fired");
const onClickCallback=action("item was clicked");

export const MenuCollapsedMode = () => <Accordion onClick={onClickCallback} items={[]} titleValue={"Menu"} collapsed={true} onChange={callback}/>
export const UsersUnCollapsedMode = () => <Accordion onClick={onClickCallback} items={[{title:"Sergo",value:1},{title:"Pablo",value:2},{title:"Pedro",value:3},{title:"Vito",value:4}]} titleValue={"Users"} collapsed={false} onChange={callback}/>


export const ModeChanging = () => { const [value,setValue]=useState<boolean>(true);
    return <Accordion onClick={onClickCallback} items={[{title:"Sergo",value:1},{title:"Pablo",value:2},{title:"Pedro",value:3},{title:"Vito",value:4}]} titleValue={"Users"} collapsed={value} onChange={setValue}/>}
