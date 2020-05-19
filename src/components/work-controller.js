//dependencies
import React from "react";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";

function WorkController(props) {
    function increaseWork() {
        if (props.workLength === 60) {
            return;
        }
        props.increaseWork();
    }
    function decreaseWork() {
        if (props.workLength === 1) {
            return;
        }
        props.decreaseWork();
    }

    //________________________________________________________________
    // What's return from workController component
    return (
        <div className={"controllers"}>
            <section className={"work"}>
                <h4>{"Work"}</h4>
                <section className={"interval-container"}>
                    <button
                        type={"button"}
                        disabled={props.isPlay === true ? "disabled" : ""}
                        onClick={decreaseWork}>
                        {" "}
                        <FaAngleLeft size={32} color={"white"} />{" "}
                    </button>

                    <p className={"interval-length"}>{props.workLength}</p>

                    <button
                        type={"button"}
                        disabled={props.isPlay === true ? "disabled" : ""}
                        onClick={increaseWork}>
                        {" "}
                        <FaAngleRight size={32} color={"white"} />{" "}
                    </button>
                </section>
            </section>
        </div>
    );
}

export default WorkController;
