import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";
import msglowsellershop from "../msglowsellershop.png";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    margin: "auto",
    textAlign: "center",
    maxWidth: "50%",
    maxHeight: "70%",
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Appbar(props) {
  const { isLogo, isBack, isProminent, title, color } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <AppBar position="fixed" color={color}>
          {isLogo === true ? (
            <Toolbar>
              <img
                className={classes.logo}
                src={msglowsellershop}
                alt="msglow-sellershop"
              />
            </Toolbar>
          ) : isProminent === true ? (
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Prominent
              </Typography>
            </Toolbar>
          ) : isBack === true ? (
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="back"
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {title}
              </Typography>
            </Toolbar>
          ) : null}
        </AppBar>
      </ElevationScroll>
    </div>
  );
}

export default Appbar;
