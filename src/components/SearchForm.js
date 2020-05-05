import React, {Component} from 'react'

const APY_KEY = 'f1ea449'

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }
    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }
    _handleSubmit = (e) => {
        e.preventDefault()
        const { inputMovie } = this.state;
        
        fetch(`http://www.omdbapi.com/?apikey=${APY_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                console.log(results)
            });
        }

    render(){
        return(
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                        className="input"
                        onChange={this._handleChange} 
                        type="text" 
                        placeholder="Movie to search..."/>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}