import React from 'react'
import './Footer.scoped.css'
import footLogo from '../../../assets/cnn-foot-logo.png'
function Footer ()  {
  return (
    <footer>
      <div className="footer-top">
        <div className="brand">
          <div className="logo">
            <img src={footLogo} alt=""/>
          </div>
        </div>
      </div>
      <div className="footer-middle">
        <div className="left">
          <p className="text-gray weight-r">Menyajikan berita terhangat langsung melalui handphone Anda</p>
          <p className="text-gray">DOWNLOAD SEKARANG</p>
        </div>
        <div className="middle">
          <div className="header"></div>
          <p className="text-gray">TELUSURI</p>
          <div className="nav-menu d-flex flex-wrap p-0">
            <p>Nasional</p>
            <p>Internasional</p>
            <p>Ekonomi</p>
            <p>Olahraga</p>
            <p>Teknologi</p>
            <p>Hiburan</p>
            <p>Gaya Hidup</p>
          </div>
          <button>CNN TV</button>
        </div>
        <div className="right">
          <div className="header">
            <p className="text-gray">IKUTI KAMI</p>
            <div className="social-media d-flex flex-row">
              <div className="facebook">
                <i className="fab fa-facebook-f text-white" aria-hidden="true"></i>
              </div>
              <div className="twitter">
               <i className="fab fa-twitter text-white" aria-hidden="true"></i>
              </div>
              <div className="instagram">
                <i className="fab fa-instagram text-white" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="text-gray text-center text-13 p-1">© 2021 Trans Media, CNN name, logo and all associated elements (R) and © 2021 Cable News Network, Inc. A Time Warner Company. All rights reserved. CNN and the CNN logo are registered marks of Cable News Network, Inc., displayed with permission.
Tentang Kami | Redaksi | Pedoman Media Siber | Karir | Disclaimer
CNN U.S. | CNN International | CNN en ESPAÑOL | CNN Chile | CNN México | العربية | 日本語 | Türkçe</p>
      </div>
    </footer>
  )
}

export default Footer