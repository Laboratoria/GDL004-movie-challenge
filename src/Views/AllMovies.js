import React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../Components/UseFetch';

export default function DataLoader({ match }) {
  const data = useFetch(match.params.id);
  if (data !== undefined) {
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
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div>
      <h1> Ups¡ We couldnt find any movie that matches your search.</h1>
    </div>
  );
}
