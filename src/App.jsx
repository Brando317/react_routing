import { BrowserRouter, Switch, Route } from "react-router-dom";
import Films from "./films";
import Navbar from "./navbar";
import People from "./people";
import Home from "./home";
import Locations from "./locations";
import Singlefilm from "./singlefilm"


const App = () => {
  return (
  <BrowserRouter>
  <Navbar />
  <Switch>
      <Route exact path="/films">
          <Films />
      </Route>

<Route exact path="/locations" >
<Locations />
</Route>


<Route exact path="/people">
<People />
</Route>

      <Route exact path="/films/:id/" >
<Singlefilm />
</Route>
      
      
      
      <Route exact path="/">
          <Home />
      </Route>
  </Switch>
</BrowserRouter>
)


 
  
  
  
};

export default App;
