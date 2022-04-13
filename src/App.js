import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import Table from "./components/Table.js"
import Clock from "./components/Clock.js"

function App(){
    const [dataTable, setDataTable] = useState([])
    useEffect(() => {
        let interval = setInterval(() => {
            fetch("http://localhost:3000/api/info")
            .then(res => res.json())
            .then(data => setDataTable(data))
            .catch(err => console.log(err))
        }, 60000)
        return () => {
            clearInterval(interval)
        }

    }, [])
    useEffect(() => {
            fetch("http://localhost:3000/api/info")
            .then(res => res.json())
            .then(data => setDataTable(data))
            .catch(err => console.log(err))
    }, [])
    
    return (
        <div className="App">
            <h1>Welcome!</h1>
            <Table data={dataTable}/>
            <Clock date={new Date()}/>
            <img src="https://png2.cleanpng.com/sh/d496f638c49e9dd46f4114266c11e29a/L0KzQYm3U8A5N5VtfZH0aYP2gLBuTfNieqV0h9C2c4XxPYbogcE5P2oAe9hsNEG1PoS5U8I3P2Y7Sac7MEW2RYW7Wcg2OV91htk=/kisspng-cartoon-sun-5aa18799cfc412.323267561520535449851.png" alt="Happy Sun"></img>
        </div>
    )
}

export default App