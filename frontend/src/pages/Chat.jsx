import React, { Component } from 'react'
import { connect } from 'react-redux'
import { socketService } from '../services/socketService'
import ScrollToBottom from 'react-scroll-to-bottom'
import Avatar from '@material-ui/core/Avatar';

class _Chat extends Component {
  state = {
    msg: { txt: '' },
    msgs: [],
    topic: '',
  }

  componentDidMount() {
    socketService.setup()
    socketService.emit('chat topic', this.state.topic)
    socketService.on('chat addMsg', this.addMsg)
  }

  componentWillUnmount() {
    socketService.off('chat addMsg', this.addMsg)
    socketService.terminate()
  }

  addMsg = newMsg => {
    this.setState(prevState => ({ msgs: [...prevState.msgs, newMsg] }))
  }

  changeTopic = () => {
    socketService.emit('chat topic', this.state.topic)
  }

  sendMsg = ev => {
    ev.preventDefault()
    const from = this.props.loggedInUser?.nickname || 'Me'
    socketService.emit('chat newMsg', { from, txt: this.state.msg.txt })
    this.setState({ msg: { from: 'Me', txt: '' } })
  }

  handleChange = ev => {
    const { name, value } = ev.target
    this.setState({ [name]: value }, this.changeTopic)
  }

  msgHandleChange = ev => {
    const { name, value } = ev.target
    this.setState(prevState => {
      return {
        msg: {
          ...prevState.msg,
          [name]: value
        }
      }
    })
  }

  render() {
    return (
      <div className="chat">
        <p><span>Any talk</span> Chat</p>
        <div className="chat-label">
          <small>Press here and start to (Any)talk</small>
          <label>
            <input
              type="radio"
              name="topic"
              value="Public"
              onChange={this.handleChange}
            />
            Public
          </label>
        </div>
        <ScrollToBottom className="messages">
          {this.state.msgs.map((msg, idx) => (
            <li key={idx}>
              <div className="message">
                <Avatar className="avatar"></Avatar>
                <span className="message-txt"> {msg.from} : {msg.txt} </span>
              </div>
            </li>
          ))}
        </ScrollToBottom>
        <form className="chat-form" onSubmit={this.sendMsg}>
          <input
            type="text"
            autoComplete="off"
            className="chat-input"
            value={this.state.msg.txt}
            onChange={this.msgHandleChange}
            name="txt"
            placeholder="Enter message"
          />
          <button>Send</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.userModule.loggedInUser
  }
}
const mapDispatchToProps = {
}

export const Chat = connect(mapStateToProps, mapDispatchToProps)(_Chat)
