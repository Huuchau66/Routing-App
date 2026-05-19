import JobCard from "./JobCard";

function JobList({ jobs }) {
  return (
    <>
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
        />
      ))}
    </>
  );
}

export default JobList;