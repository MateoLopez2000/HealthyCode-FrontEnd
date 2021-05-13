import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_HOST } from '../../utils/constant';
import { useHistory, useLocation } from 'react-router-dom';
import './Detail-page.css';
import { Card, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

export default function DetailPage() {
  const url = `${API_HOST}/api/movie `;
  const history = useHistory();

  const [videoData, setVideo] = useState({});
  const location = useLocation();

  useEffect(() => {
    const data = location.state ? location.state.videoData : {};
    setVideo(data);
    console.log('this is your data' + data);
  }, [location]);

  axios.get(url, '').then(
    (response) => {
      console.log(response);
      history.push('/');

      toast.warning(response.message);
    },
    (error) => {
      console.log(error.data);
      toast.error('Error del servidor, inténtelo más tarde');
    }
  );

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Card className="text-center">
        <Card.Img
          variant="top"
          src="https://indiehoy.com/wp-content/uploads/2020/01/shrek.jpg"
          class="card-img-top img-fluid"
        />
        <Card.Body>
          <Card.Title>Shrek Tercero</Card.Title>
          <Card.Text class="custom-text">
            Shrek es un personaje creado por el escritor estadounidense William
            Steig y adaptado por Dreamworks Animation. Él es el personaje
            principal del libro y la película del mismo nombre, que dio inicio a
            una franquicia que involucra películas, series de televisión,
            musicales, entre otras cosas.
          </Card.Text>
          <Button variant="primary">Ver pelicula</Button>
        </Card.Body>
        <Card.Footer className="text-muted">24/10/2002</Card.Footer>
      </Card>
    </div>
  );
}
