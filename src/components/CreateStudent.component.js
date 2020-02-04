import React, { useState } from 'react';

import axios from 'axios';

import CreateEditForm from './shared/__CreateEditForm'

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
      <CreateEditForm onSubmit={onSubmit} name={name} email={email} rollno={rollno} onChangeStudentname={onChangeStudentname} onChangeEmail={onChangeEmail} onChangeRollno={onChangeRollno} btnText={'Create Student'}/>

    </div>
  );
};

export default CreateStudent;
