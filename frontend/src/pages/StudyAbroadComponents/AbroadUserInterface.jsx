import "./abroad.css";
import PinInfo from "./PinInfo";
function UserInterface({
  universityName,
  overview,
  studentExperience,
  image,
  header,
  id,
}) {
  console.log(header);
  return (
    <>
      <h1 className="header">{header} Abroad Opportunities</h1>
      <PinInfo
        universityName={universityName}
        overview={overview}
        studentExperience={studentExperience}
        image={image}
        id={id}
      />
    </>
  );
}

export default UserInterface;
