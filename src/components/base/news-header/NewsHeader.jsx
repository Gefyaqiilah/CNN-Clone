import './NewsHeader.scoped.css'
import imgHeadline from '../../../assets/example-headline.jpeg'

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
      <div className="news-update"></div>
    </div>
  )
}

export default NewsHeader