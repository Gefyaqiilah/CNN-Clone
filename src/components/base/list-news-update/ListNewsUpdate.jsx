import './ListNewsUpdate.scoped.css'
import React, {useState, useEffect} from 'react'

function ListNewsUpdate (props) {
  const initArticles = {everyCategory: []}
  const [articles, setArticles] = useState(initArticles)

  useEffect(()=>{
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
    const newsItem = articles.everyCategory.map((value, index)=> {
      return(
      <div className="news-update row p-0 m-0 mb-4" key={index}>
        <div className="img col-lg-4 p-0">
          <img src={value.image.small} alt=""/>
        </div>
        <div className="detail col-lg-8 d-flex flex-column justify-content-center">
          <p className="title text-20 bold-600">{value.title}</p>
          <p className="information"><span className="text-red bold-600">{value.category}</span> {value.isoDate}</p>
        </div>
      </div>
      )
    })
    return (
      <div className="list-news-update p-0">
        <div className="title-component text-20 bold-700">
          <p>Terbaru</p>
          <div className="line"></div>
        </div>
        {newsItem}
      </div>
    )
  }
}

export default ListNewsUpdate