import React, {Component} from 'react';
import SockJS from 'sockjs-client';
class ChattingDocument extends Component{
    constructor(props) {
        super(props);
        this.state = {
            messages : [],
            context : "",
            topic : "코딩이야기"
        }
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
        this.handleChange = this.handleChange.bind(this);
    }

    union_arrays(array01, array02){
        if(array02 === [] && array01 === []) return [];
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

    handleChange(e){
        this.setState({ [e.target.name] : e.target.value });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let text = this.state.context;
        let topic = this.state.topic;
        let userId = this.props.currentUser.user.userId;
        this.sock.send(`addMessage\n${text}\n${userId}\n${topic}`);
        this.setState({
            context : "",
            topic : "코딩이야기"
        });
    }

    render(){
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <div className="input-group">
                                <select name="topic" value={this.state.topic} onChange={this.handleChange} className="form-control">
                                    <option value="코딩이야기">코딩이야기</option>
                                    <option value="음악이야기">음악이야기</option>
                                    <option value="먹방이야기">먹방이야기</option>
                                    <option value="일상이야기">일상이야기</option>
                                </select>
                                <input type="text" name="context" value={this.state.context} onChange={this.handleChange} className="form-control" placeholder="채팅 내용을 입력하세요..." />
                                &nbsp;&nbsp;
                                <span className="input-group-btn">
                                    <button type="submit" className="btn btn-primary">보내기</button>
                                    &nbsp;&nbsp;
                                    <button type="button" className="btn btn-info" onClick={() => this.handleClick()}>새로고침</button>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <ul className="list-group">{
                    this.state.messages.map((message, idx) => {
                        let topicTheme = "";
                        switch(message.topic){
                            case "코딩이야기" :
                                topicTheme = "list-group-item-info";
                                break;
                            case "음악이야기" :
                                topicTheme = "list-group-item-warning";
                                break;
                            case "먹방이야기" :
                                topicTheme = "list-group-item-success";
                                break;
                            case "일상이야기" :
                                topicTheme = "list-group-item-secondary";
                                break;
                            default :
                                topicTheme = "list-group-item-light";
                                break;
                        }
                        return(
                            <li className={`list-group-item ${topicTheme} d-flex justify-content-between align-items-center`} key={idx}>
                                [{message.topic}] {message.from.name} -> {message.message}
                                <span class="badge badge-primary badge-pill">{new Date(message.currentTime).toLocaleString()}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
export default ChattingDocument;