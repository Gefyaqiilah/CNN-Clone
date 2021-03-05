import React, { Component } from 'react'
import imgHeadline from '../../../../assets/example-headline2.jpeg'
import FocusNews from '../../../base/focus-news/FocusNews'
import AllPopularNews from '../../../base/all-popular-news/AllPopularNews'
import ListNewsUpdate from '../../../base/list-news-update/ListNewsUpdate'
import Infografis from '../../../base/infografis/Infografis'
import Foto from '../../../base/foto/Foto'
import {Link} from 'react-router-dom'
import './Internasional.scope.css'

class Internasional extends Component {
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
                                            <Link to="/nasional"><h4>INTERNASIONAL</h4></Link>
                                            <div className="headline-title-child d-flex pl-3 pt-1 pb-3">
                                                <Link to=""><h5>Asean</h5></Link>
                                                <Link to=""><h5>Asia Pasifik</h5></Link>
                                                <Link to=""><h5>Timur Tengah</h5></Link>
                                                <Link to=""><h5>Eropa Amerika</h5></Link>
                                            </div>
                                        </div>
                                        <div className="img">
                                            <img src={imgHeadline} alt=""/>
                                        </div>
                                        <div className="details">
                                            <p className="title text-23 m-0 text-dark-gray bold-700">PBB: Pandemi Picu Kemiskinan Amerika Latin di Level Terburuk</p>
                                            <div className="detail-info">
                                                <p className="text-13 bold-600"><span className="text-red">Internasional</span> 51 detik yang lalu</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gap-component mb-5">
                                <Infografis />
                            </div>
                            <div className="gap-component mb-5">
                                <ListNewsUpdate />
                            </div>
                            <div className="gap-component mb-5">
                                <Foto />
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

export default Internasional