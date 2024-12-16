import React, { useState } from 'react';
import './LoginCss.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
function Login() {

  return (
    <Container fluid>
      <Row>
        <Col sm={1}></Col>
        <Col>
          <div className='outer'>
            <div className='inner'>
              <div className='inner-image'>
                
              </div>
              <div className='inner-form'>
                <h1>Access Your Account</h1>
                <span>Back To Home</span>
                <form className='signup-form'>
                  <label>Name</label><br />
                  <input
                    type="text"
                    name="name"
                  /><br /><br />
                  <label>Email</label><br />
                  <input
                    type="email"
                    name="email"
                  /><br /><br />
                  <label>Password</label><br />
                  <input
                    type="password"
                    name="password"
                  /><br /><br />
                  <Button className='submit-btn' type='submit'>
                   Login
                  </Button><br /><br />
                    <Button className='Login-btn'>Forget Password</Button>
                </form>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={1}></Col>
      </Row>
    </Container>
  );
}

export default Login;
