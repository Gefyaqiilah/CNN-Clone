import './AllPopularNews.scoped.css'
import imgExample from '../../../assets/example-headline.jpeg'

function AllPopularNews () {
  return (
    <div className="all-popular-news">
      <div className="header">
        <div className="title">
          <p className="text-15 bold-600">TERPOPULER</p>
          <div className="line"></div>
        </div>
      </div>
      <div className="news p-0 m-0">
        <div className="news-item row m-0">
          <div className="img col-lg-5 p-0 m-0">
            <img src={imgExample} alt=""/>
          </div>
          <div className="details p-0 col-lg-7 pl-3">
            <p className="m-0 text-13 bold-600">Aturan bagi nasabah penerima uang salah transfer</p>
            <p className="m-0 text-13"><span className="text-red">Ekonomi</span><span><br/>11 menit yang lalu</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllPopularNews