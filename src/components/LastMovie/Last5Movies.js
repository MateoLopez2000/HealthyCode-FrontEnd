import React, { useRef, useEffect, useState } from "react";
import "./Last5Movies.css";

import LastMovie from "./LastMovie";
import { API_HOST } from "../../utils/constant";

import { Container, Row, Col } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import axios from "axios";
import { motion } from "framer-motion";

export default function Last5Movies(props) {
  const outerRef = useRef(null);
  const [inViewport, setInViewport] = useState(true);

  useEffect(() => {
    const getMoviesAxios = async () => {
      try {
        const url = `${API_HOST}/api/movie `;

        const { data } = await axios.get(url);
        console.log(data);
        setMovies(data);
      } catch (err) {
        console.log(err);
      }
    };
    getMoviesAxios().catch(null);
  }, []);

  useEffect(() => {
    const onChange = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === outerRef.current) {
          if (entry.isIntersecting) {
            setInViewport(true);
          } else {
            setInViewport(false);
          }
        }
      });
    };
    const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
    observer.observe(outerRef.current);
  }, [outerRef]);
  const fadeInContainerWithStagger = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
        type: "tween",
        ease: "easeIn",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
      },
    },
  };
  const [movies, setMovies] = useState([]);
  return (
    <div className="App">
      <Jumbotron fluid>
        <Container ref={outerRef} id="outer-box">
          {inViewport && (
            <motion.div
              variants={fadeInContainerWithStagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeInUp}>
                <h1 className="title">
                  Películas y series ilimitadas y mucho más.
                </h1>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <p className="description">
                  Disfruta donde quieras. Cancela cuando quieras.
                </p>
              </motion.div>
            </motion.div>
          )}
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          {movies.map((data) => (
            <Col xs={3} md={3} className="mb-4" key={data.id}>
              <LastMovie data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
