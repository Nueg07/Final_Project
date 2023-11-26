// CompanyPage.js
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import JobDetailPage from './components/JobDetailPage';
import ApplicantProfilePage from './components/ApplicantProfilePage';
import CompanyProfile from './components/CompanyProfilePage';
import NavbarComponent from './components/NavbarComponent';

const CompanyPage = () => {
  return (
    <Container fluid>
      <NavbarComponent />
      <Row>
        {/* Sidebar dengan daftar perusahaan, pekerjaan, dan pelamar */}
        <Col md={2} className="bg-light">
          <Nav className="flex-column">
            <Nav.Item>
              <Link to="/profile" className="nav-link">
                Profil Perusahaan
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/jobs" className="nav-link">
                Pekerjaan
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/applicants" className="nav-link">
                Profile Company
              </Link>
            </Nav.Item>
          </Nav>
        </Col>
        {/* Konten halaman */}
        <Col md={10}>
          {/* ... (NavbarComponent dan konten lainnya) */}
          <Routes>
            <Route path="/profile" element={<CompanyProfile />} />
            <Route path="/jobs" element={<JobDetailPage />} />
            <Route path="/applicants" element={<ApplicantProfilePage />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyPage;
