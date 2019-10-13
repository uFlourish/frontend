import React, { Component } from 'react';

class ChatPage extends Component {
  constructor(props) {
    super(props);
      this.state = {
        messages: [],
        typedMessage: ""
      };
    }

    render() {

      const submission = this.state.typedMessage;

      return(
        <div>
          <ChatBody messages={this.state.messages} />
          <form onSubmit={this.onSubmit}>
                <textarea onChange={this.onChange} name="typedMessage" type="text" value={submission} placeholder="send a message..." />
                <button type="submit">Send</button>
          </form>
        </div>
      )
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        event.preventDefault()
    }

    onSubmit = event => {
        
        this.setState(state => {

            const messages = state.messages.concat(state.typedMessage)

            return(
              {
                messages: messages,
                typedMessage: ""
              }
            )
            
        });
        event.preventDefault()
    }
}

class ChatBody extends Component {
    constructor(props) {
        super(props);
    }

   // chatBoxes() { return this.props.messages.map((message, index) => <Message key={index} messageObject={message} /> );}
    
      render() {

        return (
            <div className="chatScreen">

              {this.props.messages.map((message, index) => {
                return(
                  <div key={String(index)}><UserMessage text={message} /></div>
                )
              })}
            </div>
          );
      }
} 

const Message = (messageObject) => {
    return (messageObject.isUserMessage ? <UserMessage text={messageObject.text} /> : <BotMessage text={messageObject.text} />);
}

const UserMessage = (text) => {
    return(
        <div className="rightChatSection">
            <div className="youChat">{text}</div>
        </div>
    )
}

const BotMessage = (text) => {
    return(
        <div className="leftChatSection">
            <div className="botChat">
              {text}
            </div>
        </div>
    )
}

export default ChatPage;

export { ChatBody };