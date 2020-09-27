import React, {useState} from 'react';
import {UncontrolledAccordion} from './UncontrolledAccordion';
import {action} from "@storybook/addon-actions";
// This default export determines where you story goes in the story list
export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
};


export const UncontrolledAccordionMenu = () => <UncontrolledAccordion titleValue={"Menu"}/>
