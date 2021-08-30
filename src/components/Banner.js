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
    display: "flex",
    flexDirection: "row",
    padding: 0,
    overflowX: "scroll",
    overflow: "hidden",
  },
  listItem: {
    paddingRight: "0px",
  },
  cardList: {
    marginTop: "16px",
    width: "300px",
    margin: 0,
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
              <Card className={classes.cardList}>
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
