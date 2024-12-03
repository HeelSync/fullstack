import "./abroad.css";
import uncImage from "./unc_image.jpeg";

function PinInfo({ universityName, overview, studentExperience, image, id }) {
  console.log(overview);
  return (
    <div className="all-text">
      <h2 className="p-header">{universityName}</h2>
      <div className="image-container">
        <img className="university-image" src={image ? image : uncImage} />
      </div>

      <p className="p-description">
        {overview
          ? overview
          : "UNC–Chapel Hill’s study abroad programs are high-quality, credit-bearing academic experiences available at hundreds of locations worldwide to students in all academic programs, majors, and minors. Carolina strives to ensure that study abroad programs are accessible, affordable, and safe. A wide range of study abroad options meet the academic needs, financial realities, schedules, and language abilities of Carolina students. Programs include undergraduate student exchanges, faculty-led, direct enroll, and short-term immersion programs during the summer, semester, and academic year. Financial aid can be used toward study abroad program costs. Over $1 million in study abroad scholarships are rewarded annually."}
      </p>

      <p className="p-details">{studentExperience}</p>

      <a
        href={
          id
            ? `https://heelsabroad.unc.edu/_portal/tds-program-brochure?programid=${id}`
            : "https://heelsabroad.unc.edu/_portal/"
        }
        target="_blank"
        rel="noopener noreferrer"
        className="university-link"
      >
        Explore More
      </a>
    </div>
  );
}

export default PinInfo;
