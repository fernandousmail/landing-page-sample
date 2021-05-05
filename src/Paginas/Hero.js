import {
  Button,
  CssBaseline,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import "./Hero.css";
import imagenHero from "../piqsels.com-id-fsfsb2.jpg";
import imagenHeroSmall from "../ZAPAS_CROPEADAS.jpg";
const useStyles = makeStyles((theme) => ({
  imagenhero: {
    backgroundImage: `url(${imagenHero})`,
    backgroundSize: "cover",
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${imagenHeroSmall})`,
    },

  },
  maincontainer: {
    
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
      <div className={classes.imagenhero} />

      <div className={classes.maincontainer}>
        <div className="juegotextohero">
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
