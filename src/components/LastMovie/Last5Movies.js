import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import LastMovie from "./LastMovie";
import axios from "axios";
import "./Last5Movies.css";

export default function Last5Movies(props) {
  const { setRefreshCheckLogin } = props;

  useEffect(() => {
    const getMoviesAxios = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/movie");
        console.log(data);
        setMovies(data);
      } catch (err) {
        console.err(err);
      }
    };
    getMoviesAxios().catch(null);
  }, []);

  const [movies, setMovies] = useState([]);
  return (
    <div className="App">
      <Jumbotron fluid>
        <Container>
          <h1 class="title"> Películas y series ilimitadas y mucho más.</h1>
          <p class="description">
            Disfruta donde quieras. Cancela cuando quieras.
          </p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          {movies.map((data) => (
            <Col xs={3} md={3} className="mb-5" key={data.id}>
              <LastMovie data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
