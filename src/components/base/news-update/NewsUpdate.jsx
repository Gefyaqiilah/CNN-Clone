import './NewsUpdate.scoped.css'
import imgExample from '../../../assets/example-headline.jpeg'

function NewsUpdate () {
  return (
    <div className="news-update p-3">
      <div className="title d-flex justify-content-between">
        <p className="text-16 bold-600 text-dark-gray">BERITA DAERAH TERBARU</p>
        <p className="text-16 bold-600 text-dark-gray">LIHAT SEMUA</p>
      </div>
      <div className="news-list row">
        <div className="news-item col-lg-4">
          <div className="img">
            <img src={imgExample} alt=""/>
          </div>
          <div className="detail">
            <p className="title text-13 bold-600 text-dark-gray m-0">Laporan Interaktif</p>
            <p className="category text-12 bold-600 text-red">Nasional</p>
          </div>
        </div>
        <div className="news-item col-lg-4">
          <div className="img">
            <img src={imgExample} alt=""/>
          </div>
          <div className="detail">
            <p className="title text-13 bold-600 text-dark-gray m-0">Laporan Interaktif</p>
            <p className="category text-12 bold-600 text-red">Nasional</p>
          </div>
        </div>
        <div className="news-item col-lg-4">
          <div className="img">
            <img src={imgExample} alt=""/>
          </div>
          <div className="detail">
            <p className="title text-13 bold-600 text-dark-gray m-0">Laporan Interaktif</p>
            <p className="category text-12 bold-600 text-red">Nasional</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsUpdate