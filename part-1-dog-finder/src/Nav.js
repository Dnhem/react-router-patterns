import { NavLink } from "react-router-dom";

const Nav = ({ dogs }) => {
  return (
    <nav>
      <NavLink to="/dogs">Home</NavLink>
      {dogs.map(dog => (
        <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
          {dog.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
