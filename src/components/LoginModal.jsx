import {
  Modal,
  Box,
  Button,
  TextField,
} from "@mui/material";

import {
  useContext
} from "react";

import {
  useForm
} from "react-hook-form";

import {
  AuthContext
} from "../context/AuthContext";

import { useState } from "react";

function LoginModal({
  open,
  handleClose,
}) {

  const [error, setError] =
  useState("");

  const { setUser } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {

    if (
      data.username === "Admin" &&
      data.password === "123456"
    ) {

      setUser({
        username:
          data.username,
      });

      handleClose();
    }

    else {
     setError("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (

    <Modal
      open={open}
      onClose={handleClose}
    >

      <Box
        sx={{
          width: 300,
          bgcolor: "gray",
          color: "black",
          p: 3,
          mx: "auto",
          mt: 10,
          borderRadius: 2,
        }}
      >

        <form
          onSubmit={
            handleSubmit(onSubmit)
          }
        >

          <TextField
            fullWidth
            label="Username"
            {...register("username")}
          />

          <br />
          <br />

          <TextField
            fullWidth
            type="password"
            label="Password"
            {...register("password")}
          />

          <br />
          <br />

          <Button
            type="submit"
            variant="contained"
            fullWidth
          >
            Login
          </Button>

          {error && (

          <p
          style={{
          color: "red",
          marginTop: "10px",
          }}
            >
            {error}
          </p>
)}

        </form>

      </Box>

    </Modal>
  );
}

export default LoginModal;