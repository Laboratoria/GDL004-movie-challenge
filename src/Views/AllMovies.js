import React from 'react';
// import {Link} from 'react-router-dom';
import Popup from 'react-popup';
import Prompt from '../Components/modalMovies';
import { useFetch } from '../Components/UseFetch';
import '../Styles/modal.css';
import '../Styles/Allmovies.css';

function startPopup() {
  Popup.registerPlugin('popover', function (data) {
    this.create({
      title: 'Info Movie',
      content: <Prompt data={data} />,
      className: 'popover',
      noOverlay: true,

    });
  });
}

function showPopOver(data, event) {
  Popup.plugins().popover(data, event.target);
}

export default function DataLoader({ match }) {
  const data = useFetch(match.params.id);
  startPopup();
  if (data !== undefined) {
    return (
      <div>
        <Popup />
        <div className='columns is-multiline is-2'>
                        {data.map ((el, index) => (
                            <section key={index}> 
                            <div className='movieSection' onClick={(event) => {showPopOver(el, event)}}>
                            <figure>
                            <div className='column'>
                            
                            <img src={el.Poster} alt="" />
                            </div>
                            <figcaption className='titleMovie'>
                              {el.Title}
                            </figcaption>
                            </figure>
                           
                            </div>
                            </section>))}
                    </div>
      </div>
    );
  }
  return (
    <div>
      <h1> Ups¡ We couldnt find any movie that matches your search.</h1>
    </div>
  );
}
