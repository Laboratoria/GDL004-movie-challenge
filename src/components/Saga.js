import  React  from 'react';
import { Link } from 'react-router-dom';

const Saga = ({ image, title , wordKey, to }) =>{
    return(
        <Link key={wordKey} to= {to}>
       <div className='buttonImage'>
       <footer>
       <img src={image} alt={title}/>
       <p>{title}</p>
       </footer>
         
       </div>
        </Link>

    )
}
export default Saga