import { useState }
from "react";

import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar
from "./components/Navbar";

import Home
from "./pages/Home";

import LoginModal
from "./components/LoginModal";

function App() {

  const [open, setOpen] =
    useState(false);

  return (

    <>

      <Navbar
        setOpen={setOpen}
      />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

      </Routes>

      <LoginModal
        open={open}
        handleClose={() =>
          setOpen(false)
        }
      />

    </>

  );
}

export default App;