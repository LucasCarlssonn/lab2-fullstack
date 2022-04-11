import React from "react";

function Clock(props) {
    return (
      <div>
        <h2 style={{textAlign: "center"}}>Current Time: {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
export default Clock;