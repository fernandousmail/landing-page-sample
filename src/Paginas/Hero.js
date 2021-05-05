import { Button, CssBaseline, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import "./Hero.css"

const useStyles = makeStyles((theme) => ({
  imagen: {
    overflow: "hidden",
    height: "130vh",
    width: "280vh",
    position: "relative",
    transform: "translate(-24rem)",
  },
  texto: {
    color: "white",
  },
  texto2: {
    color: theme.palette.secondary.light,
    marginLeft: "1rem", 
  },
  CallToAction: {
    alignSelf: "flex-start",
    backgroundColor: theme.palette.primary.light,
  },
  
}));

const Hero = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const phonesize = useMediaQuery(theme.breakpoints.down("xs"));



  return (
    <>
    <CssBaseline />
    <div className='imagenhero' />
    
  <div className='heroshowcase' >
    <div className='juegotextohero'>
          <Typography variant="h3" className={classes.texto}>
            Project{phonesize &&<br/>} your brand{phonesize &&<br/>}
          </Typography>
          <Typography variant="h3" className={classes.texto2}>
            identity
          </Typography></div >
        <Typography variant={phonesize? "h6" : "h4"} className={classes.texto}>
          Start developing an elegant website
        </Typography>
        <Button
          size="large"
          variant="contained"
          color="secondary"
          
          className={classes.CallToAction}
        >
          Get Started
        </Button>
          </div>
    </>
  );
};

export default Hero;
