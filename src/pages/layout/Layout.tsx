import { Outlet, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { blue, grey } from "@mui/material/colors";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Layout = () => {
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "white",
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: "xs", sm: "sm", md: "md", lg: "lg" },
        backgroundColor: grey[50],
        mx: "auto",
      }}
    >
      <Box>
        <AppBar position="static" style={{ background: blue[800] }}>
          <Toolbar>
            <Link to="/" style={linkStyle}>
              Build
            </Link>
            <Link to="/mycart" style={linkStyle}>
              My Cart
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </Box>
  );
};

export default Layout;
