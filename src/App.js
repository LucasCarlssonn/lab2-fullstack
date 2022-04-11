import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import StudentTable from "./components/StudentTable.js";

function App(){
    const [dataTable, setDataTable] = useState([]);
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
        </div>
    )
}

export default App;