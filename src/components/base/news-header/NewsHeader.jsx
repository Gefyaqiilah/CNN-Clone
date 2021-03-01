import './NewsHeader.scoped.css'
import imgHeadline from '../../../assets/example-headline.jpeg'
import imgNews1 from '../../../assets/news-update1.jpeg'
function NewsHeader () {
  return (
    <div className="news-header">
      <div className="headline">
        <div className="img">
          <img src={imgHeadline} alt=""/>
        </div>
        <div className="details">
          <p className="title text-23 m-0 text-dark-gray bold-700">Jokowi Masuk Bursa Capres, LSI Sebut Cuma 'Top of Mind'</p>
          <div className="detail-info">
            <p className="text-13 bold-600"><span className="text-red">Nasional</span> 51 detik yang lalu</p>
          </div>
        </div>
      </div>
      <div className="news-update d-flex flex-column p-0">
        <div className="news-item p-0 d-flex">
          <div className="img">
            <img src={imgNews1} alt=""/>
          </div>
          <div className="details">
            <p className="m-0 title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, soluta?</p>
            <p className="m-0 text-12"><span className="text-red bold-700">Nasional</span> <span>5 Menit yang lalu</span></p>
          </div>
        </div>
        <div className="news-item p-0 d-flex">
          <div className="img">
            <img src={imgNews1} alt=""/>
          </div>
          <div className="details">
            <p className="m-0 title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, soluta?</p>
            <p className="m-0 text-12"><span className="text-red bold-700">Nasional</span> <span>5 Menit yang lalu</span></p>
          </div>
        </div>
        <div className="news-item p-0 d-flex">
          <div className="img">
            <img src={imgNews1} alt=""/>
          </div>
          <div className="details">
            <p className="m-0 title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, soluta?</p>
            <p className="m-0 text-12"><span className="text-red bold-700">Nasional</span> <span>5 Menit yang lalu</span></p>
          </div>
        </div>
        <div className="news-item p-0 d-flex">
          <div className="img">
            <img src={imgNews1} alt=""/>
          </div>
          <div className="details">
            <p className="m-0 title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, soluta?</p>
            <p className="m-0 text-12"><span className="text-red bold-700">Nasional</span> <span>5 Menit yang lalu</span></p>
          </div>
        </div>
        <div className="news-item p-0 d-flex">
          <div className="img">
            <img src={imgNews1} alt=""/>
          </div>
          <div className="details">
            <p className="m-0 title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, soluta?</p>
            <p className="m-0 text-12"><span className="text-red bold-700">Nasional</span> <span>5 Menit yang lalu</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsHeader