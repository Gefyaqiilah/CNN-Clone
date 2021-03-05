import './HeadLines.scoped.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function HeadLines (props) {
  const initArticles = { topHeadlines: [] }
  const [articles, setArticles] = useState(initArticles)


  const getTopHeadlines = async() => {
    try {
      const topHeadlines = await axios.get(`${process.env.REACT_APP_NEWS_API}`)
      setArticles((prevState) => {
        return({
          ...prevState,
          topHeadlines: topHeadlines.data.articles
        })
      })
      console.log('articles :>> ', articles);
    } catch (error) {
      alert('server error')
    }
  }

  useEffect(() => {
    getTopHeadlines()
  }, [])

  if (articles.topHeadlines.length === 0) {
    return(
      <p>Loading...</p>
    )
  } else {
    const headlineItem = articles.topHeadlines.map((value, index) => {
      if (index < 5) {
        return(
          <div className="headline-item mr-3" key={value.publishedAt}>
            <div className="headline-image">
              <img src={value.urlToImage} alt=""/>
            </div>
            <div className="headline-title">
              <p className="bold-600 text-13 text-dark-gray">{value.title}</p>
            </div>
          </div>
        )
      }
    })
    return (
      <div className="headlines">
        <div className="title d-flex justify-content-between">
          <p className="text-15 bold-700 text-headline text-dark-gray">BERITA UTAMA</p>
        </div>
        <div className="list-headlines d-flex justify-content-end">
          {headlineItem}
        </div>
      </div>
    )
  }
  
}

export default HeadLines