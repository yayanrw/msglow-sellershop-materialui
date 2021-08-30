import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, useScrollTrigger } from "@material-ui/core";
import msglowsellershop from "../msglowsellershop.png";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function Appbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <AppBar position="fixed" color="inherit">
          <Toolbar variant="dense">
            <img
              className={classes.logo}
              src={msglowsellershop}
              alt="msglow-sellershop"
            />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}

export default Appbar;
