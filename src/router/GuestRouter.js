import React, {Component} from 'react';
import {GuestLoginPage} from "../pages";
import {Route, Redirect} from 'react-router-dom';
import {GuestMenu} from '../component/menu';
import './main.css';
const GuestRouter = () => {
    return(
        <div>
            <GuestMenu />
            <div className="mainScreen">
                <Route exact path="/user/logout" render={() => (<Redirect to="/" />)} />
                <Route exact path="/" component={GuestLoginPage}/>
            </div>
        </div>
    );
}
export default GuestRouter;