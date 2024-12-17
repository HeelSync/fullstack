import LinkButton from "../ui/LinkButton";
import CanvasBG from "../backgrounds/CanvasBG.png";
function Links() {
  return (
    <div className="grid gap-8 p-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <LinkButton
        to="https://connectcarolina.unc.edu"
        background="connect-carolina"
      >
        ConnectCarolina
      </LinkButton>

      <LinkButton to="https://heellife.unc.edu" background="heellife">
        HeelLife
      </LinkButton>

      <LinkButton
        to="https://edtech.unc.edu/service/canvas/"
        background="canvas"
      >
        Canvas
      </LinkButton>

      <LinkButton to="https://www.gradescope.com" background="gradescope">
        Gradescope
      </LinkButton>

      <LinkButton to="https://outlook.office.com/mail/" background="heelmail">
        Outlook
      </LinkButton>

      <LinkButton
        to="https://app.joinhandshake.com/explore"
        background="handshake"
      >
        Handshake
      </LinkButton>

      <LinkButton
        to="https://piazza.com/careers/dashboard#/my_profile"
        background="piazza"
      >
        Piazza
      </LinkButton>

      <LinkButton to="https://catalog.unc.edu" background="catalog">
        Catalog
      </LinkButton>

      <LinkButton to="https://library.unc.edu" background="libraries">
        Libraries
      </LinkButton>

      <LinkButton
        to="https://campusrec.unc.edu/facilities/hours/"
        background="rec"
      >
        Campus Rec. Hours
      </LinkButton>

      <LinkButton to="https://dining.unc.edu/menu-hours/" background="cds">
        Dining Halls
      </LinkButton>

      <LinkButton
        to="https://mycarolina.unc.edu/account/login?r=https%3a%2f%2fmycarolina.unc.edu%2fapply%2fstatus"
        background="my-carolina"
      >
        MyCarolina
      </LinkButton>
    </div>
  );
}

export default Links;
