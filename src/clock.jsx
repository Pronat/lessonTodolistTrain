import React from "react";
export default class Clock extends React.Component {
    render() {
        return (
            <div className={"clock"}>
                <h3>Clock</h3>
                <div className={"analog-clock"}>
                    <div className={"dial seconds"} />
                    <div className={"dial minutes"} />
                    <div className={"dial hours"} />
                </div>
                <div className={"digital-clock"}></div>
            </div>
        );
    }
}