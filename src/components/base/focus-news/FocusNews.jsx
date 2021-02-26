import './FocusNews.scoped.css'
import exampleImg from '../../../assets/example-headline.jpeg'

function FocusNews () {
  return (
    <div className="focus-news p-2">
      <div className="header">
        <p className="title text-16 bold-600">FOKUS</p>
      </div>
      <div className="list-news">
        <div className="news-item d-flex flex-column">
          <div className="img">
            <img src={exampleImg} alt=""/>
          </div>
          <div className="news-title">
            <p className="p-0 m-0 d-flex align-items-center justify-content-center text-15 bold-600">Aksi Polisi Koboi di Cengkareng</p>
          </div>
        </div>
        <div className="news-item d-flex flex-column">
          <div className="img">
            <img src={exampleImg} alt=""/>
          </div>
          <div className="news-title">
            <p className="p-0 m-0 d-flex align-items-center justify-content-center text-15 bold-600">Aksi Polisi Koboi di Cengkareng</p>
          </div>
        </div>
        <div className="news-item d-flex flex-column">
          <div className="img">
            <img src={exampleImg} alt=""/>
          </div>
          <div className="news-title">
            <p className="p-0 m-0 d-flex align-items-center justify-content-center text-15 bold-600">Aksi Polisi Koboi di Cengkareng</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FocusNews