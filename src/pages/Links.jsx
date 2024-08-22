import LinkButton from "../ui/LinkButton"
function Links() {
    return (
        <div className="grid grid-cols-3 gap-8 p-8">
            <LinkButton to="https://connectcarolina.unc.edu">ConnectCarolina</LinkButton>
            <LinkButton to="https://edtech.unc.edu/service/canvas/">Canvas</LinkButton>
            <LinkButton to="https://www.gradescope.com">Gradescope</LinkButton>
            <LinkButton to="https://outlook.office.com/mail/">Outlook</LinkButton>
            <LinkButton to="https://app.joinhandshake.com/explore">Handshake</LinkButton>
            <LinkButton to="https://piazza.com/careers/dashboard#/my_profile">Piazza</LinkButton>
            <LinkButton to="https://catalog.unc.edu">Catalog</LinkButton>
            <LinkButton to="https://library.unc.edu">Libraries</LinkButton>
            <LinkButton to="https://campusrec.unc.edu/facilities/hours/">Campus Rec. Hours</LinkButton>
            <LinkButton to="https://dining.unc.edu/menu-hours/">Dining Halls</LinkButton>
        </div>
    )
}

export default Links
