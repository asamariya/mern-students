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
              <StudentTableRow student={student} key={i} />
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentList;
