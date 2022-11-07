import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import classes from "./NavBarNew.module.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["About", "Skills", "Contact"];

const appBarStyles = {
  boxShadow: "none",
  backgroundColor: "#DCD8EE",
  width: { xm: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" },
  margin: { xm: "0", sm: "0", md: "0%", lg: "0%", xl: "0%" },
  // boxShadow: "0 2px 0 -1px black",
};

export default function DrawerAppBarNew(props) {
  const history = useHistory();
  const [pathName, setPathName] = useState(
    "About" || `${history.location.pathname.slice(1)}`
  );
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigationHandler = (e) => {
    setPathName(e.currentTarget.id);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "#DCD8EE",
        color: "#413a5c",
        fontWeight: "700",
        height: "100%",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <span
          style={{
            backgroundColor: "#413a5c",
            color: "#DCD8EE",
            borderRadius: "2px",
            padding: "0 11px",
          }}
        >
          J
        </span>
        ERONI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", justifyContent: "center" }}
              id={item}
              onClick={navigationHandler.bind(this)}
            >
              <NavLink
                to={`/${item}`}
                style={{
                  textDecoration: "none",
                  color: "#413a5c",
                  fontWeight: "600",
                }}
              >
                <ListItemText id={item} primary={item} />
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ ...appBarStyles }}>
        <Toolbar sx={{ padding: "10px 0" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: "none" },
              marginLeft: "25px",
              color: "#413a5c",
            }}
          >
            <MenuIcon />
            <div style={{ width: "72vw" }}>
              <h3 style={{ textAlign: "center", color: "#413a5c" }}>
                {pathName}
              </h3>
            </div>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: "600",
              fontSize: "50px",
              fontStyle: "normal",
              color: "#413a5c",
              marginLeft: { md: "15%", lg: "15%", xl: "15%" },
            }}
          >
            <span
              style={{
                backgroundColor: "#413a5c",
                color: "#DCD8EE",
                borderRadius: "5px",
                padding: "0 25px",
              }}
            >
              J
            </span>
            ERONI
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
              marginRight: { sm: "0", md: "10%", lg: "10%", xl: "10%" },
            }}
          >
            {" "}
            {/* */}
            {navItems.map((item) => (
              <NavLink
                key={item}
                activeClassName={classes.active}
                to={`/${item}`}
                className={classes.navLink}
              >
                {item}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
