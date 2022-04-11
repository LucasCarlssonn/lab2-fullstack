import React from "react";
import underscore from "underscore"
// https://www.smashingmagazine.com/2020/03/sortable-tables-react/

function StudentTable(props) {
    const products = props.data;
    const [sortedField, setSortedField] = React.useState(null);
    let sortedProducts = underscore.sortBy(products, sortedField)
    if (!sortedField){
        sortedProducts = underscore.sortBy(products, "registration_date")
        sortedProducts = sortedProducts.reverse();
    }
    return (
      <table style ={{borderCollapse : "collapse", margin: "2rem auto", maxWidth: "900px", width: "100%", textAlign: "center"}}>
        <caption>Student info </caption>
        <thead>
          <tr>
            <th>
                <button style={{width: "100%", border: "none"}} type="button" onClick={() => setSortedField("student_id")}>
                    Student_ID
                </button>
            </th>
            <th>
                <button style={{width: "100%", border: "none"}} type="button" onClick={() => setSortedField("student_name")}>
                    Student name
                </button>
            </th>
            <th>
                <button style={{width: "100%", border: "none"}} type="button" onClick={() => setSortedField("course_name")}>
                    Course name
                </button>
            </th>
            <th>
                <button style={{width: "100%", border: "none"}} type="button" onClick={() => setSortedField("registration_date")}>
                    registration time
                </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.slice(0, 5).map(product => (
            <tr key={product.id}>
                <td style={{border: "1px solid blue"}}>{product.student_id}</td>
                <td style={{border: "1px solid blue"}}>{product.student_name}</td>
                <td style={{border: "1px solid blue"}}>{product.course_name}</td>
                <td style={{border: "1px solid blue"}}>{product.registration_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

export default StudentTable;