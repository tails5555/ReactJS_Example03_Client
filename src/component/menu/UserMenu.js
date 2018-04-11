import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class UserMenu extends Component{
    render(){
        const {user, loading, error} = this.props.user;
        let hello;
        if(user){
            hello = `${user.name}님, 환영합니다.`;
        }else if(loading){
            hello = '잠시만 기다려주세요.';
        }else if(error){
            hello = '오류가 발생했습니다. 로그아웃을 진행하세요.';
        }
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
                                    <i className="fas fa-comments"></i> 채팅
                                </Link>
                            </li>
                            <li className="nav-item" onClick={() => this.props.logout()}>
                                <Link className="nav-link" to="/user/logout">
                                    <i className="fas fa-sign-out-alt"></i> 로그아웃
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">{hello}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default UserMenu;