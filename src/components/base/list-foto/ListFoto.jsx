import React from 'react'
import './ListFoto.scope.css'

function ListFoto() {
    return (
        <div>
            <div className="list-foto">
                <div className="d-flex justify-content-between">
                    <div className="title-header">
                        <p className="text-16 m-0 bold-600 text-white pb-2 pl-3 pt-3">FOTO</p>
                        <div className="line ml-3"></div>
                    </div>
                    <p className="text-16 bold-600 text-white p-3">LIHAT SEMUA</p>
                </div>
                <div className="list-content-image">
                    <div className="content">
                        <div className="content-image pt-2 pl-3 pb-2">
                            <img src="https://akcdn.detik.net.id/visual/2021/03/04/barcelona-vs-sevilla-1_169.jpeg?w=650&q=90" alt=""/>
                        </div>
                        <p className="text-16 bold-600 text-white pl-3 pr-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, pariatur?</p>
                        <p className="text-14 bold-400 text-white pl-3 pb-2"><span className="text-16 bold-600 text-gold">Olahraga</span> 1 Jam yang lalu</p>
                    </div>
                    <div className="content">
                        <div className="content-image pt-2 pl-3 pb-2">
                            <img src="https://akcdn.detik.net.id/visual/2021/03/04/barcelona-vs-sevilla-1_169.jpeg?w=650&q=90" alt=""/>
                        </div>
                        <p className="text-16 bold-600 text-white pl-3 pr-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, pariatur?</p>
                        <p className="text-14 bold-400 text-white pl-3 pb-2"><span className="text-16 bold-600 text-gold">Olahraga</span> 1 Jam yang lalu</p>
                    </div>
                    <div className="content">
                        <div className="content-image pt-2 pl-3 pb-2">
                            <img src="https://akcdn.detik.net.id/visual/2021/03/04/barcelona-vs-sevilla-1_169.jpeg?w=650&q=90" alt=""/>
                        </div>
                        <p className="text-16 bold-600 text-white pl-3 pr-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, pariatur?</p>
                        <p className="text-14 bold-400 text-white pl-3 pb-2"><span className="text-16 bold-600 text-gold">Olahraga</span> 1 Jam yang lalu</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListFoto
