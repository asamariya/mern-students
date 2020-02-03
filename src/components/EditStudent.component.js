import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EditStudent = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rollno, setRollno] = useState('');

  const onChangeStudentname = e => setName(e.target.value);
  const onChangeEmail = e => setEmail(e.target.value);
  const onChangeRollno = e => setRollno(e.target.value);

  const { id } = props.match.params;

  useEffect(() => {
    axios
      .get(`http://localhost:4000/students/edit-student/${id}`)
      .then(res => {
        const { name, email, rollno } = res.data;
        setName(name);
        setEmail(email);
        setRollno(rollno);
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    const studentObject = { name, email, rollno };

    axios
      .put(`http://localhost:4000/students/update-student/${id}`, studentObject)
      .then(res => {
        // console.log('Student successfully updated');
      })
      .catch(err => console.log(err));

    props.history.push('/student-list');
  };

  return (
    <div className="form-wrapper mt-3">
      <h1 className="mb-3">Create a new student</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={onChangeStudentname}
          />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={onChangeEmail} />
        </Form.Group>

        <Form.Group controlId="Rollno">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={rollno} onChange={onChangeRollno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Student
        </Button>
      </Form>
    </div>
  );
};

export default EditStudent;
