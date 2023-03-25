import React from 'react'
import {List, Avatar, Button} from 'antd'
import {Link} from 'react-router-dom'
import Loading from '../../components/Loading'

import "./SerieList.scss";

export default function SerieList(props) {

    const {series, title} = props;

    if(series.loading || !series.result.results) {
        return <Loading/>
    }

    // console.log(props)

  return (
    <List
        className='serie-list'
        size='default'
        header={<h2>{title}</h2>}
        bordered
        dataSource={series.result.results}
        renderItem={serie => <RenderSerie serie={serie} />}
    />
  )
}

function RenderSerie(props) {
    const {serie: {id, name, poster_path}} = props;
    const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`

    return (
        <List.Item className='serie-list__serie'>
            <List.Item.Meta
                avatar={<Avatar src={posterPath} />}
                title={<Link to={`/serie/${id}`}>{name}</Link>}
            />
            <Link to={`/serie/${id}`}>
                <Button type='primary' shape='circle' icon='right' />
            </Link>
        </List.Item>
    )

}
