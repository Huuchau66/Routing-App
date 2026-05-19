import { Box, Button } from "@mui/material";

function PaginationButtons({
  page,
  setPage,
}) {

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        justifyContent: "center",
        mt: 3,
      }}
    >

      <Button
        variant={
          page === 1
            ? "contained"
            : "outlined"
        }
        onClick={() => setPage(1)}
      >
        1
      </Button>

      <Button
        variant={
          page === 2
            ? "contained"
            : "outlined"
        }
        onClick={() => setPage(2)}
      >
        2
      </Button>

      <Button
        variant={
          page === 3
            ? "contained"
            : "outlined"
        }
        onClick={() => setPage(3)}
      >
        3
      </Button>

    </Box>
  );
}

export default PaginationButtons;