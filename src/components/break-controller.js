// Dependencies
import React from "react";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";

function BreakController(props) {
    function decreaseCounter() {
        if (props.breakInterval === 1) {
            return;
        }
        props.decreaseBreak();
    }

    function increaseCounter() {
        if (props.breakInterval === 60) {
            return;
        }
        props.increaseBreak();
    }

    //________________________________________________________________
    // What's return from breakController component
    return (
        <div className={"controllers"}>
            <section className={"break"}>
                <h4>{"Break"}</h4>
                <section className={"interval-container"}>
                    <button
                        type={"button"}
                        className={"button-break"}
                        onClick={decreaseCounter}>
                        {" "}
                        <FaAngleLeft size={32} color={"white"} />
                    </button>
                    <p className={"interval-length"}>{props.breakInterval}</p>
                    <button
                        type={"button"}
                        className={"button-break"}
                        onClick={increaseCounter}>
                        {" "}
                        <FaAngleRight size={32} color={"white"} />
                    </button>
                </section>
            </section>
        </div>
    );
}

export default BreakController;
