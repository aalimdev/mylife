import React from "react";
import Drive from "./CategoryItem/Drive/Drive";
import Filter from "./CategoryItem/Filter/Filter";
import Gmail from "./CategoryItem/Gmail/Gmail";
import Learning from "./CategoryItem/Learning/Learning";
import Perform from "./CategoryItem/Perform/Perform";
import Quotes from "./CategoryItem/Quotes/Quotes";
import Tasks from "./CategoryItem/Tasks/Tasks";
import Projects from "./CategoryItem/Projects/Projects";
import Header from "./CategoryItem/Header/Header";
import "./categories.css";

function Categories() {
  return (
    <div className="categories">
      <div className="category__header">
        <Header />
      </div>
      <div className="category">
        <Projects />
      </div>
      <div className="category">
        <Learning />
      </div>
      <div className="category">
        <Tasks />{" "}
      </div>
      <div className="category">
        <Perform />
      </div>
      <div className="category">
        <Quotes />
      </div>
      <div className="category">
        <Gmail />
      </div>
      <div className="category">
        <Drive />
      </div>
      <div className="category">
        <Filter />
      </div>
    </div>
  );
}

export default Categories;
