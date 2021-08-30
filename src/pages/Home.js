import React from "react";
import Appbar from "../components/Appbar";
import CategoryMenu from "../components/CategoryMenu";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div>
      <Appbar isLogo={true} color="inherit" />
      <SearchBar />
      <CategoryMenu />
    </div>
  );
}

export default Home;
