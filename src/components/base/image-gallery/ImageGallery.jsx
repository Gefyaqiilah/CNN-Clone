import './ImageGallery.scoped.css'
import imageExample from '../../../assets/example-headline.jpeg'

function ImageGallery (props) {
  return (
    <div className="image-gallery p-2">
      <div className="header d-flex justify-content-between p-2">
        <div className="title-header">
          <p className="text-white m-0 text-15 bold-600">{props.judul}</p>
          <div className="line"></div>
        </div>
        <p className="text-white m-0 text-15 bold-600">LIHAT SEMUA</p>
      </div>
      <div className="list-news row m-0">
        <div className="news-item col-lg-4 p-2">
          <div className="img">
            <img src={imageExample} alt=""/>
          </div>
          <div className="details-item">
            <p className="title-item text-white text-13 bold-500 m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in cupiditate veniam blanditiis odio beatae!</p>
            <p className="category-item text-gold text-13 bold-600">{props.subTitle}</p>
          </div>
        </div>
        <div className="news-item col-lg-4 p-2">
          <div className="img">
            <img src={imageExample} alt=""/>
          </div>
          <div className="details-item">
            <p className="title-item text-white text-13 bold-500 m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in cupiditate veniam blanditiis odio beatae!</p>
            <p className="category-item text-gold text-13 bold-600">{props.subTitle}</p>
          </div>
        </div>
        <div className="news-item col-lg-4 p-2">
          <div className="img">
            <img src={imageExample} alt=""/>
          </div>
          <div className="details-item">
            <p className="title-item text-white text-13 bold-500 m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in cupiditate veniam blanditiis odio beatae!</p>
            <p className="category-item text-gold text-13 bold-600">{props.subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageGallery