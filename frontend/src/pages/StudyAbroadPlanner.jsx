import { useState } from "react";
import MainMap from "./StudyAbroadComponents/MainMap.jsx";
import AbroadUserInterface from "./StudyAbroadComponents/AbroadUserInterface.jsx";
import ExchangeData from "./StudyAbroadComponents/Abroad_Data/exchangejson.json";
import CheapData from "./StudyAbroadComponents/Abroad_Data/cheapjson.json";
import SummerData from "./StudyAbroadComponents/Abroad_Data/summerjson.json";
import DirectData from "./StudyAbroadComponents/Abroad_Data/directjson.json";
import Dropdown from "./StudyAbroadComponents/Dropdown.jsx";
import "./StudyAbroadComponents/abroad.css";
function StudyAbroadPlanner() {
  const [dataset, setDataset] = useState(ExchangeData);
  const [currentUniversity, setCurrentUniversity] = useState(null);
  const [onOpening, setOnOpening] = useState(true);
  const [header, setHeader] = useState("Exchange");

  const handleCurrentUniversity = (universityKey) => {
    if (universityKey === null) {
      setCurrentUniversity(null);
    } else {
      const selectedUniversity = dataset.universities.find(
        (uni) => uni.name === universityKey,
      );
      setCurrentUniversity(selectedUniversity);
    }
  };
  return (
    <div className="wrapper">
      <div className="main">
        <div className="ui-container">
          <AbroadUserInterface
            universityName={
              currentUniversity
                ? currentUniversity.name
                : "Select a University!"
            }
            city={currentUniversity ? currentUniversity.location.city : ""}
            country={
              currentUniversity ? currentUniversity.location.country : ""
            }
            overview={currentUniversity ? currentUniversity.overview : ""}
            image={currentUniversity ? currentUniversity.image : ""}
            studentExperience={
              currentUniversity ? currentUniversity.student_experience : ""
            }
            header={header}
            id={currentUniversity ? currentUniversity.id : ""}
          />
        </div>
        <div className="map-container">
          <MainMap
            universities={dataset.universities}
            onSelectUniversity={handleCurrentUniversity}
          />
          <Dropdown setDataset={setDataset} setHeader={setHeader} />
        </div>
      </div>
    </div>
  );
}

export default StudyAbroadPlanner;
