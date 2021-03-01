import React, {Component} from 'react'
import imgHeadline from '../../../../assets/example-headline.jpeg'
import FocusNews from '../../../base/focus-news/FocusNews'
import NewsUpdate from '../../../base/news-update/NewsUpdate'
import ListNewsUpdate from '../../../base/list-news-update/ListNewsUpdate'
import {Link} from 'react-router-dom'
import './Nasional.scoped.css'
import AllPopularNews from '../../../base/all-popular-news/AllPopularNews'
import Video from '../../../base/video/video'

class Nasional extends Component {
    state = {
        newsUpdateTitle: "BERITA DAERAH TERBARU",
        suaraArusBawahTitle: "SUARA ARUS BAWAH",
        analisisTitle: "ANALISIS & FEATURE",
        suaraArusBawahBackground: "#444444",
        newsUpdateBackground: "#F2F4F5",
        newsUpdateTitleColor: "#444444",
        suaraArusBawahTitleColor: "#FFFFFF",
        newsUpdateSubTitleColor: "#CC0000",
        suaraArusBawahSubTitleColor: "#F5A623"
    }
    
    render() {
        return (
            <div>
                <div className="container nasional-container pt-5 d-flex">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="gap-component">
                                <div className="news-header">
                                    <div className="headline">
                                        <div className="headline-title d-flex">
                                            <Link to="/news/nasional"><h4>NASIONAL</h4></Link>
                                            <div className="headline-title-child d-flex pl-3 pt-1 pb-3">
                                                <Link to=""><h5>Politik</h5></Link>
                                                <Link to=""><h5>Hukum & Kriminal</h5></Link>
                                                <Link to=""><h5>Peristiwa</h5></Link>
                                            </div>
                                        </div>
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
                                </div>
                            </div>
                            <div className="gap-component mb-5">
                                <NewsUpdate title={this.state.newsUpdateTitle} background={this.state.newsUpdateBackground} titleColor={this.state.newsUpdateTitleColor} subTitleColor={this.state.newsUpdateSubTitleColor} /> 
                            </div>
                            <div className="gap-component mb-5">
                                <ListNewsUpdate />
                            </div>
                            <div className="gap-component mb-5">
                                <NewsUpdate title={this.state.suaraArusBawahTitle} background={this.state.suaraArusBawahBackground} titleColor={this.state.suaraArusBawahTitleColor} subTitleColor={this.state.suaraArusBawahSubTitleColor} /> 
                            </div>
                            <div className="gap-component mb-5">
                                <NewsUpdate title={this.state.analisisTitle} background={this.state.newsUpdateBackground} titleColor={this.state.newsUpdateTitleColor} subTitleColor={this.state.newsUpdateSubTitleColor} /> 
                            </div>
                            <div className="gap-component mb-5">
                                <Video />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="gap-component mb-5">
                                <FocusNews />
                            </div>
                            <div className="gap-component mb-5">
                                <AllPopularNews />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nasional