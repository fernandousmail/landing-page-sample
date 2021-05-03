import {
  Box,
  FormControl,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import triangulo from "../triangulo.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  imagen: {
    height: "120vh",
    width: "210vh",
  },
  maingrid: {
    marginTop: "9em",
    position: "absolute",
    top: "0%",
    maxWidth: '100%'
  },
  subgrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign:'center'
  },
  hero: {
      textAlign: 'right',
      color:'white',
      marginRight: '3rem',
  },
  paperform: {
    maxWidth: "50%",
    backgroundColor: theme.palette.secondary.light,
    opacity: "0.9",
  },
}));

const Contacto = (props) => {
  const classes = useStyles();
  return (
    <>
      <Box overflow="hidden" display="block">
        <img
          src={triangulo}
          alt="un triangulo violeta"
          className={classes.imagen}
        />
      </Box>
      <Grid container className={classes.maingrid} spacing={9}>
        <Grid item xs={12} sm={6} className={classes.subgrid} >
          <Paper className={classes.paperform}>
            <FormControl
              className={classes.root}
              variant="outlined"
              size="large"
            >
              <TextField label="Your name" required />
              <TextField label="Your email" />
              <TextField>Textfield</TextField>
              <TextField>Textfield</TextField>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.subgrid2}>
          <Typography variant="h2" className={classes.hero}>
            Thank you for sharing this experience
          </Typography>
        </Grid>
        <Grid item sm={12} className={classes.subgrid} >
          <Typography variant="h4" >
            Get in touch, let's find out the solution that best fits you
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Contacto;
