import React from "react";
import {
  ButtonBase,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { BrokenImage } from "@material-ui/icons";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "8px",
    width: "100%",
    padding: "8px 16px",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.light,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  textDesc: {
    paddingLeft: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "left",
  },
  iconRight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: theme.palette.text.secondary,
  },
}));

function CategoryListItem({ category }) {
  const classes = useStyles();
  return (
    <ButtonBase className={classes.root}>
      <Grid container item>
        <Grid item xs={2}>
          <Paper className={classes.paper} elevation={0}>
            <BrokenImage fontSize="medium" />
          </Paper>
        </Grid>
        <Grid item xs={8} className={classes.textDesc}>
          <Typography variant="body1">{category.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            {category.total_items} Items
          </Typography>
        </Grid>
        <Grid item xs={2} className={classes.textDesc}>
          <ArrowForwardIosIcon className={classes.iconRight} />
        </Grid>
      </Grid>
    </ButtonBase>
  );
}

export default CategoryListItem;
