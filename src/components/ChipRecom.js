import { Chip, makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: "8px",
    paddingBottom: "16px",
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
  },
  chipList: {
    marginLeft: "16px",
  },
}));

const menu = [
  "For you",
  "Special discount",
  "Best seller",
  "For men",
  "Beauty",
];

function ChipRecom() {
  const classes = useStyle();
  return (
    <div className={classes.root + " hidescroll"}>
      {menu.map((item, index) => {
        return (
          <Chip
            key={index}
            className={classes.chipList}
            label={item}
            onClick={() => {}}
          />
        );
      })}
    </div>
  );
}

export default ChipRecom;
