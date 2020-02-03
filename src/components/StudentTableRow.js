import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

const StudentTableRow = ({ student, deleteStudent }) => {
  const { name, email, rollno, _id } = student;

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{rollno}</td>
      <td>
        <Link className="edit-link" to={`/edit-student/${_id}`}>
          Edit
        </Link>
        <Button
          onClick={() => deleteStudent(student._id)}
          size="sm"
          variant="danger"
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default StudentTableRow;
