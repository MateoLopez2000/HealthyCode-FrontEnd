import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import './SearchBar.css';
export default function SearchBar(props) {
  const [formData, setFormData] = useState(initialFormValue());
  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/api/findmovie', formData).then(
      (response) => {
        console.log(response);
        console.log('gg');
        toast.warning(response.message);
        <Link
          to={{
            pathname: '/ResultPage',
            state: response,
          }}
        >
          ResultPage
        </Link>;
      },
      (error) => {
        console.log(error.data);
        toast.error('Error del servidor, inténtelo más tarde');
      }
    );
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div class="form-box">
      <form class="form-signin" onSubmit={onSubmit} onChange={onChange}>
        <input
          type="text"
          class="search-field movies"
          placeholder="What are we looking for?"
          defaultValue={formData.name}
        />
        <button class="search-btn" type="submit">
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
