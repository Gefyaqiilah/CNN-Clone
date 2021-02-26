import './NewsCovid.scoped.css'

function Covid () {
  return (
    <div className="news-covid p-2">
        <div className="header row m-0">
          <div className="title1 col-lg-6 p-0 d-flex align-items-center justify-content-between">
            <p className="text-16 bold-700 text-dark-gray border-b-red title-covid">PERKEMBANGAN COVID-19</p>
            <p>|</p>
          </div>
          <div className="title2 col-lg-6 d-flex p-0 pl-1 align-items-center">
            <p className="text-16 bold-700 text-red text-dark-gray">KASUS</p>
            <p className="text-16 bold-700 ml-3 text-dark-gray">PETA PERSEBARAN</p>
          </div>

        </div>
        <div className="content p-2">
          <div className="cases row">
            <div className="country col-lg-3 d-flex flex-column justify-content-end">
                <p></p>
                <p className="bold-700 text-15 country-indonesia text-dark-gray">Indonesia</p>
                <p className="bold-700 text-15 country-world text-dark-gray">Seluruh Dunia</p>
            </div>
            <div className="active-case col-lg-3">
              <p className="text-15 bold-700 text-red text-center text-dark-gray">Kasus Positif</p>
              <p className="active-case-indonesia text-center text-40 m-0 text-dark-gray bold-600">1,306,141</p>
              <p className="active-case-world text-center text-25 text-dark-gray">1,306,141</p>
            </div>
            <div className="death-case col-lg-3">
              <p className="text-15 bold-700 text-red text-center text-dark-gray">Meninggal Dunia</p>
              <p className="death-case-indonesia text-center text-40 m-0 text-dark-gray bold-600">1,306,141</p>
              <p className="death-case-world text-center text-25 text-dark-gray">1,306,141</p>
            </div>
            <div className="recovered-case col-lg-3">
              <p className="text-15 bold-700 text-red text-center text-dark-gray">Kasus Sembuh</p>
              <p className="recovered-case-indonesia text-center text-40 m-0 text-dark-gray bold-600">1,306,141</p>
              <p className="recovered-case-world text-center text-25 text-dark-gray">1,306,141</p>
            </div>
          </div>
        </div>
        <div className="footer mt-2 p-2">
          <p className="text-12 font-italic">Data per 24 Februari 2021 pukul 15.50 WIB. Sumber: Kementerian Kesehatan Republik Indonesia, WHO.</p>
        </div>
    </div>
  )
}

export default Covid