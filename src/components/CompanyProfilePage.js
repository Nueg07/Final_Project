import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const CompanyProfiles = () => {
  const [companies] = useState([
    {
      id: 1,
      name: 'TechCo',
      industry: 'Technology',
      location: 'Jakarta, Indonesia',
      description: 'Leading technology company focused on innovative solutions for digital transformation.',
      website: 'https://www.techco.com',
      socialMedia: {
        linkedin: 'https://www.linkedin.com/company/techco',
        twitter: 'https://www.twitter.com/techco',
        facebook: 'https://www.facebook.com/techco',
      },
    },
    {
      id: 2,
      name: 'InnoCorp',
      industry: 'Innovation',
      location: 'Surabaya, Indonesia',
      description: 'InnoCorp specializes in cutting-edge solutions to drive innovation in various industries.',
      website: 'https://www.innocorp.com',
      socialMedia: {
        linkedin: 'https://www.linkedin.com/company/innocorp',
        twitter: 'https://www.twitter.com/innocorp',
        facebook: 'https://www.facebook.com/innocorp',
      },
    },
    {
      id: 3,
      name: 'DigitalSolutions Ltd.',
      industry: 'Digital Services',
      location: 'Bandung, Indonesia',
      description: 'DigitalSolutions Ltd. provides comprehensive digital services tailored to your business needs.',
      website: 'https://www.digitalsolutions.com',
      socialMedia: {
        linkedin: 'https://www.linkedin.com/company/digitalsolutions',
        twitter: 'https://www.twitter.com/digitalsolutions',
        facebook: 'https://www.facebook.com/digitalsolutions',
      },
    },
  ]);

  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleViewProfile = (company) => {
    setSelectedCompany(company);
  };

  return (
    <Container>
      <h1 className="text-center mb-4">Profile Perusahaan</h1>

      {companies.map((company) => (
        <Row key={company.id} className="mb-4">
          <Col md={6}>
            <div>
              <h2>{company.name}</h2>
              <p>Industry: {company.industry}</p>
              <p>Location: {company.location}</p>

              <div>
                <h3>Description:</h3>
                <p>{company.description}</p>
              </div>

              <Button
                variant="primary"
                className="mb-2"
                onClick={() => handleViewProfile(company)}
              >
                View Profile
              </Button>
            </div>
          </Col>

          {selectedCompany === company && (
            <Col md={6}>
              <div>
                <h3>Website:</h3>
                <a href={company.website} target="_blank" rel="noopener noreferrer">
                  {company.website}
                </a>

                <h3>Social Media:</h3>
                <ul>
                  {Object.entries(company.socialMedia).map(([platform, link]) => (
                    <li key={platform}>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          )}
        </Row>
      ))}
    </Container>
  );
};

export default CompanyProfiles;
