import {
  useContext
} from "react";

import SearchIcon
from "@mui/icons-material/Search";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  InputBase,
  IconButton,
} from "@mui/material";

import { styled, alpha } from '@mui/material/styles';

import {
  AuthContext
} from "../context/AuthContext";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Navbar({
  setOpen,
}) {

  const {
    user,
    setUser,
  } = useContext(AuthContext);

  


  return (
  <Box sx={{ flexGrow: 1 }}>

    <AppBar position="static">

      <Toolbar>

         <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton>
          
          <Typography
          sx={{ flexGrow: 1 }}
        >
          Job Routing
        </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

        {user ? (

          <>
            <Typography
              sx={{ mr: 2 }}
            >
              {user.username}
            </Typography>

            <Button
              color="inherit"
              onClick={() =>
                setUser(null)
              }
            >
              Logout
            </Button>
          </>

        ) : (

          <Button
            color="inherit"
            onClick={() =>
              setOpen(true)
            }
          >
            Login
          </Button>

        )}

      </Toolbar>

    </AppBar>

  </Box>
  );
}

export default Navbar;