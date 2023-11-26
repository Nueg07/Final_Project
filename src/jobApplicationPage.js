// JobApplicationPage.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponent';

const JobApplicationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resumeLink, setResumeLink] = useState('');

  const handleApply = () => {
    // Add your application submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Resume Link:', resumeLink);
    // Additional logic: Submit the application data to your backend
  };

  return (
    <Container>
      <NavbarComponent />
      <div className="mt-5">
        <h1 className="fs-1 fw-bold" style={{ color: '#3A8B91' }}>
          Lamar Pekerjaan
        </h1>
        <div className="mt-4">
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mt-3">
              <Form.Label>Nomor Telepon</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formResume" className="mt-3">
              <Form.Label>Link Resume/Portofolio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the link to your resume or portfolio"
                value={resumeLink}
                onChange={(e) => setResumeLink(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              className="mt-3"
              onClick={handleApply}
            >
              Lamar Pekerjaan
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default JobApplicationPage;
