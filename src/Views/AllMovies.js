import React from 'react';
// import {Link} from 'react-router-dom';
import Popup from 'react-popup';
import Prompt from '../Components/modalMovies';
import { useFetch } from '../Components/UseFetch';
import '../Styles/modal.css';

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
        <ul>
          {data.map((el) => (
            <li>
              <div
                tabIndex={0}
                role="button"
                onClick={(event) => { showPopOver(el, event); }}
              >
                <img src={el.Poster} alt="" />
                <p>
                  {el.Title}
                </p>
              </div>
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
