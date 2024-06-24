import React, { useState } from "react";
import { headerMenu } from "../../constants";

import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Menu,
  Box,
  IconButton,
  MenuItem,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "../search/Search";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";

// import { NavLink ,Link } from "react-router-dom";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#fff", pt:"40px",pb:"16px"  , borderBottom:"1px solid rgba(0, 0, 0, 1) " }} elevation={0} >
      <Container maxWidth="lg" sx={{p:"0px"}}>
        <Toolbar sx={{ bgcolor: "#fff",p:"0px" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: "190px",
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: "#000",
              textDecoration: "none",
            }}
          >
            Exclusive
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {headerMenu.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              gap: "48px",
              display: { xs: "none", md: "flex" },
            }}
          >
            {headerMenu.map((page) => (
              <Link
                component={"a"}
                href={page.path}
                color="#000"
                key={page.name}
              >
                {page.name}
              </Link>
            ))}
          </Box>
          <Box sx={{display:"flex" ,ml:"28px"}}>
            <Search  />
            <IconButton sx={{ml:"24px",mr:"16px"}}>
              <FaRegHeart />
            </IconButton>
            <IconButton  >
              <GrCart  />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
