import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentShow = props => {
  const [student, setStudent] = useState({});
  const { id } = props.match.params;
  useEffect(() => {
    axios
      .get(`http://localhost:4000/students/${id}`)
      .then(res => setStudent(res.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>{student.name}</h1>
      <h3>Email: {student.email}</h3>
      <h6>Roll No: {student.rollno}</h6>
    </div>
  );
};

export default StudentShow;
