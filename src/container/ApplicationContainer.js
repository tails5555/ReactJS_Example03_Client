import ApplicationRouter from '../router/ApplicationRouter';
import {connect} from 'react-redux';
import {userFromServer, userFromServerSuccess, userFromServerFailure, resetUserFromServer} from "../action/user_action";
const mapDispatchToProps = (dispatch) => {
    return {
        loadUserFromServer: () => {
            let token = sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            dispatch(userFromServer(token))
                .then((response) => {
                        if (!response.error) {
                            sessionStorage.setItem('jwtToken', token);
                            dispatch(userFromServerSuccess(response.payload));
                        } else {
                            sessionStorage.removeItem('jwtToken');
                            dispatch(userFromServerFailure(response.payload));
                        }
                    }
                );
        },
        resetUserFromServer : () => {
            sessionStorage.removeItem('jwtToken');
            dispatch(resetUserFromServer());
        }
    }
}
function mapStateToProps(state){
    return{
        currentUser : state.user.current
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationRouter);