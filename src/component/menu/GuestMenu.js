import React from 'react';
import {Link} from 'react-router-dom'
const GuestMenu = () => {
    return(
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">REACT MESSENGER EXAMPLE</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link className="nav-link" to="/">
                                <i class="fas fa-sign-in-alt"></i> 로그인
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default GuestMenu;