import { Switch, Route, Redirect } from "react-router-dom";
import DogList from "./DogList";

const Routes = ({ dogs }) => {
  return (
    <Switch>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      {/* <Route path="/dogs/:name">
        <DogDetails />
      </Route> */}
      <Redirect to="/dogs" />
    </Switch>
  );
};

export default Routes;
