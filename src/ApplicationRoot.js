import React, {Component} from 'react';
import ApplicationContainer from "./container/ApplicationContainer";
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
const store=configureStore();
class ApplicationRoot extends Component{
    render(){
        return(
            <Provider store={store}>
                <ApplicationContainer />
            </Provider>
        )
    }
}

export default ApplicationRoot;