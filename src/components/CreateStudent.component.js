import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const CreateStudent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rollno, setRollno] = useState('');

  const onChangeStudentname = e => setName(e.target.value);
  const onChangeEmail = e => setEmail(e.target.value);
  const onChangeRollno = e => setRollno(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    // console.log('Student successfully created!');
    // console.log(`Name: ${name}`);
    // console.log(`Email: ${email}`);
    // console.log(`Rollno: ${rollno}`);

    const studentObject = {
      name,
      email,
      rollno
    };

    axios
      .post('http://localhost:4000/students/create-student', studentObject)
      .then(res => res.data);

    setName('');
    setEmail('');
    setRollno('');
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
          Create Student
        </Button>
      </Form>
    </div>
  );
};

export default CreateStudent;
