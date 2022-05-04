import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <nav className="Navbar">
      <div id="nutriverse">
        <h1>
          <img
            id="nutriverse-logo"
            src={process.env.PUBLIC_URL + "/images/nutri-verse-logo.png"}
            alt="Nutriverse Logo"
          />
          <span id="nutri">nutri</span>
          <span id="verse">verse.</span>
        </h1>
      </div>
      <div id="nav-links">
        <div id="home">
          <h2>Home</h2>
        </div>
        <h2 className="pipe"> | </h2>
        <div id="recipes">
          <h2>Recipes</h2>
        </div>
        <h2 className="pipe"> | </h2>
        <div id="popular">
          <h2>Popular</h2>
        </div>
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
      <h2 id="sign-up">Sign up</h2>
    </button>
  );
};

export default Navbar;
