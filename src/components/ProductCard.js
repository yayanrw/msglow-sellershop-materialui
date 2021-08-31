import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

function ProductCard({ products }) {
  const classes = useStyles();

  return (
    <Grid item xs={6}>
      <Card className={classes.root} elevation={3}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={products.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography variant="body1">Rp.{products.price}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {products.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default ProductCard;
