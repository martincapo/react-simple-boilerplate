import React, {Component} from 'react';

class ChatBar extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleKeyPress = (event) => {
    //console.log(this.props);
    if(event.key == 'Enter'){
      this.props._addMessage(this.state);
      this.setState({value: ''});
    }
  }


  render() {
    console.log("Rendering <ChatBar/>");
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER"
          onKeyPress={(e) => this.handleKeyPress(e)}
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        />
      </footer>
    );
  }
}


export default ChatBar;