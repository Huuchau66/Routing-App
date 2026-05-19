import {
  Paper,
  Typography,
  Chip,
  Box,
  Button,
} from "@mui/material";

function JobCard({ job }) {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        mb: 2,
      }}
    >
      <Typography variant="h5">
        {job.title}
      </Typography>

      <Typography sx={{ mb: 2 }}>
        {job.description}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
          mb: 2,
        }}
      >
        {job.skills.slice(0, 4).map((skill) => (
          <Chip
            key={skill}
            label={skill}
          />
        ))}
      </Box>

      <Button variant="contained">
        Apply
      </Button>
    </Paper>
  );
}

export default JobCard;