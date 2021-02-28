import './CNBCNews.scoped.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import imageExample from '../../../assets/example-headline.jpeg';
import cnbcLogo from '../../../assets/cnbc.png';

function CNBCNews () {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="cnbc-news" animation="cubeAnimation">
      <div className="header d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src={cnbcLogo} alt=""/>
        </div>
        <i className="fa fa-chevron-right text-blue"></i>
      </div>
      <div className="list-image">
        <AutoplaySlider play={true} cancelOnInteraction={true}>
          <div data-src={imageExample}><p className="title-item">awdawdawd</p></div>
          <div data-src={imageExample}></div>
          <div data-src={imageExample}></div>
        </AutoplaySlider>
      </div>
    </div>
  ) 
}

export default CNBCNews