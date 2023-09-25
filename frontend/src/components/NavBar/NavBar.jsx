import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material"; 
import Logo from '../../assets/Icons/JP Logo No BG.png';
import GitHubLogo from '../../assets/Icons/GitGreen.svg';
import LinkedInLogo from '../../assets/Icons/LinkedIn Green.svg';
import ResumeLogo from '../../assets/Icons/Document.svg';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import './NavBar.css';


const ResponsiveDrawer = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
      overflow: "hidden",
      width: "75%",
      '& .MuiDrawer-paper': {
          width: "75%",
      },
  },
  [theme.breakpoints.up("sm")]: {
    overflow: "hidden",
      width: "75%",
      '& .MuiDrawer-paper': {
          width: "75%",
      },
  },
}));

export default function NavBar() {
  const [open, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  


  return (
<div className="main-nav-container">
    <AppBar 
    sx={{
    backgroundColor: "rgb(10, 25, 47)"}}
    position="fixed">
      <Container maxWidth="lg" >
        <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "rgb(10, 25, 47)",
        }}
        >

            <a href='/' className='brand-logo'>
              <img className="navbar-logo" src={Logo} alt="logo" />
            </a>

            <div className='navbar-menu'>
             
              <ul className="nav-link-list">
                <li className="nav-item">
                    <a href="https://github.com/jpadwor1" target="_blank" rel="noreferrer">  
                        <img className="nav-link" href="https://github.com/jpadwor1"src={GitHubLogo} alt="GitHub"/>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="https://www.linkedin.com/in/johnpadworski/" target="_blank" rel="noreferrer">
                        <img className="nav-link" src={LinkedInLogo} alt="GitHub"/>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="https://drive.google.com/uc?id=1MxdFOnG4LykUKjH47En3Xau9MFASh6xG&export=download" target="_blank" rel="noreferrer">   
                        <img className="nav-link" src={ResumeLogo} alt="Resume"/>
                    </a>
                </li>
              </ul>
             
              
              <IconButton 
              size="large"
              edge="end" 
              aria-label="open drawer" 
              onClick={toggleDrawer(true)}
              sx={{ 
                color: "#ffbf38",
                alignSelf: "right",
                mr: 0,
                display: {
                  xs: 'flex',
                  sm: 'flex',
                  md: 'none',
                  lg: 'none',

                  }
                }}
              >
                <MenuIcon />
              </IconButton>

            </div>

            

            {/* The outside of the drawer */}
            <ResponsiveDrawer
              //from which side the drawer slides in
              anchor="right"
              //if open is true --> drawer is shown
              open={open}
              //function that is called when the drawer should close
              onClose={toggleDrawer(false)}
              //function that is called when the drawer should open
              onOpen={toggleDrawer(true)}
            >
                {/* The inside of the drawer */}
                <Box sx={{
                  p: 0,
                  height: 1,
                  width: "100%",
                  backgroundColor: "#191919"
                }}>

                  {/* 
                  when clicking the icon it calls the function toggleDrawer 
                  and closes the drawer by setting the variable open to false
                  */}
                  <IconButton 
                  onClick={toggleDrawer(false)}
                  sx={{
                    color:"rgb(126, 130, 130)", 
                    m: 2,
                    '&:hover': {
                      color: "#ffbf38",
                    }
                    }}>
                    <CloseIcon  />
                  </IconButton>

                  <Divider sx={{mb: 2}} />

                  <Box sx={{mb: 2}}>
                    
                    <ul className="nav-link-list-drawer">
                      
                      <li className="nav-item-drawer">
                        <a href="https://github.com/jpadwor1" rel="noreferrer" target="_blank">
                          <img className="nav-link" href="https://github.com/jpadwor1" src={GitHubLogo} alt="GitHub"/>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="https://www.linkedin.com/in/johnpadworski/" target="_blank" rel="noreferrer">
                          <img className="nav-link" src={LinkedInLogo} alt="GitHub"/>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="https://drive.google.com/uc?id=1zvXARInOC--UAYHf68gmx5sNzIWFLtkZ&export=download" target="_blank" rel="noreferrer">   
                          <img className="nav-link" src={ResumeLogo} alt="Resume"/>
                        </a>
                      </li>
                    </ul>

                  <div className="drawer-link-container">
                    <ListItemButton
                    onClick={toggleDrawer(false)}
                    href="#about" >
                        <ArrowOutwardIcon
                        sx={{
                          mr: 1,
                          color:"#ffbf38"
                         }} />
                      <ListItemText 
                      sx={{
                        color:"rgb(126, 130, 130)",
                        '&:hover': {
                          color: "#fcfcfc",
                        },
                        }}
                      primary="About"
                      />
                    </ListItemButton>
                    
                    <ListItemButton
                    onClick={toggleDrawer(false)}
                    href='#experience'>
                        <ArrowOutwardIcon
                        sx={{
                          color:"#ffbf38",
                          mr: 1,
                        }}
                        />
                      <ListItemText
                       sx={{
                        color:"rgb(126, 130, 130)",
                        '&:hover': {
                          color: "#fcfcfc", 
                        },
                        }}
                        primary="Experience" 
                      />
                    </ListItemButton>

                    <ListItemButton 
                    onClick={toggleDrawer(false)}
                    href="#Projects">
                        <ArrowOutwardIcon
                        sx={{
                          color:"#ffbf38",
                          mr: 1,
                        }}
                        />
                      <ListItemText
                       sx={{
                        color:"rgb(126, 130, 130)",
                        '&:hover': {
                          color: "#fcfcfc", 
                        },
                        }}
                        primary="Projects" 
                      />
                    </ListItemButton>

                    <ListItemButton 
                    onClick={toggleDrawer(false)}
                    href="#contact">
                        <ArrowOutwardIcon
                        sx={{
                          color:"#ffbf38",
                          mr: 1,
                        }}
                        />
                      <ListItemText
                       sx={{
                        color:"rgb(126, 130, 130)",
                        '&:hover': {
                          color: "#fcfcfc", 
                        },
                        }}
                        primary="Connect" 
                      />
                    </ListItemButton>
                    </div>    
                  </Box>
                  
                  
                  

                </Box>
              
            </ResponsiveDrawer>
           

          </Toolbar>
      </Container>
    </AppBar>
  </div>
  );
}