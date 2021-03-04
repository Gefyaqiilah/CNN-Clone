import './HeadLines.scoped.css'
import imgExample from '../../../assets/example-headline.jpeg'
import React, { useState, useEffect } from 'react'

function HeadLines (props) {
  const [articles, setArticles] = useState([])
  
  useEffect(()=> {
    setArticles(props.articles)
  }, [props.articles, articles])

  return (
    <div className="headlines">
      <div className="title d-flex justify-content-between">
        <p className="text-15 bold-700 text-headline text-dark-gray">BERITA UTAMA</p>
      </div>
      <div className="list-headlines d-flex justify-content-end">
        <div className="headline-item mr-3">
          <div className="headline-image">
            <img src={articles} alt=""/>
          </div>
          <div className="headline-title">
            <p className="bold-600 text-13 text-dark-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nulla expedita magni commodi accusantium pariatur!</p>
          </div>
        </div>
        <div className="headline-item mr-3">
          <div className="headline-image">
            <img src={imgExample} alt=""/>
          </div>
          <div className="headline-title">
            <p className="bold-600 text-13 text-dark-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nulla expedita magni commodi accusantium pariatur!</p>
          </div>
        </div>
        <div className="headline-item mr-3">
          <div className="headline-image">
            <img src={imgExample} alt=""/>
          </div>
          <div className="headline-title">
            <p className="bold-600 text-13 text-dark-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nulla expedita magni commodi accusantium pariatur!</p>
          </div>
        </div>
        <div className="headline-item mr-3">
          <div className="headline-image">
            <img src={imgExample} alt=""/>
          </div>
          <div className="headline-title">
            <p className="bold-600 text-13 text-dark-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nulla expedita magni commodi accusantium pariatur!</p>
          </div>
        </div>
        <div className="headline-item mr-3">
          <div className="headline-image">
            <img src={imgExample} alt=""/>
          </div>
          <div className="headline-title">
            <p className="bold-600 text-13 text-dark-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nulla expedita magni commodi accusantium pariatur!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadLines