// RegisterPage.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponent';
import Hero from './assets/Hero.png';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [namaDepan, setNamaDepan] = useState('');
  const [namaBelakang, setNamaBelakang] = useState('');
  const [email, setEmail] = useState('');
  const [telpon, setTelpon] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleRegister = () => {
    // Add your registration logic here
    console.log('Nama Depan:', namaDepan);
    console.log('Nama Belakang:', namaBelakang);
    console.log('Email:', email);
    console.log('Telpon:', telpon);
    console.log('Password:', password);
    console.log('Confirmation Password:', passwordConfirm);
  };

  return (
    <Container>
      <NavbarComponent />
      <div className="mt-5 mb-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 px-5">
            <h1 className="fs-1 fw-bold" style={{ color: "#3A8B91" }}>
              Jelajahi Peluang Menarik
            </h1>
            <Form className="mt-5">
              <Form.Group controlId="formNamaDepan">
                <Form.Label>Nama Depan</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  value={namaDepan}
                  onChange={(e) => setNamaDepan(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formNamaBelakang" className="mt-3">
                <Form.Label>Nama Belakang</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  value={namaBelakang}
                  onChange={(e) => setNamaBelakang(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formTelp" className="mt-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  value={telpon}
                  onChange={(e) => setTelpon(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mt-3">
                <Form.Label>Confirmation Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your confirmation password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </Form.Group>
              <div className="mt-3 d-flex justify-content-center">
                <Link style={{ color: "#3A8B91" }}>Lupa kata sandi?</Link>
              </div>

              <Button
                variant="primary"
                block
                onClick={handleRegister}
                className="mt-3 w-100"
              >
                Register
              </Button>
            </Form>
          </div>
          <div className="col-md-6">
            <img src={Hero} alt="hero" className="w-100" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RegisterPage;
