import React from 'react';
import { Link } from 'react-router-dom';

const Saga = ({ image, title, wordKey, to }) =>{
    return(
        <Link key={wordKey} to= {to}>
       <div className='column' >
         <figure >
       <img src={image} alt={title} className="buttonImage"/>
         </figure>
       <p className='titleSaga'>{title}</p> 
       
      
       </div>
        </Link>

    )
}
export default Saga
