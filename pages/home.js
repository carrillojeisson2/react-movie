import React from "react";
import { Row, Col } from "antd";
import useFetch from "../hooks/useFetch";
import { URL_API, API } from "../utils/constans";

import MovieList from "../components/MovieList";
import SerieList from "../components/SerieList";

import SliderMovies from "../components/SliderMovies";
import Footer from "../components/Footer";


export default function Home() {
  const newMovies = useFetch(
    // "https://api.themoviedb.org/3/movie/now_playing?api_key=0e6ccd8e508e250bb355ac2a0efb1734&language=es-ES&page=1"
    `${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`
  );
  // console.log(newMovies)

  const popularMovies = useFetch(
    `${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`
  );

  const topMovies = useFetch(
    `${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`
  );

  const tvOnAir = useFetch(
    `${URL_API}/tv/on_the_air?api_key=${API}&language=es-ES&page=1`
  );

  console.log(tvOnAir);

  return (
    <>
      <SliderMovies movies={newMovies} />
      <Row>
        <Col span={12}>
          <MovieList title={"Peliciulas Populares"} movies={popularMovies} />
        </Col>
        <Col span={12}>
          <MovieList title={"Top Rated"} movies={topMovies} />
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <SerieList title={"Series en emision"} series={tvOnAir} />
        </Col>
       
      </Row>
      <Footer/>
    </>
  );
}
