import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import circulo from "../circulo.jpeg";
import neonyear from "../2021.jpeg";
import zapas from "../piqsels.com-id-fsfsb2.jpg";
import pantallas from "../pantallas.jpeg";

const useStyles = makeStyles((theme) => ({
  mainbox: {
    marginTop: "9em",
    position: "absolute",
    top: "0%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  titlebox: {
      backgroundColor:theme.palette.secondary.light,
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
  card: {
    backgroundColor: theme.palette.secondary.light,
    display: "flex",
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
  imagen: {
    overflow: "hidden",
    width: "240vh",
    transform: "translate(-9rem. -1rem)",
  },
}));

const CartaCustom = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} square>
      <CardMedia image={props.imagen} className={classes.cardmedia} />
      <CardContent className={classes.cardcontent}>
        <Typography variant="h5" className={classes.cardtitle}>
          {props.titulo}
        </Typography>{" "}
        <Typography variant="body1">{props.contenido}</Typography>
      </CardContent>
    </Card>
  );
};

const Service = (props) => {
  const classes = useStyles();
  return (
    <>
      <Box
        maxWidth="100%"
        display="block"
        overflow="hidden"
        justify="center"
        align="center"
        zIndex="0"
      >
        <img
          className={classes.imagen}
          src={circulo}
          alt="un circulo violeta"
        />
      </Box>
      <Box className={classes.mainbox}>
          <Box className={classes.titlebox}>
                     <Typography variant="h2" className={classes.titulo}>
          Your service/product details here
        </Typography>
        <Typography variant="h4" className={classes.subtitulo}>
          Information to seal the deal
        </Typography>
 
          </Box>
        <Grid container spacing={5} className={classes.grid}>
          <Grid item xs={12} sm={6}>
            <CartaCustom
              titulo="Responsive design"
              contenido="Your design should adapt and transform to look good in different window sizes. With the advent of mobile devices of all sizes, there's no one size fits all."
              imagen={pantallas}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CartaCustom
              titulo="Optimized implementation"
              contenido="Optimization is key for good UX (User Experience). Action should flow smoothly to give a nice feeling of communication to your custommers."
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
