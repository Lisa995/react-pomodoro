// dependencies
import React from "react";
import {FaPlay, FaPause, FaRedoAlt} from "react-icons/fa";

//define component
class Timer extends React.Component {
    //Initialize state
    constructor() {
        super();

        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0,
        };
        this.playTimer = this.playTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }

    // Play - decrease the timer every 1000ms
    playTimer() {
        const intervalId = setInterval(this.decreaseTimer, 1000);
        this.props.onPlayStopTimer(true);
        this.setState({
            intervalId,
        });
    }

    decreaseTimer() {
        switch (
            this.state.timerSecond // SWITCH : EITHER case 0 -> time is over, so change session name // OR time isn't over and second timer start from 59
        ) {
            case 0:
                if (this.props.timerMinute === 0) {
                    // if the time is over
                    if (this.state.isSession) {
                        // and that the session is false -> work session
                        this.setState({
                            isSession: false,
                        });
                        this.props.toggleInterval(this.state.isSession); // so, switch to break session
                    } else {
                        // else -> so, if the session is true -> break session
                        this.setState({
                            isSession: true,
                        });
                        this.props.toggleInterval(this.state.isSession); // then switch to work session
                    }
                } else {
                    this.props.updateTimerMinute();
                    this.setState({
                        timerSecond: 59,
                    });
                }

                break;

            default:
                this.setState(prevState =>
                    //minutes aren't over and second timer start from 59
                    ({
                        timerSecond: prevState.timerSecond - 1,
                    }),
                );

                break;
        }
    }

    // stop timer function for buttons
    stopTimer() {
        clearInterval(this.state.intervalId);
        this.props.onPlayStopTimer(false);
    }

    // reset timer function for buttons
    resetTimer() {
        this.stopTimer();
        this.props.resetTimer();
        this.props.onPlayStopTimer(false);
        this.setState({
            timerSecond: 0,
            isSession: true,
        });
    }

    onPlayStopTimer() {
        this.props.onPlayStopTimer();
    }

    //___________________________________________________________________________________________
    //RENDER - what's on display
    /* eslint-disable */
    render() {
        return (
            <section>
                <section className={"timer-container"}>
                    <h2>{this.state.isSession === true ? "Work" : "Break"}</h2>
                    <div className={"timer"}>
                        {this.props.timerMinute}
                        {":"}
                        {this.state.timerSecond === 0
                            ? "00"
                            : this.state.timerSecond < 10
                            ? `0${this.state.timerSecond}`
                            : this.state.timerSecond}
                    </div>
                </section>

                <section className={"timer-actions"}>
                <button className="button-timer"
                        type="button"
                        onClick={this.playTimer}>
                        {" "}
                        <FaPlay size={24} color={"#0E2431"} />
                    </button>
                    <button className="button-timer"
                        type="button"
                        onClick={this.stopTimer}>
                        {" "}
                        <FaPause size={24} color={"#0E2431"} />
                    </button>
                    <button className="button-timer"
                        type="button"
                        onClick={this.resetTimer}>
                        {" "}
                        <FaRedoAlt size={24} color={"#0E2431"} />
                    </button>
                </section>
            </section>
        );
    }
}

export default Timer;
