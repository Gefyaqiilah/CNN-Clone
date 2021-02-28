import React from 'react'
import './Home.scoped.css'
import NewsHeader from '../../base/news-header/NewsHeader'
import HeadLines from '../../base/headlines/HeadLines'
import NewsCovid from '../../base/news-covid/NewsCovid'
import LaporanInteraktif from '../../base/news-update/NewsUpdate'
import ListNewsUpdate from '../../base/list-news-update/ListNewsUpdate'
import FocusNews from '../../base/focus-news/FocusNews'
import NewsReviews from '../../base/news-reviews/NewsReviews'
import AllPopularNews from '../../base/all-popular-news/AllPopularNews'

function Home () {
  return (
    <div className="container home-container pt-5">
      <div className="gap-component">
        <NewsHeader/>
      </div>
      <div className="gap-component">
        <HeadLines/>
      </div>
      <div id="main-content" className="row p-0 gap-component">
        <div className="main-left col-lg-8 p-3">
          <div className="gap-component-content">
            <NewsCovid/> 
          </div>
          <div className="gap-component-content">
           <LaporanInteraktif/> 
          </div>
          <div className="gap-component-content">
            <ListNewsUpdate/>
          </div>
        </div>
        <div className="main-right col-lg-4 p-3">
          <div className="gap-component-content-right">
            <FocusNews/>
          </div>
          <div className="gap-component-content-right">
            <NewsReviews/>
          </div>
          <div className="gap-component-content-right">
            <AllPopularNews/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home