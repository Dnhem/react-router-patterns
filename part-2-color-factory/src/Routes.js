import { Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import Color from "./Color";
import ColorList from "./ColorList";

const Routes = () => {
  let initialColors = [ "red", "green", "blue" ];
  const [ colors, setColors ] = useState(initialColors);

  return (
    <Switch>
      <Route exact path="/colors">
        <ColorList colors={colors} />
        <div>Heey!</div>
      </Route>
      <Route path="/colors/:color">
        <Color colors={colors} />
        <div>HEEY!</div>
      </Route>
    </Switch>
  );
};

export default Routes;
