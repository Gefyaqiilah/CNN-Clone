import './DetikNews.scoped.css'
import detikLogo from '../../../assets/logo_detikcom.png'
import imageExample from '../../../assets/example-headline.jpeg'

function DetikNews () {
  return(
    <div className="detik-news">
      <div className="header d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src={detikLogo} alt=""/>
        </div>
        <i className="fa fa-chevron-right"></i>
      </div>
      <div className="news-list">
        <div className="news-item row">
          <div className="col-5 p-1">
            <div className="news-img">
              <img src={imageExample} alt=""/>
            </div>
          </div>
          <div className="col-7 p-1">
            <p className="m-0 news-title text-13 bold-600 text-dark-gray">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, dolor!</p>
            <p className="m-0 news-time text-12 text-light-gray bold-600">8 menit yang lalu</p>
          </div>
        </div>
        <div className="news-item row">
          <div className="col-5 p-1">
            <div className="news-img">
              <img src={imageExample} alt=""/>
            </div>
          </div>
          <div className="col-7 p-1">
            <p className="m-0 news-title text-13 bold-600 text-dark-gray">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, dolor!</p>
            <p className="m-0 news-time text-12 text-light-gray bold-600">8 menit yang lalu</p>
          </div>
        </div>
        <div className="news-item row">
          <div className="col-5 p-1">
            <div className="news-img">
              <img src={imageExample} alt=""/>
            </div>
          </div>
          <div className="col-7 p-1">
            <p className="m-0 news-title text-13 bold-600 text-dark-gray">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, dolor!</p>
            <p className="m-0 news-time text-12 text-light-gray bold-600">8 menit yang lalu</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetikNews