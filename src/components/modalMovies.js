import React, { Component } from 'react';
// import { PlotDetail } from './UseFetch';
import MovieDetail from '../Views/MovieDetail';

class Prompt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,

    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div>
          <MovieDetail imdbID={data.imdbID} />
        </div>
      </div>
    );
  }
}

export default Prompt;
