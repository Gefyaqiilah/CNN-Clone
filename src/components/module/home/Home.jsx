import React from 'react'
import './Home.scoped.css'
import NewsHeader from '../../base/news-header/NewsHeader'
import HeadLines from '../../base/headlines/HeadLines'

function Home () {
  
  return (
    <div className="container home-container pt-5">
      <div className="gap-component">
        <NewsHeader/>
      </div>
      <div className="gap-component">
        <HeadLines/>
      </div>
      <div id="main-content row">
        <div className="main-left col-lg-8">
          
        </div>
        <div className="main-right col-lg-4"></div>
      </div>
    </div>
  )
}

export default Home