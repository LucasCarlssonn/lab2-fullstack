import React from "react"; 
import ReactDOM from "react-dom"; 
import App from "./App.js"
import Clock from "./components/Clock.js";

ReactDOM.render(
    <> 
        <App />
        <Clock date={new Date()}/>
    </>,
    document.getElementById("index")
)
  
  function tick() {
    ReactDOM.render(
        <> 
            <App />
            <Clock date={new Date()}/>
        </>,
        document.getElementById("index")
    )
  }
  
  setInterval(tick, 1000);
