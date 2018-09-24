import React from 'react'

import LoginForm from '../Login/LoginForm'
import { Alert } from 'reactstrap';
import './Login.css'

const SELECTED_CONTENTS = {
    LOGIN: 'LOGIN',
    REGISTER: 'REGISTER'
}

export default class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedContent: SELECTED_CONTENTS.LOGIN
        }
    }

    setSelectedContent(content) {
        this.setState({
            selectedContent: content
        })
    }

    renderHomeContent() {
        return this.state.selectedContent === SELECTED_CONTENTS.LOGIN ? <LoginForm onLoginSuccess={this.props.onLoginSuccess} /> : undefined
    }

    render() {
        return <div className="Login">
            <div className="Login--container">
                <div className="Login--cont">
                    {this.renderHomeContent()}
                </div>
            </div>
            <div className="Login--welcome">
                Seja bem vindo ao
                <div className="Login--pageName">
                    Gamer Blog
                </div>
            </div>
        </div>
    }

}