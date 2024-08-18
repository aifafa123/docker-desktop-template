import { alpha, Button, IconButton, styled, InputBase, AppBar, Toolbar, Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';

import "./TopBar.css";

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
  padding: theme.spacing(0, 1),
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
    padding: theme.spacing(0.5, 0.5, 0.5, 0),
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

const TopBar = ()=>{
  return (
    <AppBar position="static" className="top-bar">
      {/* <Toolbar> */}
        <Typography sx={{flexFlow: 1}}>
          <img src="" alt="docker desktop" width={100} height={30} />
        </Typography>

        <Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              size="small"
            />
          </Search>

          <IconButton size="small">
            <SchoolIcon></SchoolIcon>
          </IconButton>

          <IconButton size="small">
            <SchoolIcon></SchoolIcon>
          </IconButton>

          <IconButton size="small">
            <SettingsIcon></SettingsIcon>
          </IconButton>

          <IconButton size="small">
            <AppsIcon></AppsIcon>
          </IconButton>

          <Button variant="contained" size="small">Sign in</Button>
        </Box>
      {/* </Toolbar> */}
    </AppBar>
  )
}

export default TopBar;
