// import React, { useState } from "react";
// import { headerMenu } from "../../constants";

// import {
//   AppBar,
//   Container,
//   Toolbar,
//   Typography,
//   Menu,
//   Box,
//   IconButton,
//   MenuItem,
//   // Link,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import Search from "../search/Search";
// import { FaRegHeart } from "react-icons/fa";
// import { GrCart } from "react-icons/gr";

// import { NavLink ,Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// const Header = () => {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const {items} = useSelector(store => store.cart)
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

 
// const cartCount=(<span 
//   style={{
//     position:"absolute",
//     width:"20px",
//     height:"20px",
//     borderRadius:"100px",
//     backgroundColor:"red",
//     color:"#ffff",
//     display:"flex",
//     alignItems:"center",
//     justifyContent:"center",
//     top:"4px",
//     right:"-3px",
//     fontSize:"12px"
//   }}
//   >
//     {items.length}
//   </span>);
//   return (
//     <AppBar position="static" sx={{ bgcolor: "#fff", pt:"40px",pb:"16px"  , borderBottom:"1px solid rgba(0, 0, 0, 1) " }} elevation={0} >
//       <Container maxWidth="lg" sx={{p:"0px"}}>
//         <Toolbar sx={{ bgcolor: "#fff",p:"0px" }}>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: "190px",
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               // letterSpacing: '.3rem',
//               color: "#000",
//               textDecoration: "none",
//             }}
//           >
//             Exclusive
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {headerMenu.map((page) => (
//                 <MenuItem key={page.name} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page.name}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           <Box
//             sx={{
//               flexGrow: 1,
//               gap: "48px",
//               display: { xs: "none", md: "flex" },
//             }}
//           >
//             {headerMenu.map((page) => (
//               <Link
//                 style={{
//                   color:"#000",
//                 }}
//                 to={page.path}
                
//                 key={page.name}
//               >
//                 {page.name}
//               </Link>
//             ))}
//           </Box>
//           <Box sx={{display:"flex" ,ml:"28px"}}>
//             <Search  />
//             <IconButton sx={{ml:"24px",mr:"16px"}}>
//               <FaRegHeart />
//             </IconButton>
//             <IconButton  component={Link}  to="/cart" sx={{position:"relative"}}>

//               <GrCart   /> {items.length>0 && cartCount}
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Header;
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "../search/Search";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { items } = useSelector((store) => store.cart);
  const { items2 } = useSelector((store) => store.heart);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const cartCount =
    items.length > 0 && (
      <span
        style={{
          position: "absolute",
          width: "20px",
          height: "20px",
          borderRadius: "100px",
          backgroundColor: "red",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: "4px",
          right: "-3px",
          fontSize: "12px",
        }}
      >
        {items.length}
      </span>
    );

  const heartCount =
    items2.length > 0 && (
      <span
        style={{
          position: "absolute",
          width: "20px",
          height: "20px",
          borderRadius: "100px",
          backgroundColor: "red",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: "4px",
          right: "-3px",
          fontSize: "12px",
        }}
      >
        {items2.length}
      </span>
    );

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#fff",
        pt: "40px",
        pb: "16px",
        borderBottom: "1px solid rgba(0, 0, 0, 1)",
      }}
      elevation={0}
    >
      <Container maxWidth="lg" sx={{ p: "0px" }}>
        <Toolbar sx={{ bgcolor: "#fff", p: "0px" }}>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: "190px",
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "#000",
              textDecoration: "none",
            }}
          >
            Exclusive
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
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
                style={{
                  color: "#000",
                  textDecoration: "none",
                }}
                to={page.path}
                key={page.name}
              >
                {page.name}
              </Link>
            ))}
          </Box>

          <Box sx={{ display: "flex", ml: "28px" }}>
            <Search />
            <IconButton sx={{ ml: "24px", mr: "16px" }} component={Link} to="/heart">
              <FaRegHeart />
              {heartCount}
            </IconButton>
            <IconButton component={Link} to="/cart" sx={{ position: "relative" }}>
              <GrCart />
              {cartCount}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
