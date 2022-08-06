import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startLogOut } from "../../store/auth/thunks";
import { useMobileOpenResponsive } from "../../hooks/useMobileOpenResponsive";

import MenuIcon from "@mui/icons-material/Menu";
import { SideBarItem } from "./SideBarItem";

const drawerWidth = 240;
export const NavBar = (props) => {
  const { window } = props;
  const { mobileOpen, setMobileOpen, handleDrawerToggle } =
    useMobileOpenResponsive({});

  const { displayName } = useSelector((state) => state.auth);

  const { notes } = useSelector((state) => state.journal);

  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(startLogOut({}));
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },

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
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                {displayName}
              </Typography>
            </Toolbar>

            <Divider />

            <List>
              {notes.map((note) => (
                <SideBarItem key={note.id} {...note} />
              ))}
            </List>
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                {displayName}
              </Typography>
            </Toolbar>

            <Divider />

            <List>
              {notes.map((note) => (
                <SideBarItem key={note.id} {...note} />
              ))}
            </List>
          </Drawer>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" noWrap component="div">
              Journal
            </Typography>

            <IconButton color="error" onClick={onLogOut}>
              <LogoutOutlined />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
