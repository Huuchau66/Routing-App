import jobs
from "../data/jobs";

import JobList
from "../components/JobList";

import { useState }
from "react";

import PaginationButtons from "../components/Pagination";

import { Container } from "@mui/material";

import JobDetailModal
from "../components/JobDetailModal";

import {
  useContext
} from "react";

import {
  AuthContext
} from "../context/AuthContext";

import LoginModal
from "../components/LoginModal";



function Home() {

  const [page, setPage] = useState(1);
  const jobsPerPage = 3;
  const start =(page - 1) * jobsPerPage;
  const currentJobs =jobs.slice(start, start + jobsPerPage);
  const [open, setOpen] =useState(false);
  const [selectedJob, setSelectedJob] =useState(null);
  const [loginOpen,
  setLoginOpen] =
    useState(false);
  const handleOpen =
  (job) => {

    if (!user) {

      setLoginOpen(true);

      return;
    }

    setSelectedJob(job);

    setOpen(true);
  };
    const { user } =
  useContext(AuthContext);
    
  return (

    <Container sx={{ mt: 4 }}>
    <JobList jobs={currentJobs} handleOpen={handleOpen} />
    <JobDetailModal  open={open}  handleClose={() => setOpen(false) }  job={selectedJob}/>   
    <PaginationButtons page={page} setPage={setPage} />
    <LoginModal
  open={loginOpen}
  handleClose={() =>
    setLoginOpen(false)
  }
/>
    </Container>
  );
}

export default Home;