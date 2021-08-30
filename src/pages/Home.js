import React from "react";
import Appbar from "../components/Appbar";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div>
      <Appbar isLogo={true} color="inherit" />
      <SearchBar />
    </div>
  );
}

export default Home;
