import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import './SearchBar.css';
export default function SearchBar({ data }) {
  const [formData, setFormData] = useState(initialFormValue());
  const history = useHistory();

  function routeVideoDetail(videoData) {
    console.log(videoData);
    history.push({
      pathname: '/detailPage',
      state: { videoData: videoData },
    });
  }

  function onSubmit() {
    axios.post('http://localhost:4000/api/movie', formData).then(
      (response) => {
        console.log(response);
        console.log('gg');
        toast.warning(response.message);
        history.push({
          pathname: '/detailPage',
          state: { videoDetail: response },
        });
      },
      (error) => {
        console.log(error.data);
        toast.error('Error del servidor, inténtelo más tarde');
      }
    );
  }

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="form-box">
      <form className="form-signin" onSubmit={onSubmit} onChange={onChange}>
        <input
          type="text"
          className="search-field movies"
          placeholder="What are we looking for?"
          defaultValue={formData.name}
        />
        <button
          className="search-btn"
          type="submit"
          onClick={() => routeVideoDetail(formData.name)}
        >
          Search
        </button>
      </form>
    </div>
  );
}

function initialFormValue() {
  return {
    name: '',
  };
}
