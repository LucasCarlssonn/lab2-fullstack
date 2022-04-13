import React from "react"
import underscore from "underscore"
// Table and sorting taken from link below
// with modifications to fit the task at hand
// https://www.smashingmagazine.com/2020/03/sortable-tables-react/

function Table(props) {
    const students = props.data
    const [sortedField, setSortedField] = React.useState(null)
    let sortedStudents = underscore.sortBy(students, sortedField)
    if (!sortedField){
        sortedStudents = underscore.sortBy(students, "registration_date")
        sortedStudents = sortedStudents.reverse()
    }
    return (
      <table>
        <caption>Student info </caption>
        <thead>
          <tr>
            <th>
                <button type="button" onClick={() => setSortedField("student_id")}>
                    Student ID
                </button>
            </th>
            <th>
                <button type="button" onClick={() => setSortedField("student_name")}>
                    Student Name
                </button>
            </th>
            <th>
                <button type="button" onClick={() => setSortedField("course_name")}>
                    Course Name
                </button>
            </th>
            <th>
                <button type="button" onClick={() => setSortedField("registration_date")}>
                    Registration Time
                </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map(student => (
            <tr>
                <td>{student.student_id}</td>
                <td>{student.student_name}</td>
                <td>{student.course_name}</td>
                <td>{student.registration_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

export default Table