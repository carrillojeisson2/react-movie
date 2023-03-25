import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "antd";
import { useParams } from "react-router-dom";

import moment from "moment";
import useFetch from "../../hooks/useFetch";
import { URL_API, API } from "../../utils/constans";
import Loading from "../../components/Loading";

import ModalVideo from "../../components/ModalVideo";

import "./serie.scss";

export default function Serie() {
  const { id } = useParams();
  // console.log(id)

  const serieInfo = useFetch(
    `${URL_API}/tv/${id}?api_key=${API}&language=es-ES`
  );
  // console.log(serieInfo)

  if (serieInfo.loading || !serieInfo.result) {
    return <Loading />;
  }

  return <RenderSerie serie={serieInfo.result} />;
}

function RenderSerie(props) {
  // console.log(props)
  const {
    serie: { backdrop_path, poster_path },
  } = props;

  // console.log(props.serie)

  const backdropPath = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  // console.log(backdropPath)

  return (
    <div
      className="serie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="serie__dark" />
      <Row>
        <Col span={8} offset={3} className="serie__poster">
          <PosterSerie image={poster_path} />
        </Col>
        <Col span={10} className="serie-info">
          <SerieInfo serieInfo={props.serie} />
        </Col>
      </Row>
    </div>
  );
}

function PosterSerie(props) {
  const { image } = props;
  const posterPath = `https://image.tmdb.org/t/p/original${image}`;

  return <div style={{ backgroundImage: `url('${posterPath}')` }} />;
}

function SerieInfo(props) {
  const {
    serieInfo: { name, id, in_production, overview, genres },
  } = props;
  // console.log(props)
  // console.log(in_production)

  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const videoSerie = useFetch(
    `${URL_API}/tv/${id}/videos?api_key=${API}&language=es-ES`
  );
  console.log(videoSerie);

  const openModal = () => setIsVisibleModal(true);
  const closeModal = () => setIsVisibleModal(false);

  const renderVideo = () => {
    if (videoSerie.result) {
      if (videoSerie.result.results.length > 0) {
        return (
          <>
            <Button icon="play-circlle" onClick={openModal}>
              Ver Trailer
            </Button>
            <ModalVideo
              videoKey={videoSerie.result.results[0].key}
              videoPlatform={videoSerie.result.results[0].site}
              isOpen={isVisibleModal}
              close={closeModal}
            />
          </>
        );
      }
    }
  };

  return (
    <>
        <div className="serie__info-header">
            <h1>
                {name}
                <span>{in_production ? "en mision" : "finalizado"}</span>
            </h1>
            {renderVideo()}
        </div>
        <div className="serie__info-content">
            <h3>General</h3>
            <p>{overview}</p>

            <h3>Generos</h3>
            <ul>
                {
                    genres.map((gender) => (
                        <li key={gender.id}>{gender.name}</li>
                    ))
                }
            </ul>
        </div>
    </>
  )
}
