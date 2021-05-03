import {
  AppBar,
  Box,
  Button,
  Link,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

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
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="fixed">
      <Toolbar>
        <Typography className={classes.logo} variant="h4">
          YourLogo
        </Typography>
        <Box display="flex" marginRight="5rem">
          <NavLink to="/" activeClassName={classes.active}>
            {" "}
            <Link>
              <Button size="large" className={classes.botones}>
                Home
              </Button>
            </Link>
          </NavLink>
          <NavLink to="/service">
            <Link>
              <Button size="large" className={classes.botones}>
                Service details
              </Button>
            </Link>
          </NavLink>
          <NavLink to="/contact">
            <Link>
              <Button size="large" className={classes.botones}>
                Contact
              </Button>
            </Link>
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
