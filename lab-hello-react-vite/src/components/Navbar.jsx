import "../Navbar.css"

const Navbar = () => {
  return (
    <nav className={"navbar"}>
      <img
        id="ironhack-logo"
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"
        alt="ironhack-logo"
      />
      <img
        id="nav-img"
        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png"
        alt="menu-image"
    />
    </nav>
  )
}

export default Navbar
