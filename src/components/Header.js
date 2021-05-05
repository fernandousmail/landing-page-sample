import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  makeStyles,
  Slide,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    opacity: "0.8",
    height: "5em",
  },
  logo: {
    flexGrow: "1",
    marginLeft: "5rem",
  },
  botones: {
    margin: theme.spacing(3),
    color: "white",
  },
  botonactivo: {
    backgroundColor: theme.palette.secondary.main,
  },
  modalpaper: {
    background: theme.palette.secondary.main,
    display: "flex",
  },
  drawerlinks: {
    margin: theme.spacing(4),
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const phonesize = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const routesHelper = [
    { name: "home", route: "/", icon: <HomeIcon /> },
    { name: "service info", route: "/service", icon: <LibraryBooksIcon /> },
    { name: "contact", route: "/contact", icon: <EmailIcon /> },
  ];
  const openDrawerHandler = () => {
    setOpenDrawer(true);
  };

  const closeDrawerHandler = () => {
    setOpenDrawer(false);
  };

  return (
    <HideOnScroll {...props}>
      <AppBar className={classes.root} position="fixed">
        <Toolbar>
          <Typography className={classes.logo} variant="h4">
            YourLogo
          </Typography>
          {!phonesize ? (
            <Box display="flex" marginRight="5rem">
              {routesHelper.map((route) => (
                <NavLink exact
                  to={route.route}
                  activeClassName={classes.botonactivo}
                  key={route.name}
                >
                  <Button size="large" className={classes.botones}>
                    {route.name}
                  </Button>
                </NavLink>
              ))}
            </Box>
          ) : (
            <>
              <IconButton onClick={openDrawerHandler}>
                <MenuIcon />
              </IconButton>
              <Drawer
                open={openDrawer}
                anchor="right"
                className={classes.drawer}
                ModalProps={{
                  onClose: closeDrawerHandler,
                  container: document.body,
                }}
                PaperProps={{ className: classes.modalpaper }}
              >
                <List>
                  {routesHelper.map((route) => (
                    <NavLink
                      key={route.route}
                      to={route.route}
                      style={{ textDecoration: "none" }}
                    >
                      <ListItem className={classes.drawerlinks}>
                        <Button
                          startIcon={route.icon}
                          onClick={closeDrawerHandler}
                        >
                          {route.name}
                        </Button>
                      </ListItem>
                    </NavLink>
                  ))}
                </List>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
