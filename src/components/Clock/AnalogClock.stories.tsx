import React, {useEffect, useState} from 'react';

import ReactDOM from "react-dom";
import {UncontrolledOnOff} from "../onOff/UncontrolledOnOff";
import {App} from "./AnalogClock";


// This default export determines where you story goes in the story list
export default {
    title: 'Analog Clock',

};

export const Clock = () => <App />


