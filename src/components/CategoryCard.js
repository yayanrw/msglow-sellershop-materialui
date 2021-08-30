import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { BrokenImage } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "16px",
  },
  paper: {
    padding: theme.spacing(1),
    paddingTop: "20px",
    paddingBottom: "20px",
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.light,
  },
  categoryTitle: {
    textDecoration: "none",
    color: theme.palette.text.secondary,
  },
}));

function CategoryCard(props) {
  const classes = useStyles();
  const { category } = props;

  return (
    <Grid
      item
      xs={4}
      component={Link}
      to={category.link}
      className={classes.categoryTitle}
    >
      <Paper className={classes.paper} elevation={0}>
        <BrokenImage />
        <Typography variant="subtitle2" className={classes.title}>
          {category.name}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default CategoryCard;
