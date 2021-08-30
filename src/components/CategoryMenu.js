import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ApiUrl from "../config/AppConfig";
import CategoryCard from "./CategoryCard";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "16px",
  },
}));

function CategoryMenu() {
  const classes = useStyles();
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      async function getCategory() {
        let response = await fetch(`${ApiUrl}/category`);
        response = await response.json();
        setCategory(response);
        setLoading(false);
      }
      getCategory();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container className={classes.root}>
      <Grid container spacing={1}>
        {loading
          ? Array(6)
              .fill()
              .map((item, index) => {
                return (
                  <Grid key={index} item xs={4}>
                    <Paper elevation={0}>
                      <Skeleton variant="rect" height={80} animation="wave" />
                    </Paper>
                  </Grid>
                );
              })
          : category.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
      </Grid>
    </Container>
  );
}

export default CategoryMenu;
