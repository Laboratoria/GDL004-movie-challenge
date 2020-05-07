import React from 'react';
import { useHistory } from 'react-router-dom';

export default function SearchForm() {
  const history = useHistory();
  let input = '';

  const handleChange = (e) => {
    input = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/allmovies/${input}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            onChange={handleChange}
            type="text"
            placeholder="Movie to search..."
          />
        </div>
        <div className="control">
          <button
            type="submit"
            className="button is-info"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
