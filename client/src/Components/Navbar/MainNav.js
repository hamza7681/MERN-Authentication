import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const routes = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/login",
      name: "Login",
    },
    {
      path: "/signup",
      name: "SignUp",
    },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {routes.map((val, index) => {
          return (
            <>
              <ListItem key={index} onClick={handleDrawerToggle}>
                <SideList>
                  <Link to={val.path} className="link">
                    {val.name}
                  </Link>
                </SideList>
              </ListItem>
              <Divider/>
            </>
          );
        })}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <MainHeader>
            <Left>
              <h3>
                <Link to="" className="link1">
                  MERN Authentication
                </Link>
              </h3>
            </Left>
            <Right>
              <ul>
                <li>
                  <Link to="/login" className="link">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="link">
                    SignUp
                  </Link>
                </li>
                <li>
                  <AvatarDiv>
                    <Avatar
                      alt="Hamza"
                      sx={{ bgcolor: "orange" }}
                      src="/static/images/avatar/1.jpg"
                    />
                    <h4>Hamza Siddique</h4>
                  </AvatarDiv>
                </li>
                <li>
                  <span className="link">Logout</span>
                </li>
              </ul>
            </Right>
          </MainHeader>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

const MainHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Left = styled.div`
  h3 {
    .link1 {
      color: white;
      text-decoration: none;
      position: relative;
      top: 7px;
    }
    @media screen and (max-width: 768px) {
      .link1 {
        top: 0;
      }
    }
  }
`;

const Right = styled.div`
  ul {
    list-style-type: none;
    li {
      display: inline-block;
      margin-left: 40px;
      .link {
        color: white;
        text-decoration: none;
      }
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      display: none;
    }
  }
`;

const AvatarDiv = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  width: 200px;
  border-radius: 25px;
  h4 {
    color: blue;
    position: relative;
    top: 10px;
    left: 4px;
  }
`;

const SideList = styled.span`
  .link {
    color: black;
    text-decoration: none;
  }
`;

export default ResponsiveDrawer;
