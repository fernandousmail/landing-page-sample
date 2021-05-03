import {
  AppBar,
  Box,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    opacity: "0.8",
  },
  logo: {
    flexGrow: "1",
    marginLeft: "5rem",
  },
  botones: {
    margin: theme.spacing(4),
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
          <NavLink to="/">
            {" "}
            <Button
              className={classes.botones}
              variant="contained"
              size="large"
            >
              Home
            </Button>
          </NavLink>
          <NavLink to="/service">
            <Button className={classes.botones} size="large">
              Service details
            </Button>
          </NavLink>
          <NavLink to="/contact">
            <Button className={classes.botones} size="large">
              Contact
            </Button>
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
