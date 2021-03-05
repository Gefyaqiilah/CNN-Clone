import './CNBCNews.scoped.css'
import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import cnbcLogo from '../../../assets/cnbc.png';
import moment from 'moment'
import axios from 'axios'

function CNBCNews () {
  const [index, setIndex] = useState(0)
  const [CNBCNews, setCNBCNews] = useState([])

  const getNews = async () => {
    try {
      const articles = await axios.get(`${process.env.REACT_APP_CNBC_API}`)
      setCNBCNews(articles.data.data)
    } catch (error) {
      alert('server error')
    }
  } 
  useEffect(()=>{
    getNews()
  })

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  const convertTime = (isoDate) => {
    return moment(isoDate).fromNow()
  }

  if (CNBCNews.length === 0) {
    return(<p>Loading...</p>)
  } else {
    const newsItem = CNBCNews.filter((el, i) => i<10).map(value => {
      return(
        <Carousel.Item>
          <div className="img">
            <img src={value.image.small} alt=""/>
          </div>
          <p className="m-0 text-dark-gray text-15 bold-600 text-capitalize">{value.title}</p>
          <p className="mb-2 text-dark-gray text-13">{convertTime(value.isoDate)}</p>
      </Carousel.Item>
      )
    })
    return (
      <div className="cnbc-news" animation="cubeAnimation">
        <div className="header d-flex justify-content-between align-items-center">
          <div className="logo">
            <img src={cnbcLogo} alt=""/>
          </div>
          <i className="fa fa-chevron-right text-blue"></i>
        </div>
        <div className="list-image">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {newsItem}
          </Carousel>
        </div>
      </div>
    ) 
  }
}

export default CNBCNews