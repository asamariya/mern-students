import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/students/')
      .then(res => {
        setStudents(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const deleteStudent = id => {
    axios
      .delete(`http://localhost:4000/students/delete-student/${id}`)
      .then(res => console.log(`Student with id: ${id} successfully deleted.`))
      .catch(err => console.log(err));

    setStudents(students.filter(student => student._id !== id));
  };

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 &&
            students.map((student, i) => (
              <StudentTableRow
                student={student}
                key={i}
                deleteStudent={deleteStudent}
              />
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentList;
