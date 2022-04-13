import React from "react";
import underscore from "underscore"
// https://www.smashingmagazine.com/2020/03/sortable-tables-react/

function Table(props) {
    const students = props.data;
    const [sortedField, setSortedField] = React.useState(null);
    let sortedStudents = underscore.sortBy(students, sortedField)
    if (!sortedField){
        sortedStudents = underscore.sortBy(students, "registration_date")
        sortedStudents = sortedStudents.reverse();
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
          {sortedStudents.slice(0, 5).map(student => (
            <tr>
                <td style={{border: "1px solid blue"}}>{student.student_id}</td>
                <td style={{border: "1px solid blue"}}>{student.student_name}</td>
                <td style={{border: "1px solid blue"}}>{student.course_name}</td>
                <td style={{border: "1px solid blue"}}>{student.registration_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

export default Table;