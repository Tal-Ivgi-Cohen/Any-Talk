import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  loadUsers,
  login,
  logout,
} from '../store/actions/userActions'
import img from '../assets/img/login.png'

class _Login extends Component {
  state = {
    msg: '',
    loginCred: {
      nickname: '',
    }
  }

  componentDidMount() {
    this.props.loadUsers()
  }

  loginHandleChange = ev => {
    const { name, value } = ev.target
    this.setState(prevState => ({
      loginCred: {
        ...prevState.loginCred,
        [name]: value
      }
    }))
  }

  doLogin = async ev => {
    ev.preventDefault()
    const { loginCred } = this.state
    const { nickname } = loginCred
    if (!nickname) {
      return this.setState({ msg: 'Please enter nickname' })
    }
    const userCreds = { nickname }
    try {
      this.props.login(userCreds)
      this.setState({ loginCred: { nickname: '' } })
      this.props.history.push('/chat')
    } catch (err) {
      this.setState({ msg: 'Login failed, try again.' })
    }
  }

  render() {
    let loginSection = (
      <div className="login-area">
        <form onSubmit={this.doLogin}>
          <select
            name="nickname"
            value={this.state.loginCred.nickname}
            onChange={this.loginHandleChange}
            className="login-form"
          >
            <option value="">Select User</option>
            {this.props.users && this.props.users.map(user => <option key={user._id} value={user.nickname}>{user.nickname}</option>)}
          </select>
          <button>Login</button>
        </form>
      </div>
    )

    const { loggedInUser } = this.props
    return (
      <div className="login">
        <h1 className="login-title">Login</h1>
        <div className="login-img">
        <img src={img} alt="login img" />
        </div>
        <p>{this.state.msg}</p>
        {loggedInUser && (
          <div className="login-user">
            <div>
              <h3>
                Welcome {loggedInUser.fullname}
              </h3>
            </div>
            <button className="logout-btn" onClick={this.props.logout}>Logout</button>
          </div>
        )}
        {!loggedInUser && loginSection}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.userModule.users,
    loggedInUser: state.userModule.loggedInUser,
  }
}
const mapDispatchToProps = {
  login,
  logout,
  loadUsers
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(_Login)
