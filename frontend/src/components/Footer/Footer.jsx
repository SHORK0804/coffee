import React from 'react'

import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
    const noDeco = {
        textDecoration: 'none',
    }
    const font = {
        fontSize: '23px',
    }
    return (
        <footer className="bg-dark text-white pt-5 pb-4 footer-with-margin">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-automt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Giới thiệu</h5>
                        <p>
                            <Link to='/menu' className='text-white' style={noDeco}>Sản phẩm</Link>
                        </p>
                    </div>
                    <div className="col-md-5 col-1g-4">
                        <div className="text-uppercase mb-4 font-weight-bold text-warning">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Liên hệ</h5>
                            <p className='text-white text-lowercase' style={noDeco}>
                                <i className="fas fa-envelope mr-3 text-white"></i>
                                 haufenix842003@gmail.com
                            </p>
                            <p className='text-white text-lowercase' style={noDeco}>
                                <i className="fas fa-phone mr-3 text-white"></i>
                                 0937252453
                            </p>
                            <li className="list-inline-item">
                                <Link to="https://www.facebook.com/duchau.nguyen.145" className="btn-floating btn-sm text-white" style={noDeco}><i className="fab
                                    fa-facebook"></i> Đức Hậu</Link>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer