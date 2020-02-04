import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CreateEditForm from './shared/__CreateEditForm';

const EditStudent = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rollno, setRollno] = useState('');
  const [toggleState, setToggleState] = useState(false);
  const [error, setError] = useState(false);

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
    setError(false);
    const studentObject = { name, email, rollno };

    axios
      .put(`http://localhost:4000/students/update-student/${id}`, studentObject)
      .then(res => {
        // console.log('Student successfully updated');
        return res;
      })
      .catch(err => {
        console.log(err);
        setError(true);
      });

    setToggleState(!toggleState);
    props.history.push('/student-list');
  };

  return (
    <div className="form-wrapper mt-3">
      <h1 className="mb-3">Edit student</h1>
      {error && (
        <p style={{ color: 'red' }}>
          Sorry, student not updated. Please enter all fields correctly!
        </p>
      )}
      <CreateEditForm
        onSubmit={onSubmit}
        name={name}
        email={email}
        rollno={rollno}
        onChangeStudentname={onChangeStudentname}
        onChangeEmail={onChangeEmail}
        onChangeRollno={onChangeRollno}
        btnText={'Update Student'}
      />
    </div>
  );
};

export default EditStudent;
