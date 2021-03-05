import React, { Component } from 'react'
import ListFoto from '../../../base/list-foto/ListFoto'
import FocusNews from '../../../base/focus-news/FocusNews'
import AllPopularNews from '../../../base/all-popular-news/AllPopularNews'
import NewsUpdate from '../../../base/news-update/NewsUpdate'
import ListNewsUpdate from '../../../base/list-news-update/ListNewsUpdate'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'
import './Teknologi.scope.css'

class Teknologi extends Component {
    state = {
        subTitle: "Teknologi",
        drivepit: "DRIVE PIT",
        tipsTeknologi: "TIPS TEKNOLOGI",
        pijar: "PIJAR",
        tipsOtomotif: "TIPS OTOMOTIF",
        darkBackground: "#444444",
        darkTitleColor: "#FFFFFF",
        darkSubTitleColor: "#F5A623",
        newsUpdateBackground: "#F2F4F5",
        newsUpdateTitleColor: "#444444",
        newsUpdateSubTitleColor: "#CC0000"
    }
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>CNN Indonesia | Berita Terikini Teknologi</title>
                </Helmet>
                <div className="container internasional-container pt-5 d-flex">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="gap-component">
                                <div className="news-header">
                                    <div className="headline">
                                        <div className="headline-title d-flex">
                                            <Link to="/nasional"><h4>TEKNOLOGI</h4></Link>
                                            <div className="headline-title-child d-flex pl-3 pt-1 pb-3">
                                                <Link to=""><h5>Teknologi Informasi</h5></Link>
                                                <Link to=""><h5>Sains</h5></Link>
                                                <Link to=""><h5>Telekomunikasi</h5></Link>
                                                <Link to=""><h5>Otomotif</h5></Link>
                                            </div>
                                        </div>
                                        <div className="img">
                                            <img src="https://akcdn.detik.net.id/visual/2021/03/04/mengubah-racun-kalajengking-menjadi-cuan-3_169.jpeg?w=650&q=90" alt=""/>
                                        </div>
                                        <div className="details">
                                            <p className="title text-23 m-0 text-dark-gray bold-700">FOTO: Mengubah Racun Kalajengking Menjadi Cuan</p>
                                            <div className="detail-info">
                                                <p className="text-13 bold-600"><span className="text-red">Teknologi</span> 51 detik yang lalu</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gap-component mb-5">
                                <NewsUpdate title={this.state.drivepit} background={this.state.darkBackground} titleColor={this.state.darkTitleColor} subTitleColor={this.state.darkSubTitleColor} subTitle={this.state.subTitle} />
                            </div>
                            <div className="gap-component mb-5">
                                <ListNewsUpdate />
                            </div>
                            <div className="gap-component mb-5">
                                <NewsUpdate title={this.state.tipsTeknologi} background={this.state.darkBackground} titleColor={this.state.darkTitleColor} subTitleColor={this.state.darkSubTitleColor} subTitle={this.state.subTitle} />
                            </div>
                            <div className="gap-component mb-5">
                                <NewsUpdate title={this.state.pijar} background={this.state.darkBackground} titleColor={this.state.darkTitleColor} subTitleColor={this.state.darkSubTitleColor} subTitle={this.state.subTitle} />
                            </div>
                            <div className="gap-component mb-5">
                                <NewsUpdate title={this.state.tipsOtomotif} background={this.state.newsUpdateBackground} titleColor={this.state.newsUpdateTitleColor} subTitleColor={this.state.newsUpdateSubTitleColor} subTitle={this.state.subTitle} />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="gap-component mb-5">
                                <FocusNews />
                            </div>
                            <div className="gap-component mb-5">
                                <ListFoto subTitle={this.state.subTitle} />
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

export default Teknologi
