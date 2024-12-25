import { useState, createContext } from "react";
import MainMap from "./StudyAbroadComponents/MainMap.jsx";
import AbroadUserInterface from "./StudyAbroadComponents/AbroadUserInterface.jsx";
import Dropdown from "./StudyAbroadComponents/Dropdown.jsx";
import "./StudyAbroadComponents/abroad.css";
import AbroadContextProvider from "./StudyAbroadComponents/utils/AbroadContextProvider.jsx";
function StudyAbroadPlanner() {
  return (
    <AbroadContextProvider>
      <div className="wrapper">
        <div className="main">
          <div className="ui-container">
            <AbroadUserInterface />
          </div>
          <div className="map-container">
            <MainMap />
            <Dropdown />
          </div>
        </div>
      </div>
    </AbroadContextProvider>
  );
}
export default StudyAbroadPlanner;
