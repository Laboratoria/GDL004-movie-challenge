import React from 'react';
import useFetch from '../Components/UseFetch';

export default function DataLoader({match}) {
    const data = useFetch(match.params.id);
    return (
                <div>
                    <ul>
                        {data.map (el => (
                            <li key={el.imdbID}>{el.Title}</li>
                        ))}
                    </ul>
                </div>
            );
        
}


