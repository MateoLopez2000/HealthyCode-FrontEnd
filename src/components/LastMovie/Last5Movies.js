import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import LastMovie from "./LastMovie";
import axios from "axios";
const data = {
  title: "prueba1",
  desc: "test1",
};
export default function Last5Movies(props) {
  const { setRefreshCheckLogin } = props;

  useEffect(() => {
    const getMoviesAxios = async () => {
      try {
        const { data } = await axios.get(
          "https://mocki.io/v1/1c68ed2c-eb6c-4ce9-85a8-2890183e46fc"
        );
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
          <h1> Películas y series ilimitadas y mucho más.</h1>
          <p>Disfruta donde quieras. Cancela cuando quieras.</p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          {movies.map((data) => (
            <Col xs={4} md={3} className="mb-5" key={data.id}>
              <LastMovie data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
