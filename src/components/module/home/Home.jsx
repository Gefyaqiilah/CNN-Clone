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
import axios from 'axios'
function Home () {

  const [newsUpdateTitle, setNewsUpdateTitle] = useState("")
  const [newsUpdateBackground, setNewsUpdateBackground] = useState("")
  const [newsUpdateTitleColor, setNewsUpdateTitleColor] = useState("")
  const [newsUpdateSubTitleColor, setNewsUpdateSubTitleColor] = useState("")
  const [judulGallery, setJudulGallery] = useState("")
  const [subTitleGallery, setSubTitleGallery] = useState("")
  const initArticles = {
    all: [],
    nasional: [],
    internasional: [],
    ekonomi: [],
    olahraga: [],
    teknologi: [],
    hiburan: [],
    gayaHidup: []
  }
  const [articles, setArticles] = useState(initArticles)
  const [allCategory, setAllCategory] = useState([])

  const change = () => {
    setNewsUpdateTitle("BERITA DAERAH TERBARU")
    setNewsUpdateBackground("#F2F4F5")
    setNewsUpdateTitleColor("#444444")
    setNewsUpdateSubTitleColor("#CC0000")
    setJudulGallery("GALERI FOTO")
    setSubTitleGallery("Nasional")
  }
  const getDataFromApi = async () => {
    try {
      const all = await axios.get(`${process.env.REACT_APP_CNN_API}`)
      const nasional = await axios.get(`${process.env.REACT_APP_CNN_API}/nasional`)
      const internasional = await axios.get(`${process.env.REACT_APP_CNN_API}/internasional`)
      const ekonomi = await axios.get(`${process.env.REACT_APP_CNN_API}/ekonomi`)
      const olahraga = await axios.get(`${process.env.REACT_APP_CNN_API}/olahraga`)
      const teknologi = await axios.get(`${process.env.REACT_APP_CNN_API}/teknologi`)
      const hiburan = await axios.get(`${process.env.REACT_APP_CNN_API}/hiburan`)
      const gayaHidup = await axios.get(`${process.env.REACT_APP_CNN_API}/gaya-hidup`)
      setArticles((prevState) => {
        return({
          ...prevState,
          all:all.data.data,
          nasional:nasional.data.data,
          internasional:internasional.data.data,
          ekonomi:ekonomi.data.data,
          olahraga:olahraga.data.data,
          teknologi:teknologi.data.data,
          hiburan:hiburan.data.data,
          gayaHidup: gayaHidup.data.data
        })
      })
      setAllCategory([
        {
          ...ekonomi.data.data[0],
          category: 'ekonomi'
        },
        {
          ...nasional.data.data[0],
          category: 'nasional'
        },
        {
          ...internasional.data.data[0],
          category: 'internasional'
        },
        {
          ...olahraga.data.data[0],
          category: 'olahraga'
        },
        {
          ...teknologi.data.data[0],
          category: 'teknologi'
        },
        {
          ...hiburan.data.data[0],
          category: 'hiburan'
        },
        {
          ...gayaHidup.data.data[0],
          category: 'gaya hidup'
        }
      ])
    } catch (error) {
      alert('server error')
    }
  }

  useEffect(() => {
    change()
    getDataFromApi()
  }, [])

  useEffect(()=> {
    console.log('articles :>> ', articles);
  }, [articles])

  
  return (
    <div className="container home-container pt-5">
      <div className="gap-component">
        <NewsHeader articles={articles.all} byCategory={allCategory}/>
      </div>
      <div className="gap-component">
        <HeadLines articles={articles.all}/>
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
            <ImageGallery judul={judulGallery} subTitle={subTitleGallery} />
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