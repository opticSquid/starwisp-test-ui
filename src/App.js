import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import DashContent from "./Components/DashContent";
function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/">
            <Header>
              <DashContent />
            </Header>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
