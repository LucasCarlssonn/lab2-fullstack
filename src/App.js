import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Table from "./components/Table.js";

function App(){
    const [dataTable, setDataTable] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/api/students")
        .then(res => res.json())
        .then(data => setDataTable(data))
        .catch(err => console.log(err))
    }, []);
    const column = [
        {heading: "id", value: "id" },
        {heading: "name", value: "full_name"},
        {heading: "email", value: "email"}
    ]
    
    return (
        <div className="App">
            <h1 style={{textAlign: "center"}}>Students</h1>
            { <Table data={dataTable} column={column}/> }
        </div>
    )
}

export default App;