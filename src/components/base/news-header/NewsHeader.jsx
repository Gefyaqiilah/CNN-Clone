import './NewsHeader.scoped.css'
import React, { useState, useEffect } from 'react'
import moment from 'moment'

function NewsHeader (props) {
  const [articles, setArticles] = useState([])
  const [everyCategory, setEveryCategory] = useState([])

  useEffect(()=> {
    setArticles(props.articles)    
  }, [props.articles])

  useEffect(()=> {
    setEveryCategory(props.byCategory)
  },[props.byCategory])

  const convertTime = (isoDate) => {
    return moment(isoDate).fromNow()
  }

  const getCategory = (link) => {
    const string = link.replace('https://www.cnnindonesia.com/', '')
    let category = ''
    for (let i=0; i < string.length && string[i] !== '/'; i++) {
      string[i] !== '-' ? category+=string[i] : category+=' ' 
    }
    return category
  }

  if (articles.length > 0 && everyCategory.length > 0) {
    const newsItem = everyCategory.map((value) => {
      return(
      <div className="news-item p-0 d-flex" key={value.isoDate}>
        <div className="img">
          <img src={value.image.small} alt=""/>
        </div>
        <div className="details">
          <p className="m-0 title">{value.title}</p>
          <p className="m-0 text-12"><span className="text-red bold-700">{value.category}</span> <span>{convertTime(value.isoDate)}</span></p>
        </div>
      </div>
      )
    })
    return (
      <div className="news-header">
        <div className="headline">
          <div className="img">
            <img src={articles[0].image.large} alt=""/>
          </div>
          <div className="details">
            <p className="title text-23 m-0 text-dark-gray bold-700">{articles[0].title}</p>
            <div className="detail-info">
              <p className="text-13 bold-600"><span className="text-red news-title">{getCategory(articles[0].link)}</span> {convertTime(articles[0].isoDate)}</p>
            </div>
          </div>
        </div>
        <div className="news-update d-flex flex-column p-0">
          {newsItem}
        </div>
      </div>
    )
  } else {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }
}

export default NewsHeader