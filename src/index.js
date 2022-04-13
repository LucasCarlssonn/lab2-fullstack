import React from "react"
import ReactDOM from "react-dom" 
import App from "./App.js"

ReactDOM.render( 
        <App />,
    document.getElementById("index")
)
function tick() {
    ReactDOM.render( 
            <App />,
        document.getElementById("index")
    )
  }
  
setInterval(tick, 100)
