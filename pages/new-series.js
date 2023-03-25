import React, {useState, useEffect} from 'react'
import {Row, Col} from 'antd'
import {URL_API, API} from '../utils/constans'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import SerieCatalog from '../components/SerieCatalog'
import Pagination from '../components/Pagination' 

export default function NewSeries() {

const [serieList, setSerieList] = useState([])
const [page, setPage] = useState(1)

useEffect(() => {
  (async () => {
    const response = await fetch(
      `${URL_API}/tv/on_the_air?api_key=${API}&language=es-ES&page=${page}`
    )
    const series = await response.json();
    setSerieList(series)
  })();
}, [page ])

console.log(serieList)

const onChangePage = page => {
  setPage(page)
}

  return (
    <Row>
      <Col span={24} style={{textAlign: "center", marginTop: 25}}>
        <h1 style={{fontSize: 35, fontWeight: "bold"}}>
          Nuevas Series
        </h1>
      </Col>
      {
        serieList.results ? (
          <>
            <Col span={24}>
              <SerieCatalog
                series={serieList}
              />
            </Col>
            <Col span={24}>
          <Pagination
              currentPage={serieList.page}
              totalItems={serieList.total_results}
              onChangePage={onChangePage}
          />
        </Col>
          </>
        ):(
          <Col span={24}>
            <Loading/>
          </Col>
        )
      }
      <Col span={24}>
        <Footer/>
      </Col>
    </Row>
  )
}
