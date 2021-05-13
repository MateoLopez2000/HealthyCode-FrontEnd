import './ResultPage.css';
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar1/SearchBarFilter';
import Header from '../components/Header';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import FooterLinks from '../components/FooterLinks/FooterLinks';
import MovieLabel from '../components/MovieLabel/MovieLabel';
import { API_HOST } from '../utils/constant';

function ResultPage() {
  const url = `${API_HOST}/api/movie `;
  const location = useLocation();
  const [videoData, setVideo] = useState();

  useEffect(() => {
    const data = location.state ? location.state.videoData : {};
    setVideo(data);
    console.log('1er video data ' + videoData);
    axios.post(url, videoData).then(
      (response) => {
        console.log('este es tu response ' + response);
        toast.warning(response.message);
      },
      (error) => {
        console.log(error.data);
        toast.error('Error del servidor, inténtelo más tarde');
      }
    );
    console.log('esta es tu data ' + data.name);
  }, [location, url, videoData]);

  return (
    <body>
      <Header></Header>--
      <div className="wrapper">
        <section className="main-container">
          <div className="location" id="home">
            <h1 id="home">Popular on HealthyCode</h1>
            <SearchBar></SearchBar>
          </div>
        </section>
        <FooterLinks></FooterLinks>
        <Footer></Footer>
      </div>
    </body>
  );
}

/* function getMovieList(MovieList) {
  return MovieList.map((movie) => {
    return <MovieLabel movie={movie}></MovieLabel>;
  });
  <MovieLabel movie={videoData}></MovieLabel>
} */

export default ResultPage;
