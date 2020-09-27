import React, {useState} from 'react';
import {Select} from './Select';
import {action} from "@storybook/addon-actions";
// This default export determines where you story goes in the story list
export default {
    title: 'Select',
    component: Select,
};

export  const BaseWithValue = () =>{
    const[value,setValue]=useState<string|undefined>("2");

    return<>
        <Select onChange={setValue}
                value={value}
                items={
    [{value:"1", title:"Minsk"},
        {value:"2", title:"Moscow"},
        {value:"3", title:"Kiev"},
        {value:"4", title:"Krasnoufimsk"}


    ]}/></>}

export  const BaseWithoutValue = () => {
    const[value,setValue]=useState<string|undefined>(undefined);
    return <><Select onChange={setValue} value={value} items={
        [{value: "1", title: "Minsk"},
            {value: "2", title: "Moscow"},
            {value: "3", title: "Kiev"},
            {value: "4", title: "Krasnoufimsk"}


        ]}/></>
}