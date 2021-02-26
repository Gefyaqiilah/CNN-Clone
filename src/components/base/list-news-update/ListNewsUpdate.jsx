import './ListNewsUpdate.scoped.css'
import imgExample from '../../../assets/example-headline.jpeg'

function ListNewsUpdate () {
  return (
    <div className="list-news-update p-0">
      <div className="title-component text-20 bold-700">
        <p>Terbaru</p>
        <div className="line"></div>
      </div>
      <div className="news-update row p-0 m-0 mb-4">
        <div className="img col-lg-4 p-0">
          <img src={imgExample} alt=""/>
        </div>
        <div className="detail col-lg-8 d-flex flex-column justify-content-center">
          <p className="title text-20 bold-600">Kapolri Terbitkan Instruksi soal Senpi Buntut Kasus Bripka CS</p>
          <p className="information"><span className="text-red bold-600">Nasional</span> 11 menit yang lalu</p>
        </div>
      </div>
    </div>
  )
}

export default ListNewsUpdate