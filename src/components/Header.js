import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <NavLink to={'/create-student'} className="nav-link">
                React MERN Stack App
              </NavLink>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <NavLink to={'/create-student'} className="nav-link">
                  Create Student
                </NavLink>
              </Nav>

              {/* <Nav>
                <NavLink to={"/edit-student/:id"} className="nav-link">
                  Edit Student
                </NavLink>
              </Nav> */}

              <Nav>
                <NavLink to={'/student-list'} className="nav-link">
                  Student List
                </NavLink>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
