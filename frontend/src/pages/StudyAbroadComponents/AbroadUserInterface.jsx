import "./abroad.css";
import PinInfo from "./PinInfo";
import { useContext } from "react";
import { AbroadContext } from "./utils/AbroadContextProvider";
function AbroadUserInterface() {
  const { header } = useContext(AbroadContext);
  return (
    <>
      <h1 className="header">{header} Opportunities</h1>
      <PinInfo />
    </>
  );
}

export default AbroadUserInterface;
