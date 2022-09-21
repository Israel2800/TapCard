import React from "react";
import CardList from "../components/CardList";
import MajorMenu from "../components/MajorMenu";

const Home = () => {
  return (
    <div className="container">
      <MajorMenu />
      <CardList />
    </div>
  );
};

export default Home;
