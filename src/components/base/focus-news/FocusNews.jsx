import './FocusNews.scoped.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import img404 from '../../../assets/404.png'

function FocusNews () {
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
    return (
      <p>Loading...</p>
    )
  } else {
    const newsItem = articles.topHeadlines.filter((value, index)=> index>5 && index<9).map((value, index) => {
      return(
        <div className="news-item d-flex flex-column" key={value.publishedAt}>
          <div className="img">
            <img src={value.urlToImage} alt={value.source.name}/>
          </div>
          <div className="news-title">
            <p className="p-0 m-0 d-flex align-items-center justify-content-center text-15 bold-600">{value.title.slice(0,30) + '...'}</p>
          </div>
        </div>
      )
    })
    return (
      <div className="focus-news p-2">
        <div className="header">
          <p className="title text-16 bold-600">FOKUS</p>
        </div>
        <div className="list-news">
          {newsItem}
        </div>
      </div>
    )
  }
}

export default FocusNews