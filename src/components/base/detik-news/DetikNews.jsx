import './DetikNews.scoped.css'
import detikLogo from '../../../assets/logo_detikcom.png'
import imageExample from '../../../assets/example-headline.jpeg'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'

function DetikNews () {
  const [detikNews, setDetikNews] = useState([])

  const getNews = async()=> {
    try {
      const articles = await axios.get(`${process.env.REACT_APP_NEWS_API}`)
      const filterDetik = articles.data.articles.filter(el=>el.source.name==='Detik.com')
      setDetikNews(filterDetik)
      console.log('detikNews :>> ', detikNews);
    } catch (error) {
      alert('server error')
    }
  }
  useEffect(()=>{
    getNews()
  }, [])

  const convertTime = (isoDate) => {
    return moment(isoDate).fromNow()
  }
  if (detikNews.length === 0) {
    return(<p>Loading...</p>)
  } else {
    const newsItem = detikNews.map((el, index)=>{
      return(
      <div className="news-item row" key={index}>
        <div className="col-5 p-1">
          <div className="news-img">
            <img src={el.urlToImage} alt=""/>
          </div>
        </div>
        <div className="col-7 p-1">
          <p className="m-0 news-title text-13 bold-600 text-dark-gray">{el.title}</p>
          <p className="m-0 news-time text-12 text-light-gray bold-600">{convertTime(el.publishedAt)}</p>
        </div>
      </div>
      )
    })
    return(
      <div className="detik-news">
        <div className="header d-flex justify-content-between align-items-center">
          <div className="logo">
            <img src={detikLogo} alt=""/>
          </div>
          <i className="fa fa-chevron-right"></i>
        </div>
        <div className="news-list">
          {newsItem}
        </div>
      </div>
    )
  }
}

export default DetikNews