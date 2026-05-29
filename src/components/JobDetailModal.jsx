import {
  Modal,
  Box,
  Typography,
} from "@mui/material";

function JobDetailModal({
  open,
  handleClose,
  job,
}) {

  if (!job) return null;

  return (

    <Modal
      open={open}
      onClose={handleClose}
    >

      <Box
        sx={{
          width: 400,
          bgcolor: "white",
          color: "black",
          p: 3,
          mx: "auto",
          mt: 10,
          borderRadius: 2,
        }}
      >

        <Typography variant="h4">
          {job.title}
        </Typography>

        <Typography
          sx={{ mt: 2 }}
        >
          Company:
          {job.company}
        </Typography>

        <Typography
          sx={{ mt: 2 }}
        >
          {job.description}
        </Typography>

      </Box>

    </Modal>
  );
}

export default JobDetailModal;