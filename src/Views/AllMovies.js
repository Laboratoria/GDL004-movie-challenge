import React from 'react';
//import {Link} from 'react-router-dom';
import Prompt from '../Components/modalMovies';
import { useFetch } from '../Components/UseFetch';
import Popup from "react-popup";
import '../Styles/modal.css';

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

        })   
    });
}

function showPopOver(data, event){
    Popup.plugins().popover(data, event.target);
}