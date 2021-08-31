import React from "react";
import Appbar from "../components/Appbar";
import CategoryMenu from "../components/CategoryMenu";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";
import { Chip, Paper } from "@material-ui/core";
import ChipRecom from "../components/ChipRecom";

function Home() {
  return (
    <div>
      <Appbar isLogo={true} color="inherit" />
      <SearchBar />
      <CategoryMenu />
      <Banner />
      <ChipRecom />
    </div>
  );
}

export default Home;
