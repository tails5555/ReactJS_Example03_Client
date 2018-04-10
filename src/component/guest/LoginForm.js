import React, {Component} from 'react';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import {renderField} from "../form";
import {userLogin, loginUserFailure, loginUserSuccess} from "../../action/user_action";
const validateAndLoginUser = (values, dispatch) => {
    return dispatch(userLogin(values))
        .then((result) => {
            if(result.payload.response && result.payload.response.status !=200){
                dispatch(loginUserFailure(result.payload.response.data));
                throw new SubmissionError(result.payload.response.data);
            }
            sessionStorage.setItem('jwtToken', result.payload.data);
            dispatch(loginUserSuccess(result.payload.data));
        })
}

class Login extends Component{
    render(){
        let loginResult;
        const {handleSubmit} = this.props;
        const {loading, error} = this.props.user;
        if(loading){
            loginResult = <p style={{color : 'red'}}>로그인을 진행하는 중입니다.</p>
        }
        if(error){
            loginResult = <p style={{color : 'red'}}>{error.message}</p>
        }
        return(
            <div className="container">
                <div className="text-center">
                    <br/>
                    <form onSubmit={handleSubmit(validateAndLoginUser)}>
                        <h2>로그인</h2>
                        <hr/>
                        <div className="form-group">
                            <Field name="userId" type="text" component={renderField} label="아이디" placeholder="아이디를 입력하세요." />
                        </div>
                        <div className="form-group">
                            <Field name="password" type="password" component={renderField} label="비밀번호" placeholder="비밀번호를 입력하세요." />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-info btn-block"><i class="fas fa-sign-in-alt"></i> 로그인</button>
                        </div>
                        <br/>
                        {loginResult}
                    </form>
                </div>
            </div>
        )
    }
}
export default reduxForm({
    form : 'loginForm'
})(Login);