import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Login';
import RegisterPage from './register';
import CompanyPage from './CompanyPage';
import Home from './Home';
import JobDetailPage from './components/JobDetailPage';
import ApplicantProfilePage from './components/ApplicantProfilePage';
import CompanyProfile from './components/CompanyProfilePage';
import JobApplicationPage from './jobApplicationPage';





function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" >
            <Route path='/' element={<Home />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/company' element={<CompanyPage />} />
              <Route path="/profile" element={<CompanyProfile />} />
            <Route path="/jobs" element={<JobDetailPage />} />
            <Route path="/applicants" element={<ApplicantProfilePage />} />
            <Route path="/Jobs-Application" element={<JobApplicationPage />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
