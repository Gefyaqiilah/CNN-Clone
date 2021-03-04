import './CNBCNews.scoped.css'
import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import imageExample from '../../../assets/example-headline.jpeg';
import cnbcLogo from '../../../assets/cnbc.png';

function CNBCNews () {
  const [index, setIndex] = useState(0)
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="cnbc-news" animation="cubeAnimation">
      <div className="header d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src={cnbcLogo} alt=""/>
        </div>
        <i className="fa fa-chevron-right text-blue"></i>
      </div>
      <div className="list-image">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="img">
              <img src={imageExample} alt=""/>
            </div>
            <p className="m-0 text-dark-gray text-15 bold-600 text-capitalize">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, molestias?</p>
            <p className="mb-2 text-dark-gray text-13">8 menit yang lalu</p>
          </Carousel.Item>
          <Carousel.Item>
            <div className="img">
              <img src={imageExample} alt=""/>
            </div>
            <p className="m-0 text-dark-gray text-15 bold-600 text-capitalize">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, molestias?</p>
            <p className="mb-2 text-dark-gray text-13">8 menit yang lalu</p>
          </Carousel.Item>
          <Carousel.Item>
            <div className="img">
              <img src={imageExample} alt=""/>
            </div>
            <p className="m-0 text-dark-gray text-15 bold-600 text-capitalize">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, molestias?</p>
            <p className="mb-2 text-dark-gray text-13">8 menit yang lalu</p>
          </Carousel.Item>
          <Carousel.Item>
            <div className="img">
              <img src={imageExample} alt=""/>
            </div>
            <p className="m-0 text-dark-gray text-15 bold-600 text-capitalize">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, molestias?</p>
            <p className="mb-2 text-dark-gray text-13">8 menit yang lalu</p>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  ) 
}

export default CNBCNews