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
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: "8px",
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
  title: {
    textDecoration: "bold",
  },
}));

function Banner() {
  const classes = useStyle();
  return (
    <List className={classes.root}>
      {Array(5)
        .fill()
        .map((item, index) => {
          return (
            <ListItem key={index} className={classes.listItem}>
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
            </ListItem>
          );
        })}
    </List>
  );
}

export default Banner;
