import React, { Component } from 'react'
import FocusNews from '../../../base/focus-news/FocusNews'
import AllPopularNews from '../../../base/all-popular-news/AllPopularNews'
import {Link} from 'react-router-dom'
import './Ekonomi.scope.css'

class Ekonomi extends Component {
    render() {
        return (
            <div>
                <div className="container internasional-container pt-5 d-flex">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="gap-component">
                                <div className="news-header">
                                    <div className="headline">
                                        <div className="headline-title d-flex">
                                            <Link to="/nasional"><h4>EKONOMI</h4></Link>
                                            <div className="headline-title-child d-flex pl-3 pt-1 pb-3">
                                                <Link to=""><h5>Keuangan</h5></Link>
                                                <Link to=""><h5>Energi</h5></Link>
                                                <Link to=""><h5>Bisnis</h5></Link>
                                                <Link to=""><h5>Makro</h5></Link>
                                            </div>
                                        </div>
                                        <div className="img">
                                            <img src="https://akcdn.detik.net.id/visual/2021/03/04/galfot-giant-kalibata-14_169.jpeg?w=650&q=90" alt=""/>
                                        </div>
                                        <div className="details">
                                            <p className="title text-23 m-0 text-dark-gray bold-700">FOTO: Diskon Besar-besaran Giant Kalibata Jelang Tutup</p>
                                            <div className="detail-info">
                                                <p className="text-13 bold-600"><span className="text-red">Ekonomi</span> 51 detik yang lalu</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default Ekonomi
