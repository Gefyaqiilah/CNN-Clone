import './NewsUpdate.scoped.css'
import React, {useState, useEffect} from 'react'

function NewsUpdate (props) {
  const initArticles = { everyCategory: [] }
  const [articles, setArticles] = useState(initArticles)

  useEffect(() => {
    setArticles((prevState) => {
      return({
        ...prevState,
        everyCategory: props.articlesByCategory
      })
    })
  }, [props.articlesByCategory])

  if (articles.everyCategory.length === 0) {
    return(
      <p>Loading...</p>
    )
  } else {
    const newsItem = articles.everyCategory.filter((value, index) => index < 3).map((value,index) => {
      return(
        <div className="news-item col-lg-4" key={index}>
          <div className="img">
            <img src={value.image.small} alt=""/>
          </div>
          <div className="detail">
            <p className="title text-13 bold-600 m-0" style={{color: props.titleColor}}>{value.title}</p>
            <p className="category text-12 bold-600" style={{color: props.subTitleColor}}>{value.category}</p>
          </div>
      </div>
      )
    })
    return (
      <div className="news-update p-3" style={{background: props.background}}>
        <div className="title d-flex justify-content-between">
          <p className="text-16 bold-600" style={{color: props.titleColor}}>{props.title}</p>
          <p className="text-16 bold-600" style={{color: props.titleColor}}>LIHAT SEMUA</p>
        </div>
        <div className="news-list row">
          {newsItem}
        </div>
      </div>
    )
  }
}

export default NewsUpdate