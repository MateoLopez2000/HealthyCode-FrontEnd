import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import './SearchBar.css';
export default function SearchBar({ data }) {
  const [formData, setFormData] = useState(initialFormValue());
  const history = useHistory();

  function routeVideoDetail() {
    const data = document.getElementById('inputSearch').value;
    console.log('esta es el data enviado' + data);
    history.push({
      pathname: '/ResultPage',
      state: { videoData: data },
    });
  }

  return (
    <div className="form-box">
      <input
        type="text"
        id="inputSearch"
        className="search-field movies"
        placeholder="What are we looking for?"
      />
      <button
        className="search-btn"
        type="submit"
        onClick={() => routeVideoDetail()}
      >
        Search
      </button>
    </div>
  );
}

function initialFormValue() {
  return {
    name: '',
  };
}
