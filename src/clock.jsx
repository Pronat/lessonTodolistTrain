import React from 'react';
import "./styles.css"

const Clock = () => {
    const { hours, minutes, seconds } = this.state;
    const secondsStyle = {
        transform: `rotate(${Date.getSeconds * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours * 30}deg)`
    };
    return (
        <div className={"clock"}>
            <h3>Clock</h3>
            <div className={"analog-clock"}>
                <div className={"dial seconds"} style={secondsStyle} />
                <div className={"dial minutes"} style={minutesStyle} />
                <div className={"dial hours"} style={hoursStyle} />
            </div>
            <div className={"digital-clock"}></div>
        </div>
    );
};

export default Clock;