import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Blog from './blog/Blog';
import Blogview from './blog/Blogview';
function App() {
  return(
       <Router>
      <div className="App">
     
          <Switch>
              <Route exact path="/">
                  <Blog></Blog>
                  </Route>
               <Route exact path="/:id" component={Blogview} />
          </Switch>
      </div>
    </Router>
  )
}

export default App;
