import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CompanyProfile = () => {
  const [applicants] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phoneNumber: '+6281111111111',
      skills: ['React', 'JavaScript', 'CSS'],
      experience: 'Frontend Developer with 2 years of experience.',
      education: 'Bachelor of Computer Science, Example University',
      portfolio: 'https://www.johndoeportfolio.com',
      linkedin: 'https://www.linkedin.com/in/johndoe',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phoneNumber: '+6281222222222',
      skills: ['Python', 'Django', 'JavaScript'],
      experience: 'Full Stack Developer with 4 years of experience.',
      education: 'Master of Computer Science, Another University',
      portfolio: 'https://www.janesmithportfolio.com',
      linkedin: 'https://www.linkedin.com/in/janesmith',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      phoneNumber: '+6281333333333',
      skills: ['Java', 'Spring Boot', 'SQL'],
      experience: 'Backend Developer with 3 years of experience.',
      education: 'Bachelor of Software Engineering, Yet Another University',
      portfolio: 'https://www.bobjohnsonportfolio.com',
      linkedin: 'https://www.linkedin.com/in/bobjohnson',
    },
  ]);

  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const handleViewProfile = (applicant) => {
    setSelectedApplicant(applicant);
  };

  return (
    <Container className="text-center">
      <h1>Profil Company</h1>

      {applicants.map((applicant) => (
        <Row key={applicant.id} className="mb-4">
          <Col md={6} className="text-left">
            <h2>{applicant.name}</h2>
            <p>Email: {applicant.email}</p>
            <p>Nomor Telepon: {applicant.phoneNumber}</p>

            <div>
              <h3>Keahlian:</h3>
              <ul>
                {applicant.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <button
              className="btn btn-primary mb-2"
              onClick={() => handleViewProfile(applicant)}
            >
              Lihat Profil
            </button>
          </Col>

          {selectedApplicant === applicant && (
            <Col md={6} className="text-left">
              <div>
                <h3>Pengalaman:</h3>
                <p>{applicant.experience}</p>

                <h3>Pendidikan:</h3>
                <p>{applicant.education}</p>

                <h3>Portofolio:</h3>
                <a href={applicant.portfolio} target="_blank" rel="noopener noreferrer">
                  {applicant.portfolio}
                </a>

                <h3>LinkedIn:</h3>
                <a href={applicant.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </Col>
          )}
        </Row>
      ))}
    </Container>
  );
};

export default CompanyProfile;
