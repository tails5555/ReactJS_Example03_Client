import React, {Component} from 'react';
import GuestRouter from './GuestRouter';
import UserRouter from './UserRouter';
import {BrowserRouter} from 'react-router-dom';
class ApplicationRouter extends Component{
    componentWillMount(){
        this.props.loadUserFromServer();
    }
    componentWillUnmount(){
        this.props.resetUserFromServer();
    }
    render(){
        const {status} = this.props.currentUser;
        let currentRouter;
        if(status === 'login'){
            currentRouter=<GuestRouter />
        }else {
            currentRouter=<UserRouter />
        }
        return(
            <BrowserRouter>
                {currentRouter}
            </BrowserRouter>
        )
    }
}
export default ApplicationRouter;