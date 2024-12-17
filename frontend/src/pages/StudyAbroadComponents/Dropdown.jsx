import { useState } from "react";
import ExchangeData from "../StudyAbroadComponents/Abroad_Data/exchangejson.json";
import CheapData from "../StudyAbroadComponents/Abroad_Data/cheapjson.json";
import SummerData from "../StudyAbroadComponents/Abroad_Data/summerjson.json";
import InternshipsData from "../StudyAbroadComponents/Abroad_Data/internshipsjson.json";
import DirectData from "../StudyAbroadComponents/Abroad_Data/directjson.json";
import "./abroad.css";
function Dropdown({ setDataset, setHeader }) {
  const [selectedValue, setSelectedValue] = useState("Exchange");
  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);

    switch (value) {
      case "Exchange":
        setDataset(ExchangeData);
        setHeader("Exchange");
        break;
      case "Less than $15k":
        setDataset(CheapData);
        setHeader("Affordable");
        break;
      case "Summer":
        setDataset(SummerData);
        setHeader("Summer");
        break;
      case "Direct":
        setDataset(DirectData);
        setHeader("Direct");
        break;
      case "Internships":
        setDataset(InternshipsData);
        setHeader("Internship");
        break;
      default:
        setDataset(ExchangeData);
        setHeader("Exchange");
    }
  };
  return (
    <select className="dropdown" value={selectedValue} onChange={handleChange}>
      <option value="Exchange">Exchange</option>
      <option value="Less than $15k">Less than $15k</option>
      <option value="Summer">Summer</option>
      <option value="Direct">Direct Enroll</option>
      <option value="Internships">Internships</option>
    </select>
  );
}

export default Dropdown;
