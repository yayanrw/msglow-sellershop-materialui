import React from "react";
import Appbar from "../components/Appbar";
import CategoryMenu from "../components/CategoryMenu";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";
import { Divider } from "@material-ui/core";
import ChipRecom from "../components/ChipRecom";
import ProductGrid from "../components/ProductGrid";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingBottom: "72px",
  },
}));

function Home() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Appbar isLogo={true} color="inherit" />
      <SearchBar />
      <CategoryMenu />
      <Banner elevation={0} />
      <Divider style={{ height: "10px", marginBottom: "8px" }} />
      <ChipRecom />
      <ProductGrid />
    </div>
  );
}

export default Home;
