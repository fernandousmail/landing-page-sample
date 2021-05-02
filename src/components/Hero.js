import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import zapas from "../piqsels.com-id-fsfsb2.jpg";

const useStyles = makeStyles((theme) => ({
  imagen: {
      overflow: 'hidden',
      height: '130vh',
      width: '280vh',
      position: 'relative',
    transform: 'translate(-24rem)',
  },
  texto: {
    color: "white",
  },
  texto2: {
    color: theme.palette.primary.main,
    marginLeft: '1rem'
  },
  CallToAction: {
    alignSelf: "flex-start",
    flexGrow: "1",
    backgroundColor: theme.palette.primary.main,
  },
}));

const Hero = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box maxWidth='100%' overflow='hidden'>
        <img
          src={zapas}
          className={classes.imagen}
          alt="imagen de zapatillas luminosas"
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        position="absolute"
        top="30%"
        left="50%"
      >
        <Box display="flex" >
          <Typography variant="h3" className={classes.texto}>
            Project your brand
          </Typography>
          <Typography variant="h3" className={classes.texto2}>
            identity
          </Typography>
        </Box>
        <Typography variant="h4" className={classes.texto}>
          Start developing an elegant website
        </Typography>
        <Button
          size="large"
          variant="contained"
          color="primary"
          className={classes.CallToAction}
        >
          Get Started
        </Button>
      </Box>
    </>
  );
};

export default Hero;
