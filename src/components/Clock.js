import React from "react"

function Clock(props) {
    return (
      <div>
        <h2>Current Time: {props.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
export default Clock