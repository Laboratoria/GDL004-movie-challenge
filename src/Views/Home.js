
import React from 'react';
import {Link} from 'react-router-dom';
// import useFetch from '../Components/UseFetch';


export default function SearchResult(){
  return (
      <div>
           <Link to= {`/AllMovies/`}>StarWars
          </Link>

      </div>
  )
}
// export default function DataLoader(props) {
//     const data = useFetch('star');
//     return (
//                 <div>
//                     <ul>
//                         {data.map (el => (
//                             <li key={el.imdbID}>{el.Title} </li>
//                         ))}
//                     </ul>
//                 </div>
//             );
        
// }


