import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Welcome to the Color Factory</h1>
      <NavLink exact to="/colors/new">
        Add a color
      </NavLink>
    </nav>
  );
};

export default Navbar;
