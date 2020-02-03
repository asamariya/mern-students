import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

const StudentTableRow = ({ student, deleteStudent }) => {
  const { name, email, rollno, _id } = student;

  return (
    <tr>
      <td className="align-middle">{name}</td>
      <td className="align-middle">{email}</td>
      <td className="align-middle">{rollno}</td>
      <td className="d-flex flex-column">
        <Link to={`/students/${_id}`} className="mb-2">
          View Details
        </Link>
        <Link className="edit-link mb-2" to={`/edit-student/${_id}`}>
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
