import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

const StudentTableRow = ({ student }) => {
  const { name, email, rollno } = student;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{rollno}</td>
      <td>
        <Link className="edit-link" to={`/edit-student/${student._id}`}>
          Edit
        </Link>
        <Button size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default StudentTableRow;
