import {
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React, { useEffect, useState } from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: "16px",
    paddingBottom: "16px",
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
  },
  listItem: {
    padding: 0,
    paddingLeft: "16px",
  },
  cardList: {
    width: "300px",
    margin: 0,
    padding: 0,
    backgroundColor: theme.palette.primary.light,
  },
  skeletonList: {
    width: "300px",
    margin: 0,
    padding: 0,
  },
  title: {
    textDecoration: "bold",
  },
}));

function Banner() {
  const classes = useStyle();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <List className={classes.root + " hidescroll"}>
      {Array(5)
        .fill()
        .map((item, index) => {
          return (
            <ListItem key={index} className={classes.listItem}>
              {loading ? (
                <Card className={classes.skeletonList} elevation={0}>
                  <Skeleton variant="rect" height={150} animation="wave" />
                </Card>
              ) : (
                <Card className={classes.cardList} elevation={0}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Great offers just started now
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Get now</Button>
                  </CardActions>
                </Card>
              )}
            </ListItem>
          );
        })}
    </List>
  );
}

export default Banner;
