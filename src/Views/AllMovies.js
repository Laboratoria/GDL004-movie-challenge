import React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../Components/UseFetch';
import PopUpTest from '../Components/modalMovies';

export default function DataLoader({ match }) {
  const data = useFetch(match.params.id);
  return (
    <div>
      <ul>
        {data.map((el) => (
          <li>
            <Link key={el.imdbID} to={`/moviedetail/${el.imdbID}`}>
              <img src={el.Poster} alt="" />
              <li>
                {el.Title}
              </li>
            </Link>
            <PopUpTest />
          </li>
        ))}
      </ul>
    </div>
  );
}

