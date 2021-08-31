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

function ChipRecom() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      {Array(5)
        .fill()
        .map((item, index) => {
          return (
            <Chip
              className={classes.chipList}
              label={"Recommendation " + index}
              onClick={() => {}}
            />
          );
        })}
    </div>
  );
}

export default ChipRecom;
