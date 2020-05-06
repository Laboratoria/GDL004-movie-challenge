import React from 'react';
import { PlotDetail } from '../Components/UseFetch';

export default function MovieDetail({ match }) {
  const item = PlotDetail(match.params.id);
  return (
    <div>
      <h1>
        {' '}
        Title:
        {item.Title}
        {' '}
        <br />
        Plot:
        {' '}
        {item.Plot}
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
        Awards:
        {' '}
        {item.Awards}
      </h1>
    </div>
  );
}
