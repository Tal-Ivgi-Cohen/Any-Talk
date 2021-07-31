import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    loadUsers,
    signup
} from '../store/actions/userActions'
import img from '../assets/img/signup.jpg'

class _SignUp extends Component {
    state = {
        signupCred: {
            nickname: '',
            password: '',
            fullname: ''
        }
    }

    componentDidMount() {
        this.props.loadUsers()
    }

    signupHandleChange = ev => {
        const { name, value } = ev.target
        this.setState(prevState => ({
            signupCred: {
                ...prevState.signupCred,
                [name]: value
            }
        }))
    }

    doSignup = async ev => {
        ev.preventDefault()
        const { nickname, password, fullname } = this.state.signupCred
        if (!nickname || !password || !fullname) {
            return this.setState({ msg: 'All inputs are required' })
        }
        const signupCreds = { nickname, password, fullname }
        this.props.signup(signupCreds)
        this.setState({ signupCred: { nickname: '', password: '', fullname: '' } })
    }

    render() {
        let signupSection = (
            <form className="frm" onSubmit={this.doSignup}>
                <h2>Signup</h2>
                <input
                    type="text"
                    name="fullname"
                    value={this.state.signupCred.fullname}
                    onChange={this.signupHandleChange}
                    placeholder="Full name"
                    autoComplete="fullname"
                />
                <input
                    name="password"
                    type="password"
                    value={this.state.signupCred.password}
                    onChange={this.signupHandleChange}
                    placeholder="Password"
                    autoComplete="current-password"
                />
                <input
                    type="text"
                    name="nickname"
                    value={this.state.signupCred.nickname}
                    onChange={this.signupHandleChange}
                    placeholder="Nickname"
                    autoComplete="nickname"
                />
                <br />
                <button>Signup</button>
            </form>
        )

        const { loggedInUser } = this.props
        return (
            <div className="signup-area">
                <h1 className="signup-title">Sign Up</h1>
                <div className="signup-img">
                    <img src={img} alt="login img" />
                </div>
                {/*<p>{this.state.msg}</p>*/}
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
                {!loggedInUser && signupSection}
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
    signup,
    loadUsers
}

export const SignUp = connect(mapStateToProps, mapDispatchToProps)(_SignUp)
