import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bulma/css/bulma.css';
/* THIS IS THE VIEWS IMPORTS*/
import AllMovies from './Views/AllMovies';
import Home from './Views/Home';

function App() {
  return (
    <Router> 
    <div className="App">
      <header className="App-header">
      </header>
      <Switch> 
    <Route exact path='/' component={Home} />
    <Route path='/allmovies/:id' component={AllMovies} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
