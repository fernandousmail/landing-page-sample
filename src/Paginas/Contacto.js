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

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  maingrid: {
    marginTop: "9em",
    position: "absolute",
    top: "0%",
    maxWidth: "100%",
  },
  gridxs: {
    marginTop: "6em",
    position: "absolute",
    top: "0%",
    maxWidth: "100%",
  },
  subgrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
    textAlign: "center",
  },
  subgridxs: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  hero: {
    textAlign: "right",
    color: "white",
    marginRight: "3rem",
    opacity: '0.9 '
  },
heroxs: {
  color: 'white',
  marginTop: theme.spacing(3),
  alignSelf: 'center',
  opacity: '0.9'

},
  subhero: {
    color: "white",
    textAlign: "center",
    justifySelf: 'flex-start',
    marginTop:theme.spacing(7),
  },
  subheroxs: {
    color: 'white',
    marginTop: '0',
    opacity: '0.9'
  },
  paperform: {
    marginLeft: "10em",
    maxWidth: "50%",
    backgroundColor: theme.palette.secondary.light,
    opacity: "0.9",
  },
  paperformxs: {
    maxWidth: "50%",
    backgroundColor: theme.palette.secondary.light,
    opacity: "0.9",
    marginTop: theme.spacing(5)
  }
}));

const Contacto = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const phonesize = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <>
      <div className="imagencontacto" />
      <div className={phonesize ? classes.gridxs : classes.maingrid}>
        <div className={phonesize ? classes.subgridxs : classes.subgrid}>
        {phonesize && <Typography
          variant="h4"
          className={phonesize ? classes.subheroxs : classes.subhero}
        >
          Get in touch, let's find out the solution that best fits you
        </Typography>}
          <Paper
            className={phonesize ? classes.paperformxs : classes.paperform}
          >
            <FormControl className={classes.root} variant="outlined">
              <TextField label="Your name" required />
              <TextField  label="Your email" />
              <TextField multiline rows={4} label="Enter your message" />
              <Button startIcon={<EmailIcon />}>
                Send Message
              </Button>
            </FormControl>
          </Paper>
          <Typography 
            variant={phonesize ? "h4":"h2"}
            className={phonesize? classes.heroxs : classes.hero}
          >
            Thank you{phonesize &&<br/>} for{phonesize &&<br/>} sharing this experience
          </Typography>
        </div>

       {!phonesize && <Typography
          variant="h3"
          className={phonesize ? classes.subheroxs : classes.subhero}
        >
          Get in touch, let's find out the solution that best fits you
        </Typography>}
      </div>
    </>
  );
};

export default Contacto;
