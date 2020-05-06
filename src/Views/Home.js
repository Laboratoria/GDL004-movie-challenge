import React from 'react';
import {Link} from 'react-router-dom';
import { SearchForm } from '../Components/SearchForm';
//import DataLoader from '../Components/UseFetch';

const Home =() => {

return(
  <div>
  <h1>LAB MOVIES</h1>
  <SearchForm/>
  <Link key="star" to= {`/allmovies/star`}>StarWars </Link><br>
  </br>
  <Link key="disney" to= {`/allmovies/disney`}>Disney</Link><br>
  </br>
  <Link key="marvel" to= {`/allmovies/marvel`}>Marvel</Link><br>
  </br>
  <Link key="romance" to= {`/allmovies/romance`}>Romance</Link><br>
  </br>
  </div>
)
};
export default Home
 



