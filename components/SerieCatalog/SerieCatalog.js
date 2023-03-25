import React from 'react'
import {Col, Card, Icon} from 'antd'
import {Link} from 'react-router-dom'


import "./SerieCatalog.scss";

export default function SerieCatalog(props) {

    const {series: {results}} = props;

  return results.map(serie => (
    <Col key={serie.id} xs={4} className="serie-catalog">
        <SerieCard serie={serie} />
    </Col>
  ))

    
  
}

function SerieCard(props) {
    const {serie: {id, name, poster_path}} = props;

    const {Meta} = Card;
    const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`

    return (
        <Link to={`/serie/${id}`}>
            <Card
                hoverable
                style={{width: 240}}
                cover={<img alt={name} src={posterPath} />}
                actions={[<Icon type="eye" key="eye" />]}
            >
                <Meta title={name} />
            </Card>
        </Link>
    )
}
