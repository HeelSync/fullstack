import { createContext, useState } from "react";
import ExchangeData from "./Abroad_Data/exchangejson.json";
import CheapData from "./Abroad_Data/cheapjson.json";
import SummerData from "./Abroad_Data/summerjson.json";
import DirectData from "./Abroad_Data/directjson.json";

export const AbroadContext = createContext();

function AbroadContextProvider({ children }) {
  const [dataset, setDataset] = useState(ExchangeData);
  const [currentUniversity, setCurrentUniversity] = useState(null);
  const [onOpening, setOnOpening] = useState(true);
  const [header, setHeader] = useState("Exchange");

  function handleCurrentUniversity(universityKey) {
    if (universityKey === null) {
      setCurrentUniversity(null);
    } else {
      const selectedUniversity = dataset.universities.find(
        (uni) => uni.name === universityKey,
      );
      setCurrentUniversity(selectedUniversity);
    }
  }

  return (
    <AbroadContext.Provider
      value={{
        universities: dataset.universities,
        onSelectUniversity: handleCurrentUniversity,
        universityName: currentUniversity
          ? currentUniversity.name
          : "Select a University!",
        city: currentUniversity ? currentUniversity.location.city : "",
        country: currentUniversity ? currentUniversity.location.country : "",
        overview: currentUniversity ? currentUniversity.overview : "",
        image: currentUniversity ? currentUniversity.image : "",
        studentExperience: currentUniversity
          ? currentUniversity.student_experience
          : "",
        header: header,
        id: currentUniversity ? currentUniversity.id : "",
        setDataset: setDataset,
        setHeader: setHeader,
      }}
    >
      {children}
    </AbroadContext.Provider>
  );
}

export default AbroadContextProvider;
