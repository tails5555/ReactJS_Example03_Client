import {ChattingDocument} from '../component/user';
import {connect} from 'react-redux';
function mapStateToProps(state){
    return{
        currentUser : state.user.current
    }
}
export default connect(mapStateToProps, null)(ChattingDocument);