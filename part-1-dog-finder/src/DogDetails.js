const DogDetails = ({ dogs }) => {
  return (
    <div>
      <h1>{dogs.name}</h1>
      <img src={dogs.src} alt={dogs.name} />
      <ul>{dogs.facts.map((fact, i) => <li key={i}>{fact}</li>)}</ul>
    </div>
  );
};

export default DogDetails;
