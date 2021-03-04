import React, {useState, useEffect} from 'react'
import './Home.scoped.css'
import NewsHeader from '../../base/news-header/NewsHeader'
import HeadLines from '../../base/headlines/HeadLines'
import NewsCovid from '../../base/news-covid/NewsCovid'
import LaporanInteraktif from '../../base/news-update/NewsUpdate'
import ListNewsUpdate from '../../base/list-news-update/ListNewsUpdate'
import FocusNews from '../../base/focus-news/FocusNews'
import NewsReviews from '../../base/news-reviews/NewsReviews'
import AllPopularNews from '../../base/all-popular-news/AllPopularNews'
import ImageGallery from '../../base/image-gallery/ImageGallery'
import CNBCNews from '../../base/cnbc-news/CNBCNews'
import DetikNews from '../../base/detik-news/DetikNews'

function Home () {

  const [newsUpdateTitle, setNewsUpdateTitle] = useState("")
  const [newsUpdateBackground, setNewsUpdateBackground] = useState("")
  const [newsUpdateTitleColor, setNewsUpdateTitleColor] = useState("")
  const [newsUpdateSubTitleColor, setNewsUpdateSubTitleColor] = useState("")

  const change = () => {
    setNewsUpdateTitle("BERITA DAERAH TERBARU")
    setNewsUpdateBackground("#F2F4F5")
    setNewsUpdateTitleColor("#444444")
    setNewsUpdateSubTitleColor("#CC0000")
  }

  useEffect(() => {
    change()
  }, [])
  
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
           <LaporanInteraktif title={newsUpdateTitle} background={newsUpdateBackground} titleColor={newsUpdateTitleColor} subTitleColor={newsUpdateSubTitleColor} /> 
          </div>
          <div className="gap-component-content">
            <ListNewsUpdate/>
          </div>
          <div className="gap-component-content">
            <ImageGallery/>
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
          <div className="gap-component-content-right">
            <CNBCNews/>
          </div>
          <div className="gap-component-content-right">
            <DetikNews/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home