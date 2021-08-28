import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import msglowsellershop from "../msglowsellershop.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    height: "25px",
  },
}));

function Appbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <img
            className={classes.logo}
            src={msglowsellershop}
            alt="msglow-sellershop"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Appbar;
