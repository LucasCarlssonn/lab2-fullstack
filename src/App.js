import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import StudentTable from "./components/StudentTable.js";
import Clock from "./components/Clock.js";

function App(){
    const [dataTable, setDataTable] = useState([]);
    useEffect(() => {
        let interval = setInterval(() => {
            fetch("http://localhost:3000/api/info")
            .then(res => res.json())
            .then(data => setDataTable(data))
            .catch(err => console.log(err))
        }, 10000)
        return () => {
            clearInterval(interval)
        };

    }, []);
    useEffect(() => {
            fetch("http://localhost:3000/api/info")
            .then(res => res.json())
            .then(data => setDataTable(data))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <div className="App">
            <h1 style={{textAlign: "center"}}>Students</h1>
            <StudentTable data={dataTable}/>
            <Clock date={new Date()}/>
        </div>
    )
}

export default App;