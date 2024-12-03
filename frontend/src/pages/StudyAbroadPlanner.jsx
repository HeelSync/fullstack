import MainMap from "./StudyAbroadComponents/MainMap.jsx";
import UserInterface from "./StudyAbroadComponents/UserInterface.jsx";
import { useState } from "react";
import ExchangeData from "./StudyAbroadComponents/utils/exchangejson.json";
import CheapData from "./StudyAbroadComponents/utils/cheapjson.json";
import SummerData from "./StudyAbroadComponents/utils/summerjson.json";
import DirectData from "./StudyAbroadComponents/utils/directjson.json";
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
          <UserInterface
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
