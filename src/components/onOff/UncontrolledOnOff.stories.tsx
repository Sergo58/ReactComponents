import React, {useState} from 'react';
import {UncontrolledOnOff} from './UncontrolledOnOff';
import {action} from "@storybook/addon-actions";
// This default export determines where you story goes in the story list
export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

const callback =action("on or off clicked" )
export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>
