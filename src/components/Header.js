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
    backgroundColor: theme.palette.secondary.light,
    color: "white",
    "&:active": {
      backgroundColor: "white",
    },
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
  const theme = useTheme()
  const phonesize = useMediaQuery(theme.breakpoints.down("xs")) 
  const [openDrawer, setOpenDrawer] = useState(false);

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
          {!phonesize?
            <Box display="flex" marginRight="5rem">
              <NavLink to="/" activeClassName={classes.active}>
                <Button size="large" className={classes.botones}>
                  Home
                </Button>
              </NavLink>
              <NavLink to="/service">
                <Button size="large" className={classes.botones}>
                  Service details
                </Button>
              </NavLink>
              <NavLink to="/contact">
                <Button size="large" className={classes.botones}>
                  Contact
                </Button>
              </NavLink>
            </Box>
          
          :
            <>
              <IconButton onClick={openDrawerHandler}>
                <MenuIcon />
              </IconButton>
              <Drawer
                open={openDrawer}
                anchor="right"
                className={classes.drawer}
                ModalProps={{ onClose: closeDrawerHandler, container: document.body }}
                PaperProps={{ className: classes.modalpaper }}
              >
                <List>
                  <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <ListItem className={classes.drawerlinks}>
                      <Button startIcon={<HomeIcon />} onClick={closeDrawerHandler}>Home</Button>
                    </ListItem>
                  </NavLink>
                  <NavLink to="/service" style={{ textDecoration: 'none' }}>
                    <ListItem className={classes.drawerlinks}>
                      <Button startIcon={<LibraryBooksIcon />} onClick={closeDrawerHandler}>Service Details</Button>
                    </ListItem>
                  </NavLink>
                  <NavLink to="/contact" style={{ textDecoration: 'none' }}>
                    <ListItem className={classes.drawerlinks}>
                      <Button startIcon={<EmailIcon />} onClick={closeDrawerHandler}>Contact</Button>
                    </ListItem>
                  </NavLink>
                </List>
              </Drawer>
            </>
          }
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
