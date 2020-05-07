import React from 'react';
import Popup from "reactjs-popup";

const PopUpTest = () => (
    <Popup trigger={<button> Trigger</button>} position="right center">
      <div>
        
        <br/>
        Esta es una prueba de PopUp
        <br/>
        aqui deberia ir la info de las peliculas
      </div>
    </Popup>
  );
  
  export default PopUpTest;