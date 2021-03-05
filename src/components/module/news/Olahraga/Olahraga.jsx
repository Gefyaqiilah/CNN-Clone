import React, { Component } from 'react'
import FocusNews from '../../../base/focus-news/FocusNews'
import AllPopularNews from '../../../base/all-popular-news/AllPopularNews'
import NewsUpdate from '../../../base/news-update/NewsUpdate'
import ListNewsUpdate from '../../../base/list-news-update/ListNewsUpdate'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'
import './Olahraga.scope.css'
import ListFoto from '../../../base/list-foto/ListFoto'

class Olahraga extends Component {
    state = {
        edusports: "EDUSPORTS",
        edusportsBackground: "#444444",
        edusportsTitleColor: "#FFFFFF",
        edusportsSubTitleColor: "#F5A623",
        testimoni: "TESTIMONI",
        ngobrolSports: "NGOBROL SPORTS",
        motogp: "MOTO GP",
        subTitle: "Olahraga",
        newsUpdateBackground: "#F2F4F5",
        newsUpdateTitleColor: "#444444",
        newsUpdateSubTitleColor: "#CC0000"
    }
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>CNN Indonesia | Berita Terikini Olahraga</title>
                </Helmet>
                <div className="container internasional-container pt-5 d-flex">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="gap-component">
                                <div className="news-header">
                                    <div className="headline">
                                        <div className="headline-title d-flex">
                                            <Link to="/nasional"><h4>OLAHRAGA</h4></Link>
                                            <div className="headline-title-child d-flex pl-3 pt-1 pb-3">
                                                <Link to=""><h5>Sepak Bola</h5></Link>
                                                <Link to=""><h5>Moto GP</h5></Link>
                                                <Link to=""><h5>F1</h5></Link>
                                                <Link to=""><h5>Raket</h5></Link>
                                            </div>
                                        </div>
                                        <div className="img">
                                            <img src="https://akcdn.detik.net.id/visual/2020/12/14/arsenal-vs-burnley-di-liga-inggris-9_169.jpeg?w=650" alt=""/>
                                        </div>
                                        <div className="details">
                                            <p className="title text-23 m-0 text-dark-gray bold-700">Burnley Ketagihan Hajar Arsenal di Liga Inggris</p>
                                            <div className="detail-info">
                                                <p className="text-13 bold-600"><span className="text-red">Olahraga</span> 51 detik yang lalu</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gap-component mb-5">
                                <NewsUpdate title={this.state.edusports} background={this.state.edusportsBackground} titleColor={this.state.edusportsTitleColor} subTitleColor={this.state.edusportsSubTitleColor} subTitle={this.state.subTitle} />
                            </div>
                            <div className="gap-component mb-5">
                                <ListNewsUpdate />
                            </div>
                            <div className="gap-component mb-5">
                                <NewsUpdate title={this.state.testimoni} background={this.state.newsUpdateBackground} titleColor={this.state.newsUpdateTitleColor} subTitleColor={this.state.newsUpdateSubTitleColor} subTitle={this.state.subTitle} /> 
                            </div>
                            <div className="gap-component mb-5">
                                <NewsUpdate title={this.state.ngobrolSports} background={this.state.newsUpdateBackground} titleColor={this.state.newsUpdateTitleColor} subTitleColor={this.state.newsUpdateSubTitleColor} subTitle={this.state.subTitle} /> 
                            </div>
                            <div className="gap-component mb-5">
                                <NewsUpdate title={this.state.motogp} background={this.state.newsUpdateBackground} titleColor={this.state.newsUpdateTitleColor} subTitleColor={this.state.newsUpdateSubTitleColor} subTitle={this.state.subTitle} /> 
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

export default Olahraga
