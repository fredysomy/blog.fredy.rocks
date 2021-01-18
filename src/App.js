import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./blog/Blog";
import Blogview from "./blog/Blogview";
import Header from "./blog/Header";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Blog />
          </Route>
          <Route exact path="/:id">
            <Blogview />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
