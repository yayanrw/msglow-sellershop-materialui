import { makeStyles } from "@material-ui/core";
import React from "react";
import Appbar from "../components/Appbar";
import Banner from "../components/Banner";
import CategoryList from "../components/CategoryList";
import SearchBar from "../components/SearchBar";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingBottom: "72px",
  },
  prominent: {
    backgroundColor: theme.palette.primary.main,
  },
}));

function Category() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Appbar isLogo={false} isBack={false} title="Category" color="primary" />
      <div className={classes.prominent}>
        <SearchBar />
        <Banner elevation={3} />
      </div>
      <CategoryList />
    </div>
  );
}

export default Category;
