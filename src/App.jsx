import { Container } from "@mui/material";
import { useState } from "react";
import Navbar from "./components/Navbar";
import JobList from "./components/JobList";
import PaginationButtons from "./components/Pagination";
import jobs from "./data/jobs";

function App() {
  const [page, setPage] = useState(1);
  const jobsPerPage = 3;
  const start =(page - 1) * jobsPerPage;
  const currentJobs =jobs.slice(start, start + jobsPerPage);
  return (
    <>
      <Navbar />

      <Container sx={{ mt: 4 }}>

        <JobList jobs={currentJobs} />

        <PaginationButtons page={page} setPage={setPage} />

      </Container>
    </>
  );
}

export default App;