import {
  Button,
  FormControl,
  makeStyles,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import triangulo from '../triangulo.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  imagen: {
    backgroundImage: `url(${triangulo})`,
  backgroundSize: 'cover',
  minHeight: '100vh',
  backgroundRepeat: 'round',
  [theme.breakpoints.down('sm')]: {
    minHeight: '120vh'
  }
  },
  maingrid: {
    marginTop: "9em",
    position: "absolute",
    top: "0%",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "6em",
      position: "absolute",
      top: "0%",
      maxWidth: "100%",
      maxHeight: '100vh'
    },
  },
  subgrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      maxHeight: '100vh'
    },
  },
  hero: {
    textAlign: "right",
    color: "white",
    marginRight: "3rem",
    opacity: "0.9 ",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1),
    },
  },
  subhero: {
    color: "white",
    textAlign: "center",
    justifySelf: "flex-start",
    marginTop: theme.spacing(7),
    [theme.breakpoints.down("sm")]: {
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
}));

const Contacto = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const phonesize = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <div className={classes.imagen} />
      <div className={classes.maingrid}>
        <div className={classes.subgrid}>
          {phonesize && (
            <Typography variant="h4" className={classes.subhero}>
              Get in touch, let's find out the solution that best fits you
            </Typography>
          )}
          <Paper className={classes.paperform}>
            <FormControl className={classes.root} variant="outlined">
              <TextField label="Your name" required />
              <TextField label="Your email" />
              <TextField multiline rows={4} label="Enter your message" />
              <Button startIcon={<EmailIcon />}>Send Message</Button>
            </FormControl>
          </Paper>
          <Typography variant={phonesize ? "h5" : "h2"}>
            Thank you{phonesize && <br />} for{phonesize && <br />} sharing this
           
              experience
          </Typography>
        </div>

        {!phonesize && (
          <Typography variant="h3" className={classes.subhero}>
            Get in touch, let's find out the solution that best fits you
          </Typography>
        )}
      </div>
    </>
  );
};

export default Contacto;
