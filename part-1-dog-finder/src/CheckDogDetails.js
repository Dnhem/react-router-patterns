import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

const CheckDogDetails = ({ dogs }) => {
  const { name } = useParams();

  if (name) {
    const currentDog = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogDetails dogs={currentDog} />;
  }
  return null;
};

export default CheckDogDetails;
