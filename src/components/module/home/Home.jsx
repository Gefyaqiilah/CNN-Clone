import React from 'react'
import './Home.scoped.css'
import NewsHeader from '../../base/news-header/NewsHeader'
import HeadLines from '../../base/headlines/HeadLines'
import NewsCovid from '../../base/news-covid/NewsCovid'
import LaporanInteraktif from '../../base/news-update/NewsUpdate'
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
        <div className="main-left col-lg-8 p-0">
          <div className="gap-component-content">
            <NewsCovid/> 
          </div>
          <div className="gap-component-content">
           <LaporanInteraktif/> 
          </div>
        </div>
        <div className="main-right col-lg-4">
        
        </div>
      </div>
    </div>
  )
}

export default Home