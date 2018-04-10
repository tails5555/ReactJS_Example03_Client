import {UserMenu} from "../component/menu";
import {logoutUser} from "../action/user_action";
import {connect} from 'react-redux';
function mapStateToProps(state){
    return{
        user : state.user.current
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        logout : () => {
            let token = sessionStorage.getItem('jwtToken');
            if (!token || token === '') return;
            sessionStorage.removeItem('jwtToken');
            dispatch(logoutUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);