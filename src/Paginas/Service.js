import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import circulo from "../circulo.jpeg";
import neonyear from "../2021.jpeg";
import zapas from "../piqsels.com-id-fsfsb2.jpg";
import pantallas from "../pantallas.jpeg";
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({

  mainbox: {
    marginTop: "9em",
    position: "absolute",
    top: "0%",
    minWidth: "100%",
    maxWidth: '100%',
    overflow: "hidden",
  },
  titlebox: {
      maxWidth: '80%',
      opacity: '0.8'
  },
  titulo: {
    color: 'white',
  },
  subtitulo: {
    color: "white",
    marginBottom: "2em",
  },
  grid: {
    maxWidth: "95%",
    margin: "auto",
  },
  gridxs: {
    minWidth: '100%',
    margin: 'auto',
    display: 'flex',
    justifyItems: 'flex-start'
  },
  card: {
    backgroundColor: theme.palette.secondary.light,
    display: "flex",
    flexGrow:'1',
    height: 250,
  },
  cardmedia: {
    height: 250,
    width: 2000,
    maxWidth: "50%",
  },
  cardtitle: {
    marginBottom: "1em",
    color: theme.palette.primary.dark,
  },
  cardxs:{
    marginTop: '2em',
    backgroundColor: theme.palette.secondary.light,
    display: "flex",
    flexGrow:'1',
    height: 220,

  },

  cardmediaxs: {
    height: 250,
    width: 2000,
    maxWidth: "25%"
  }
}));

const CartaCustom = (props) => {
  const classes = useStyles();
  const theme = useTheme()
  const phonesize = useMediaQuery(theme.breakpoints.down("xs")) 
  return (
    <Card className={phonesize? classes.cardxs : classes.card} square>
      <CardMedia image={props.imagen} className={phonesize? classes.cardmediaxs : classes.cardmedia} />
      <CardContent className={classes.cardcontent}>
        <Typography variant="h5" className={classes.cardtitle}>
          {props.titulo}
        </Typography>
        <Typography variant="body1">{props.contenido}</Typography>
      </CardContent>
    </Card>
  );
};

const Service = (props) => {
  const classes = useStyles();
  const theme = useTheme()
  const phonesize = useMediaQuery(theme.breakpoints.down("xs")) 

  return (
    <>
      <div className='imagenservice'/>
      
      <Box className={classes.mainbox}>
          <Box className={classes.titlebox} >
                     <Typography variant={phonesize? "h3":"h2"} className={classes.titulo}>
          Your service/<br/>product details here
        </Typography>
        <Typography variant={phonesize? "h5":"h4"} className={classes.subtitulo}>
          Information to seal the deal
        </Typography>
 
          </Box>
        <Grid container spacing={phonesize? 0:5} className={phonesize? classes.gridxs:classes.grid}>
          <Grid item xs={12} sm={6}>
            <CartaCustom
              titulo="Responsive design"
              contenido="Your design should adapt and transform to look good in different window sizes. Try making your browser window smaller to simulate a phone screen and see what happens!"
              imagen={pantallas}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CartaCustom
              titulo="Optimized implementation"
              contenido="Optimization is key for good UX (User Experience). Did you notice the page didn't reload when you clicked the navigation links? try it!"
              imagen={circulo}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CartaCustom
              titulo="Stay current!"
              contenido="Technologies evolve, providing new tools for developers and new experiences for users. Keeping up is more relevant AND easier than ever."
              imagen={neonyear}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CartaCustom
              titulo="Special wordpress service!"
              contenido="Did you know you can implement a fresh front-end like this one to your own existing Wordpress page? Your same pannel, pages, posts and information on a fresh site!"
              imagen={zapas}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Service;
