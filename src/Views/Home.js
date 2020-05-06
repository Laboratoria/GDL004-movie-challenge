import React from 'react';
import {Link} from 'react-router-dom';
import { SearchForm } from '../Components/SearchForm';
//import DataLoader from '../Components/UseFetch';

const Home =() => {

return(
  <div>
  <h1>LAB MOVIES</h1>
  <SearchForm/>
  <Link to= {`/AllMovies/`}>StarWars </Link>
  </div>
)
}
export default Home

