import {useState, useEffect} from 'react';

const API_KEY = 'f1ea449'
export default function useFetch(inputMovie) {
const [data, setData] = useState([]);

useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
    .then(response =>response.json())
    .then(data => setData(data.Search));
}, [inputMovie]);

return data;
}