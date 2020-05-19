// dependencies
import React from "react";
import BreakController from "./break-controller";
import WorkController from "./work-controller";
import Timer from "./timer";
import "../style.css";

//define component
class Pomodoro extends React.Component {
    //Initialize state
    constructor() {
        super();

        //Initialize time of break and work
        this.state = {
            breakLength: 5,
            workLength: 25,
            timerMinute: 25,
            isPlay: false,
        };

        this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this); // ++ break
        this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this); // -- break
        this.onIncreaseWorkLength = this.onIncreaseWorkLength.bind(this); // ++ work
        this.onDecreaseWorkLength = this.onDecreaseWorkLength.bind(this); // -- work
        this.onToggleInterval = this.onToggleInterval.bind(this); // work or break time ?
        this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this); // update the timer with changes
        this.onResetTimer = this.onResetTimer.bind(this); // reset the timer
        this.onPlayStopTimer = this.onPlayStopTimer.bind(this); // start and stop timer
    }
    // _________________________________________________________________________________________________________

    // ++ break function
    onIncreaseBreakLength() {
        this.setState(prevState => ({
            breakLength: prevState.breakLength + 1,
        }));
    }

    // -- break function
    onDecreaseBreakLength() {
        this.setState(prevState => ({
            breakLength: prevState.breakLength - 1,
        }));
    }

    // ++ work function
    onIncreaseWorkLength() {
        this.setState(prevState => ({
            workLength: prevState.workLength + 1,
            timerMinute: prevState.workLength + 1,
        }));
    }

    // -- work function
    onDecreaseWorkLength() {
        this.setState(prevState => ({
            workLength: prevState.workLength - 1,
            timerMinute: prevState.workLength - 1,
        }));
    }

    // update the timer with changes function in workController
    onUpdateTimerMinute() {
        this.setState(prevState => ({
            timerMinute: prevState.timerMinute - 1,
        }));
    }

    // work or break time function
    onToggleInterval(isWork) {
        if (isWork) {
            this.setState({
                timerMinute: this.state.workLength,
            });
        } else {
            this.setState({
                timerMinute: this.state.breakLength,
                sound: true,
            });
        }
    }

    // reset timer function
    onResetTimer() {
        this.setState({
            timerMinute: this.state.workLength,
        });
    }

    // start and stop timer function
    onPlayStopTimer(isPlay) {
        this.setState({
            isPlay,
        });
    }

    //_____________________________________________________________________________________________
    // RENDER - what is on display
    render() {
        return (
            <main>
                <h1>{"Pomodoro Clock"}</h1>
                <section className={"interval-lenght-container"}>
                    <Timer
                        timerMinute={this.state.timerMinute}
                        breakLength={this.state.breakLength}
                        updateTimerMinute={this.onUpdateTimerMinute}
                        toggleInterval={this.onToggleInterval}
                        resetTimer={this.onResetTimer}
                        onPlayStopTimer={() => this.onPlayStopTimer}
                    />

                    <WorkController
                        isPlay={this.state.isPlay}
                        workLength={this.state.workLength}
                        increaseWork={this.onIncreaseWorkLength}
                        decreaseWork={this.onDecreaseWorkLength}
                    />

                    <BreakController
                        isPlay={this.state.isPlay}
                        breakInterval={this.state.breakLength}
                        increaseBreak={this.onIncreaseBreakLength}
                        decreaseBreak={this.onDecreaseBreakLength}
                    />
                </section>
            </main>
        );
    }
}

export default Pomodoro;
