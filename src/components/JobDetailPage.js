import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const JobDetailPage = () => {
  const jobListings = [
    {
      id: 1,
      company: 'Nama Perusahaan A',
      position: 'Senior Frontend Developer',
      description: 'Deskripsi pekerjaan yang sangat menarik dan menggairahkan. Ini adalah kesempatan luar biasa untuk bergabung dengan tim kami yang hebat!',
      requirements: ['Pengalaman dalam pengembangan frontend', 'Kemampuan komunikasi yang baik', 'Kreatif dan inovatif'],
      benefits: ['Gaji kompetitif', 'Fasilitas kesehatan', 'Fleksibilitas jam kerja'],
    },
    {
      id: 2,
      company: 'Nama Perusahaan B',
      position: 'UX Designer',
      description: 'Deskripsi pekerjaan yang menggairahkan untuk seorang UX Designer. Bergabunglah dengan tim kami dan rancang pengalaman pengguna terbaik!',
      requirements: ['Pengalaman dalam desain antarmuka pengguna', 'Kreatif dan berpikiran inovatif', 'Kemampuan komunikasi yang baik'],
      benefits: ['Gaji kompetitif', 'Fasilitas kesehatan', 'Proyek menarik'],
    },
    {
      id: 3,
      company: 'Nama Perusahaan C',
      position: 'Full Stack Developer',
      description: 'Kami mencari Full Stack Developer berbakat untuk bergabung dengan tim kami. Jika Anda memiliki keterampilan penuh tumpukan, ayo bergabung!',
      requirements: ['Pengalaman dalam pengembangan frontend dan backend', 'Kemampuan pemecahan masalah yang baik', 'Kerja sama tim yang baik'],
      benefits: ['Gaji kompetitif', 'Fleksibilitas jam kerja', 'Lingkungan kerja yang ramah'],
    },
  ];

  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [applicants, setApplicants] = useState([]);

  const handleJobClick = (jobId) => {
    // Simulate fetching applicants for the selected job (you can replace this with actual data fetching)
    // In a real-world scenario, you might fetch this data from a server based on the jobId
    const fetchedApplicants = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
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
        skills: ['Python', 'Django', 'JavaScript'],
        experience: 'Full Stack Developer with 4 years of experience.',
        education: 'Master of Computer Science, Another University',
        portfolio: 'https://www.janesmithportfolio.com',
        linkedin: 'https://www.linkedin.com/in/janesmith',
      },
      // Add more applicants as needed
    ];

    setSelectedJob(jobId);
    setApplicants(fetchedApplicants);
    setSelectedApplicant(null); // Clear the selected applicant when viewing a new job
  };

  const handleViewProfile = (applicantId) => {
    // Set the selected applicant when viewing their profile
    const applicant = applicants.find((applicant) => applicant.id === applicantId);
    setSelectedApplicant(applicant);
  };

  const handleAccept = (applicantId) => {
    // Implement logic for accepting the applicant
    console.log(`Accepted applicant with ID ${applicantId}`);
    // You can also update the UI or perform further actions
  };

  const handleReject = (applicantId) => {
    // Implement logic for rejecting the applicant
    console.log(`Rejected applicant with ID ${applicantId}`);
    // You can also update the UI or perform further actions
  };

  return (
    <Container>
      <h1 className="mt-4">Pekerjaan</h1>
      <div className="my-4">
        {jobListings.map((job) => (
          <Card key={job.id} className="mb-3">
            <Card.Body>
              <h2>{job.position}</h2>
              <h3>{job.company}</h3>
              <Button onClick={() => handleJobClick(job.id)}>Lihat Detail</Button>
              {selectedJob === job.id && (
                <div className="mt-3">
                  <h4>Deskripsi Pekerjaan:</h4>
                  <p>{job.description}</p>

                  <h4>Persyaratan:</h4>
                  <ul>
                    {job.requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>

                  <h4>Manfaat:</h4>
                  <ul>
                    {job.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>

                  <h4>Pelamar Pekerjaan:</h4>
                  <ul>
                    {applicants.map((applicant) => (
                      <li key={applicant.id}>
                        {applicant.name} - {applicant.email}
                        <Button
                          variant="primary"
                          className="ml-2"
                          onClick={() => handleViewProfile(applicant.id)}
                        >
                          Lihat Profil
                        </Button>
                        {selectedApplicant === applicant && (
                          <>
                            <Button
                              variant="success"
                              className="ml-2"
                              onClick={() => handleAccept(applicant.id)}
                            >
                              Terima
                            </Button>
                            <Button
                              variant="danger"
                              className="ml-2"
                              onClick={() => handleReject(applicant.id)}
                            >
                              Tolak
                            </Button>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default JobDetailPage;
