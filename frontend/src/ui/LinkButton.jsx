import { Link, useNavigate } from "react-router-dom";

import "../index.css";

function LinkButton({ children, to, background }) {
  const navigate = useNavigate();
  let bgClass = "default-background";
  switch (background) {
    case "connect-carolina":
      bgClass =
        "bg-connect-carolina-gradient hover:bg-connect-carolina bg-cover transition-bg duration-250 ease-in-out";
      break;
    case "canvas":
      bgClass =
        "bg-canvas-gradient hover:bg-canvas bg-cover transition-bg duration-250 ease-in-out";
      break;
    case "catalog":
      bgClass =
        "bg-catalog-gradient hover:bg-catalog bg-cover transition-bg duration-250 ease-in-out";
      break;
    case "gradescope":
      bgClass =
        "bg-gradescope-gradient hover:bg-gradescope bg-cover transition-bg duration-250 ease-in-out";
      break;
    case "heelmail":
      bgClass =
        "bg-heelmail-gradient hover:bg-heelmail bg-cover transition-bg duration-250 ease-in-out";
      break;
    case "handshake":
      bgClass =
        "bg-handshake-gradient hover:bg-handshake bg-cover transition-bg duration-250 ease-in-out";
      break;
    case "cds":
      bgClass =
        "bg-cds-gradient hover:bg-cds bg-cover transition-bg duration-250 ease-in-out";
      break;
    case "piazza":
      bgClass =
        "bg-piazza-gradient hover:bg-piazza bg-cover transition-bg duration-250 ease-in-out";
      break;
    case "libraries":
      bgClass =
        "bg-libraries-gradient hover:bg-libraries bg-cover transition-bg duration-250 ease-in-out";
      break;
    case "rec":
      bgClass =
        "bg-rec-gradient hover:bg-rec bg-cover transition-bg duration-250 ease-in-out";
      break;
    case "heellife":
      bgClass =
        "bg-heellife-gradient hover:bg-heellife bg-cover transition-bg duration-250 ease-in-out";
      break;
    case "my-carolina":
      bgClass =
        "bg-my-carolina-gradient hover:bg-my-carolina bg-cover transition-bg duration-250 ease-in-out";
      break;
  }
  if (to === "-1")
    return (
      <button
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
        onClick={() => navigate(-1)}
      >
        {children}
      </button>
    );
  return (
    <Link
      target="_blank"
      to={to}
      className={`duration-250 relative rounded-md border-2 border-solid border-carolina-blue py-20 text-center text-2xl font-normal text-better-white shadow-sm transition-all ease-in-out hover:text-transparent hover:shadow-none ${bgClass}`}
    >
      <span
        data-text={children}
        className="link-animated relative z-10 inline-block"
      >
        {children}
      </span>
    </Link>
  );
}

export default LinkButton;
