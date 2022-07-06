import { useParams } from "react-router-dom";

const Color = ({ colors }) => {
  const { color } = useParams();
  console.log(color);
  return (
    <div>
      <h1>{color} is beautiful.</h1>
    </div>
  );
};

export default Color;
