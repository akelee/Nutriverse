import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <nav className="Navbar">
      <div id="nutriverse">
        <h1>
          <img
            id="nutriverse-logo"
            src={process.env.PUBLIC_URL + "/images/nutri-verse-logo.png"}
          />
          <span id="nutri">nutri</span>
          <span id="verse">verse.</span>
        </h1>
      </div>
      <div id="nav-links">
        <h2 id="home">home</h2> <h2>|</h2> <h2 id="recipes">recipes</h2>{" "}
        <h2>|</h2> <h2 id="popular">popular</h2>
      </div>
      <div>
        <Button />
      </div>
    </nav>
  );
};

export const Button = () => {
  return (
    <button id="sign-up-button">
      <h2 id="sign-up">sign-up</h2>
    </button>
  );
};

export default Navbar;
