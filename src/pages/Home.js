import React from "react";
import Appbar from "../components/Appbar";
import CategoryMenu from "../components/CategoryMenu";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";
import { Divider } from "@material-ui/core";
import ChipRecom from "../components/ChipRecom";

function Home() {
  return (
    <div>
      <Appbar isLogo={true} color="inherit" />
      <SearchBar />
      <CategoryMenu />
      <Banner />
      <Divider style={{ height: "10px", marginBottom: "8px" }} />
      <ChipRecom />
    </div>
  );
}

export default Home;
