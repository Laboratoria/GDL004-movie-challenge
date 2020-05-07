import React from 'react';
import { PlotDetail } from '../Components/UseFetch';

export default function MovieDetail({ imdbID }) {
  const item = PlotDetail(imdbID);
  return (
    <div>
      <h1>
        Title:
        {' '} 
        {item.Title}
        {' '}
        <br />
        Runtime: 
        {' '}
        {item.Runtime}
        <br />
        Genre: 
        {' '}
        {item.Genre}
        <br />
        Director: 
        {' '}
        {item.Director}
        <br />
        Actors: 
        {' '}
        {item.Actors}
        <br />
        Plot: 
        {' '}
        {item.Plot}
        <br />
      </h1>
    </div>
  );
}
