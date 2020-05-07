import React from 'react';
//import {Link} from 'react-router-dom';
import Prompt from '../Components/modalMovies';
import { useFetch } from '../Components/UseFetch';
import Popup from "react-popup";

export default function DataLoader({match}) {
    const data = useFetch(match.params.id);
    startPopup()
    return (
                <div>
                    <Popup/>
                    <ul>
                        {data.map ((el, index) => (
                            <li key={index}> 
                            <div onClick={(event) => {showPopOver(el, event)}}>
                            <img src={el.Poster} alt="" />
                            <p>
                              {el.Title}
                            </p>
                            </div>
                            </li>))}
                    </ul>
                </div>
            );
        
}

function startPopup(){
     Popup.registerPlugin('popover', function (data, target) {
        this.create({
            title: 'Info Movie',
            content: <Prompt data={data} />,
            className: 'popover',
            noOverlay: true,
            position: function (box) {
              let bodyRect      = document.body.getBoundingClientRect();
              let btnRect       = target.getBoundingClientRect();
              let btnOffsetTop  = btnRect.top - bodyRect.top;
              let btnOffsetLeft = btnRect.left - bodyRect.left;
              let scroll        = document.documentElement.scrollTop || document.body.scrollTop;
  
              box.style.top  = (btnOffsetTop - box.offsetHeight - 10) - scroll + 'px';
              box.style.left = (btnOffsetLeft + (target.offsetWidth / 2) - (box.offsetWidth / 2)) + 'px';
              box.style.margin = 0;
              box.style.opacity = 1;
          }
        })   
    });
}

function showPopOver(data, event){
    Popup.plugins().popover(data, event.target);
}