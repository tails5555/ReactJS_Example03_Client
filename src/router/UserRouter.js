import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import UserMenuContainer from '../container/UserMenuContainer';
import './main.css';
const UserRouter = () => {
    return(
        <div>
            <UserMenuContainer />
            <div className="mainScreen">
                <Route exact path="/user/logout" render={() => (<Redirect to="/" />)} />
                <Route exact path="/" />
            </div>
        </div>
    );
}
export default UserRouter;