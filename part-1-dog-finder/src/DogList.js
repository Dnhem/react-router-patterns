import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
  return (
    <div>
      <h3>Check out our dogs</h3>
      {dogs.map(dog => (
        <div key={dog.name}>
          <img src={dog.src} alt={dog.name} />
          <Link exact to={`/dogs/${dog.name.toLowerCase()}`}>
            {dog.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DogList;
