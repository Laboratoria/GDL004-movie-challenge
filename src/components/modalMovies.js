import React, { Component } from 'react';
import { PlotDetail } from './UseFetch';
import MovieDetail from '../Views/MovieDetail.js';

class Prompt extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data

        };
    }

    render() {
        let {data} = this.state
        return(    
        <div>
            <div>
            Hola
            <MovieDetail imdbID={data.imdbID}/>
            </div>
        </div>
        )
    }
}

  export default Prompt;