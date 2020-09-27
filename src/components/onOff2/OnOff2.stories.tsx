import React, {useState} from 'react';
import {OnOff2} from './OnOff2';
import {action} from "@storybook/addon-actions";
// This default export determines where you story goes in the story list
export default {
    title: 'OnOff',
    component: OnOff2,
};

const callback=action("on or off clicked");
export const OnMode = () => <OnOff2 on={true} onClick={callback}/>
export const OffMode = () => <OnOff2 on={false} onClick={callback}/>

export const ModeChanging = () => { const [value,setValue]=useState<boolean>(true);
    return <OnOff2 on={value} onClick={setValue}/>};
