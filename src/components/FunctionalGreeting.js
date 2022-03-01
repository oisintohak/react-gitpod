import React from "react";

const FunctionalGreeting = (props) => {
    return (
        <>
            <h1>Hello from React!</h1>
            <p>
                Here is your timestamp: {props.timestamp.seconds}
            </p>
        </>
    )
}

export default FunctionalGreeting;