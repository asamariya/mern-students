import React from 'react';

import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './components/Header';
import StudentList from './components/StudentList.component';
import CreateStudent from './components/CreateStudent.component';
import EditStudent from './components/EditStudent.component';
import StudentShow from './components/StudentShow.component';

const App = () => {
  return (
    <Router>
      <div className="container text-center">
        <Header />
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={CreateStudent} />
                  <Route path="/create-student" component={CreateStudent} />
                  <Route path="/edit-student/:id" component={EditStudent} />
                  <Route path="/student-list" component={StudentList} />
                  <Route path="/students/:id" component={StudentShow} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
