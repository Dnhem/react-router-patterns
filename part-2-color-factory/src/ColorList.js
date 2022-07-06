import { Link } from "react-router-dom";

const Colors = ({ colors }) => {
  return (
    <div>
      <h5>Please select a color</h5>
      <ul>
        {colors.map(color => (
          <li key={color}>
            <Link to={`/colors/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Colors;
