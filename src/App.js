import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import DashContent from "./Components/Dashboard/DashContent";
import MessegeContent from "./Components/Messeges/MessegeContent";
function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Header>
          <Switch>
            <Route path="/messeges">
              <MessegeContent />
            </Route>
            <Route path="/">
              <DashContent />
            </Route>
          </Switch>
        </Header>
      </Router>
    </div>
  );
}

export default App;
