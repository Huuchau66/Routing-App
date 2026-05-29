import {
  Paper,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

function JobCard({ job,handleOpen, }) {

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        mb: 2,
      }}
    >

    <Card
    onClick={() =>
    handleOpen(job)
      }
      sx={{
        m: 2,
        cursor: "pointer",
      }}
    >

      <CardContent>

        <Typography variant="h5">
          {job.title}
        </Typography>

        <Typography>
          {job.company}
        </Typography>

        <Typography>
          {job.description}
        </Typography>

      </CardContent>

    </Card>
    </Paper>
  );
  
}

export default JobCard;