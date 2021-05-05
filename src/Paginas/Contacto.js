import {
  Button,
  FormControl,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import triangulo from "../triangulo.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  imagen: {
    backgroundImage: `url(${triangulo})`,
    backgroundSize: "cover",
    position:'relative',
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      minHeight: "120vh",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "155vh",
      maxWidth: '100%'
    },
  },
  maingrid: {
    marginTop: "5em",
    position: "absolute",
    top: "0%",
    minWidth: "100vw",
    [theme.breakpoints.down("sm")]: {
      marginTop: "6em",
    },
  },
  subgrid: {
    marginTop: theme.spacing(5),
    display: "flex",
    alignItems: "space-around",
    justifyContent: "space-around",
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  titulo: {
    color: "white",
    textAlign: "center",
    justifySelf: "flex-start",
    marginTop: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(10),
    },
    [theme.breakpoints.down("sm")]: {
      justifySelf: "center",
      marginLeft: theme.spacing(0),
      color: "white",
      marginTop: "0",
      opacity: "0.9",
    },
  },
  paperform: {
    marginLeft: "10em",
    maxWidth: "50%",
    backgroundColor: theme.palette.secondary.light,
    opacity: "0.9",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "65%",
      backgroundColor: theme.palette.secondary.light,
      opacity: "0.9",
      marginTop: theme.spacing(5),
      margin: "auto",
    },
  },
  infocard: {
    backgroundColor: theme.palette.secondary.light,
    width: theme.spacing(100),
    opacity: "0.9",
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(65),
      marginTop: theme.spacing(4),
      margin: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: theme.spacing(40),
    },
  },
  cardtitle: {
    color: theme.palette.primary.main,
  },
  cardtext: {
    color: "white",
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  },
}));

const Contacto = (props) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.imagen} />
      <div className={classes.maingrid}>
        <Typography variant="h4" className={classes.titulo}>
          Get in touch, let's find out the solution that best fits you
        </Typography>

        <div className={classes.subgrid}>
          <Paper className={classes.paperform}>
            <FormControl className={classes.root} variant="outlined">
              <TextField label="Your name" required />
              <TextField label="Your email" />
              <TextField multiline rows={4} label="Enter your message" />
              <Button startIcon={<EmailIcon />}>Send Message</Button>
            </FormControl>
          </Paper>
          <Paper className={classes.infocard}>
            <Typography className={classes.cardtitle} variant="h3">
              Thank you for sharing this experience
            </Typography>
            <Typography className={classes.cardtext} variant="h6">
              Benefits of having your front-end interface separate from your
              Wordpress setup (Wordpress Headless Setup):
              <br />- Cheaper to host and build
              <br />- Blazing fast performance
              <br />- No updates required
              <br />- You can always switch back to a wordpress template
              generated site, althogh why would you!
            </Typography>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default Contacto;
