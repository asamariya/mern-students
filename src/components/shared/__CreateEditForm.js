import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateEditForm = ({
  onSubmit,
  name,
  email,
  rollno,
  onChangeStudentname,
  onChangeEmail,
  onChangeRollno,
  btnText
}) => {
  return (
    <div>
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
          {btnText}
        </Button>
      </Form>
    </div>
  );
};

export default CreateEditForm;
