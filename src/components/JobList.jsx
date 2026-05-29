import JobCard
from "./JobCard";

function JobList({ jobs , handleOpen,}) {

  return (

    <div>

      {jobs.map((job) => (

        <JobCard
          key={job.id}
          job={job}
          handleOpen={handleOpen}
        />

      ))}

    </div>
  );
}

export default JobList;