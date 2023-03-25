import Reac, {useState, useEffect} from 'react'
import {Row, Col, Input} from 'antd'
import {withRouter} from 'react-router-dom'
import queryString from 'query-string'
import MovieCatalog from '../../components/MovieCatalog'
import Footer from '../../components/Footer'
import {URL_API, API} from '../../utils/constans'

import "./search.scss";

 function Search(props) {
  // console.log(props)

  const {location, history} = props
  const [movieList, setMovieList] = useState([])
  const [searchValuee, setSearchValuee] = useState("")

  useEffect(() => {
    
  }, [location.search])
  


  return (
    <div>search...</div>
  )
}

export default withRouter(Search)