import './NewsReviews.scoped.css'
import imgExample from '../../../assets/example-headline.jpeg'

function NewsReviews () {
  return (
    <div className="news-reviews p-2">
      <div className="header d-flex justify-content-between p-2">
        <p className="title text-16 bold-600">ULASAN FILM</p>
        <p className="text-16 bold-600">LIHAT SEMUA</p>
      </div>
      <div className="news-item row m-0">
        <div className="col-lg-6 img p-2">
          <img src={imgExample} alt=""/>
        </div>
        <div className="col-lg-6 details p-0 pt-0">
          <div className="news-title m-0 p-0 text-15 bold-600">Review Film: La La Land</div>
          <div className="news-category text-13 text-red">Hiburan</div>
        </div>
      </div>
      <div className="news-item row m-0">
        <div className="col-lg-6 img p-2">
          <img src={imgExample} alt=""/>
        </div>
        <div className="col-lg-6 details p-0 pt-0">
          <div className="news-title m-0 p-0 text-15 bold-600">Review Film: La La Land</div>
          <div className="news-category text-13 text-red">Hiburan</div>
        </div>
      </div>
      <div className="news-item row m-0">
        <div className="col-lg-6 img p-2">
          <img src={imgExample} alt=""/>
        </div>
        <div className="col-lg-6 details p-0 pt-0">
          <div className="news-title m-0 p-0 text-15 bold-600">Review Film: La La Land</div>
          <div className="news-category text-13 text-red">Hiburan</div>
        </div>
      </div>
    </div>
  )
}

export default NewsReviews