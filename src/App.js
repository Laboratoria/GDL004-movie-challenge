import React from 'react';
import { SearchForm } from './Components/SearchForm';
import  DataLoader  from './Views/Home';
import AllMovies from './Views/AllMovies';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import 'bulma/css/bulma.css'

function App() {
  return (
    <Router> 
    <div className="App">
      <header className="App-header">
      </header>
      <Switch> 
    <Route path='/' exact component={Home} />
    <Route path='/allmovies' component={AllMovies} />
      </Switch>
    </div>
    </Router>
  );
}
const Home =() => (
  <div>
  <h1>This is WWW (What We Watch) :D</h1>
  <SearchForm/>
  <DataLoader/>
  </div>
);
export default App;
