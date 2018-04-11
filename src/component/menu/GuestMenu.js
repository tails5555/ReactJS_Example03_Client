import React from 'react';
import {Link} from 'react-router-dom'
const GuestMenu = () => {
    return(
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">REACT MESSENGER EXAMPLE</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="fas fa-sign-in-alt"></i> 로그인
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default GuestMenu;