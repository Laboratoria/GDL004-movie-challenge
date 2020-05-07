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
                            <div onClick={() => {showPopOver(el)}}>
                              
                            </div>
                            </li>))}
                    </ul>
                </div>
            );
        
}

function startPopup(){
     Popup.registerPlugin('popover', function (data) {
        this.create({
            title: 'Info Movie',
            content: <Prompt data={data} />,
            className: 'popover',
            noOverlay: true,
            position: function (box) {
                box.style.margin = 0;
                box.style.opacity = 1;
            }
        })   
    });
}

function showPopOver(data){
  console.log(data);
    Popup.plugins().popover(data);
}