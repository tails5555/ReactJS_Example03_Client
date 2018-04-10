import {LoginForm} from '../component/guest';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return{
        user : state.user.current
    };
}

export default connect(mapStateToProps, null)(LoginForm);