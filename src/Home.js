// Home.js
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponent';
import { Link } from 'react-router-dom';

const Home = () => {
  // Placeholder data for job listings
  const jobListings = [
    {
      id: 1,
      company: 'Company A',
      position: 'Web Developer',
      location: 'Jakarta, Indonesia',
      link: '/jobs/1', // Replace with the actual link
    },
    {
      id: 2,
      company: 'Company B',
      position: 'UX Designer',
      location: 'Surabaya, Indonesia',
      link: '/jobs/2', // Replace with the actual link
    },
    // Add more job listings as needed
  ];

  return (
    <Container>
      <NavbarComponent />
      <div className="mt-5">
        <h1 className="fs-1 fw-bold" style={{ color: '#3A8B91' }}>
          Temukan Pekerjaan Terbaik
        </h1>
        <div className="mt-4">
          {jobListings.map((job) => (
            <Card key={job.id} className="mb-3">
              <Card.Body>
                <h2>{job.position}</h2>
                <h5>{job.company}</h5>
                <p>Location: {job.location}</p>
                <Link to={job.link}>
                  <Button variant="primary">Lihat Detail</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Home;
