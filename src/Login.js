import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponent';
import Hero from './assets/Hero.png'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Container>
      <NavbarComponent/>
      <div className="mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 px-5">
            <h1 className='fs-1 fw-bold'  style={{color : "#3A8B91"}}>Jelajahi Peluang Menarik</h1>
                <Form className='mt-5'>
                  <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword" className='mt-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <div className="mt-3 d-flex justify-content-center">
                    <Link style={{color : "#3A8B91"}}>Lupa kata sandi?</Link>
                  </div>
                    
                    <Button variant="primary" block onClick={handleLogin} className='mt-3 w-100'>
                      Login
                    </Button>
                </Form>
                
          </div>
          <div className="col-md-6">
          <img src={Hero} alt='hero' className='w-100' />
          </div>
        </div>
      </div>
      </Container>
  );
};

export default LoginPage;
