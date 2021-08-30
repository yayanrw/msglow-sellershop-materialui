import React from "react";
import Appbar from "../components/Appbar";
import CategoryMenu from "../components/CategoryMenu";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";

function Home() {
  return (
    <div>
      <Appbar isLogo={true} color="inherit" />
      <SearchBar />
      <CategoryMenu />
      <Banner />
    </div>
  );
}

export default Home;
