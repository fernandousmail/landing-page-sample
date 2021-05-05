import {
  Button,
  CssBaseline,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import imagenHero from "../piqsels.com-id-fsfsb2.jpg";
import imagenHeroSmall from "../ZAPAS_CROPEADAS.jpg";
import imagenHeroXs from "../ZAPAS_CROPEADAS_XS.jpg"
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  imagenhero: {
    backgroundImage: `url(${imagenHero})`,
    backgroundSize: "cover",
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${imagenHeroSmall})`,
    },
    [theme.breakpoints.down('xs')]: {
      backgroundImage: `url(${imagenHeroXs})`
    },

  },
  maincontainer: {
    position: 'absolute',
    top: '30%',
    left: '55%',
    [theme.breakpoints.down('sm')]:{
      left: '5%',
      top: '50%'
    }
  },
  palabraslayout:{
    display: 'flex',
    [theme.breakpoints.down('sm')]:{
      flexDirection: 'column'
    }
  },

  texto: {
    color: "white",
  },
  texto2: {
    color: theme.palette.secondary.light,
    marginLeft: "1rem",
    [theme.breakpoints.down('md')]: {
      marginLeft: '0'
    }
  },
  CallToAction: {
    alignSelf: "flex-start",
    backgroundColor: theme.palette.primary.light,
  },
}));

const Hero = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const phonesize = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <CssBaseline />
      <div className={classes.imagenhero} />

      <div className={classes.maincontainer}>
        <div className={classes.palabraslayout}>
          <Typography variant="h3" className={classes.texto}>
            Project{phonesize && <br />} your brand{phonesize && <br />}
          </Typography>
          <Typography variant="h3" className={classes.texto2}>
            identity
          </Typography>
        </div>
        <Typography variant={phonesize ? "h6" : "h4"} className={classes.texto}>
          Start developing an elegant website
        </Typography>
        <NavLink to='/contact'><Button
          size="large"
          variant="contained"
          color="secondary"
          className={classes.CallToAction}
        >
          Get Started
        </Button></NavLink>
        
      </div>
    </>
  );
};

export default Hero;
