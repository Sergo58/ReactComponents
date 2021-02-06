import React from "react";
import ReactDOM from "react-dom";
import style from './AnalogClock.module.css'
const initialState = {
    date: new Date(),
    hours: 0,
    minutes: 0,
    seconds: 0,
}

export function App() {

    const [timer, setTimer] = React.useState(initialState);

    React.useEffect(() => {
        let timerID = setInterval(() => {
            const newDate = new Date();
            // @ts-ignore
            setTimer({
                date: newDate,
                hours: newDate.getHours(),
                minutes: newDate.getMinutes(),
                seconds: newDate.getSeconds(),
            });
        }, 1000);

        return () => {
            clearInterval(timerID);
        }
    });



    const secondsStyle = {

        transform: `translate(0, -50%) rotate(${timer.seconds * 6}deg)`
    };
    const minutesStyle = {

        transform: `translate(0, -50%) rotate(${timer.minutes * 6}deg)`
    };
    const hoursStyle = {

        transform: `translate(0, -50%) rotate(${timer.hours * 30}deg)`
    };

    return (
        <div className={style.container}>
            <div className={style.clockface}>
                <div
                    style={hoursStyle}
                    className={style.hourhand}
                />
                <div
                    style={minutesStyle}
                    className={style.minutehand}
                />
                <div
                    style={secondsStyle}
                    className={style.secondshand}
                />
            </div>
            <h2>{timer.date.toLocaleTimeString()}</h2>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);