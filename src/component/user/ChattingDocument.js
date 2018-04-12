import React, {Component} from 'react';
import SockJS from 'sockjs-client';
class ChattingDocument extends Component{
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
        //create a new socket connection
        //see documentation https://github.com/sockjs/sockjs-client#getting-started
        this.sock = new SockJS('http://localhost:8080/example03_2/echo');
        this.sock.onopen = () => {
            console.log('connection open');
        };
        this.sock.onmessage = (e) => {
            console.log('message received:', JSON.parse(e.data));
            //incoming message from server, store in state
            this.setState( { messages: this.union_arrays(this.state.messages, JSON.parse(e.data)) });
        };
        this.sock.onclose = () => {
            console.log('close');
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    union_arrays(array01, array02){
        var obj = {};
        for (var i = array01.length-1; i >= 0; -- i) {
            obj[array01[i].id] = array01[i];
        }
        for (var i = array02.length-1; i >= 0; -- i){
            obj[array02[i].id] = array02[i];
        }
        var res = [];
        for (var k in obj) {
            if (obj.hasOwnProperty(k))  // <-- optional
                res.push(obj[k]);
        }
        res.sort(function(a, b){
            return a.id > b.id ? -1 : a.id < b.id ? 1 : 0;
        });
        return res;
    }
    handleClick(){
        this.sock.send('chattingList');
    }
    handleFormSubmit(e) {
        e.preventDefault();
        let text = this.refs.messageText.value;
        let userId = this.props.currentUser.user.userId;
        this.sock.send(`addMessage\n${text}\n${userId}`);
    }
    render(){
        console.log(this.state.messages);
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <div className="input-group">
                                <input type="text" ref="messageText" className="form-control" placeholder="Type here to chat..." />
                                <span className="input-group-btn">
                                  <button type="submit" className="btn btn-primary">보내기</button>
                                  <button type="button" className="btn btn-info" onClick={() => this.handleClick()}>새로고침</button>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <ul className="list-group">{
                    this.state.messages.map((message, idx) => {
                        console.log(message);
                        return <li className="list-group-item" key={idx}>{message.from.name} > {message.message}</li>
                    })}
                </ul>
            </div>
        );
    }
}
export default ChattingDocument;