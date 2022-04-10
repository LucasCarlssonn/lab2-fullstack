import React from "react";

const Table = ({ data, column }) => {
    return (
      <table style ={{borderCollapse : "collapse", margin: "2rem auto", maxWidth: "900px", width: "100%", textAlign: "center"}}>
        <thead>
          <tr>
            {column.map((item, index) => <TableHeadItem item={item} />)}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => <TableRow item={item} column={column} />)}
        </tbody>
      </table>
    )
  }
  
  const TableHeadItem = ({ item }) => <th style={{border: "1px solid blue"}}>{item.heading}</th>
  const TableRow = ({ item, column }) => (
    <tr>
      {column.map((columnItem, index) => {
        return <td style={{border: "1px solid blue"}}>{item[`${columnItem.value}`]}</td>
      })}
    </tr>
  )
  
 export default Table;