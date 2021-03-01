import './NewsUpdate.scoped.css'
import imgExample from '../../../assets/example-headline.jpeg'

function NewsUpdate (props) {
  console.log(props)
  return (
    <div className="news-update p-3" style={{background: props.background}}>
      <div className="title d-flex justify-content-between">
        <p className="text-16 bold-600" style={{color: props.titleColor}}>{props.title}</p>
        <p className="text-16 bold-600" style={{color: props.titleColor}}>LIHAT SEMUA</p>
      </div>
      <div className="news-list row">
        <div className="news-item col-lg-4">
          <div className="img">
            <img src={imgExample} alt=""/>
          </div>
          <div className="detail">
            <p className="title text-13 bold-600 m-0" style={{color: props.titleColor}}>Laporan Interaktif</p>
            <p className="category text-12 bold-600" style={{color: props.subTitleColor}}>Nasional</p>
          </div>
        </div>
        <div className="news-item col-lg-4">
          <div className="img">
            <img src={imgExample} alt=""/>
          </div>
          <div className="detail">
            <p className="title text-13 bold-600 m-0" style={{color: props.titleColor}}>Laporan Interaktif</p>
            <p className="category text-12 bold-600" style={{color: props.subTitleColor}}>Nasional</p>
          </div>
        </div>
        <div className="news-item col-lg-4">
          <div className="img">
            <img src={imgExample} alt=""/>
          </div>
          <div className="detail">
            <p className="title text-13 bold-600 m-0" style={{color: props.titleColor}}>Laporan Interaktif</p>
            <p className="category text-12 bold-600" style={{color: props.subTitleColor}}>Nasional</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsUpdate