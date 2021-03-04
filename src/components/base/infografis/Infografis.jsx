import React from 'react'
import imgHeadline from '../../../assets/example-headline.jpeg'
import './Infografis.scope.css'

function Infografis() {
    return (
        <div>
            <div className="infografis">
                <div className="d-flex justify-content-between p-2">
                    <div className="title-header">
                        <p className="text-white m-0 text-15 bold-600">INFOGRAFIS</p>
                        <div className="line"></div>
                    </div>
                    <p className="text-white m-0 text-15 bold-600">LIHAT SEMUA</p>
                </div>
                <div className="infografis-content d-flex p2">
                    <div className="infografis-image">
                        <img src={imgHeadline} alt=""/>
                    </div>
                    <div className="content d-column">
                        <h4 className="text-white m-0 bold-600 pl-3 pr-2">INFOGRAFIS: Mereka yang Menentang Kudeta Myanmar</h4>
                        <p className="text-15 pl-3 m-0 text-gold">Internasional</p>
                        <p className="text-15 pl-3 pr-2 pt-1 m-0 text-white bold-600">Sejumlah elemen masyarakat turun ke jalan bergambung dengan gelombang demonstrasi menentang kudeta di Myanmar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infografis
