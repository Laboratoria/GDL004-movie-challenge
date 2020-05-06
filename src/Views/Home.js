import React from 'react';
import { Link } from 'react-router-dom';
import { SearchForm } from '../Components/SearchForm';
import Avengers from '../Styles/Images/Avengers.png';
import HarryPotter from '../Styles/Images/HarryPotter.png';
import Disney from '../Styles/Images/Disney.png';
import StarWars from '../Styles/Images/StarWars.png';
import LordoftheRings from '../Styles/Images/LordOfTheRings.png';
import Chucky from '../Styles/Images/Chucky.png';
//import DataLoader from '../Components/UseFetch';
import Saga from './../Components/Saga';

const Home = () => (
  <div>
  <h1>LAB MOVIES</h1>
  <SearchForm/>
  <Saga wordKey="star" to="/allmovies/star" image={StarWars} title='Star Wars'/>
  
  <Saga image={Disney} title='Disney' wordKey="disney" to= {`/allmovies/disney`}/>

  <Link key="marvel" to= {`/allmovies/marvel`}> 
  </Link>

  <Saga image={Avengers} title='Avengers' wordKey="avengers" to= {`/allmovies/avengers`}/>

  <Saga image={Chucky} title='Chucky' wordKey="chucky" to= {`/allmovies/chucky`}/>

 <Saga image={HarryPotter} title='Harry Potter' wordKey="harry" to= {`/allmovies/harry`}/>
 
  <Saga image={LordoftheRings} wordkey='lord'/>
  </div>
)

export default Home
