import React from 'react'

import Button from '../../Generic/Button/Button'
import { Switch, Route, Redirect, Link } from 'react-router-dom'

import Input from '../../Generic/Input/Input'
import Alert from '../../Generic/Alert/Alert'
import LoginService from '../../Services/Login'

export default class LoginForm extends React.Component {

    constructor() {
        super()
        this.state = this.getInitialState()
        this.handleChange = this.handleChange.bind(this)
        this.onLoginButtonClick = this.onLoginButtonClick.bind(this)
    }

    getInitialState() {
        return {
            email: '',
            password: '',
        }
    }

    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    onLoginButtonClick() {
        LoginService.login(this.state.email, this.state.password).
        then((result) => {
            this.props.onLoginSuccess()
        }).catch(resp => {
            /*this.setState({
                error: resp.data.error
            })*/
        })
    }

    renderError() {
        return this.state.error ? <Alert classAlert="danger" text={this.state.error} /> : undefined
    }

    render() {
        return (
            <div>
                {this.renderError()}
                <Input placeholder="Digite seu e-mail" name="email" type="text" handleChange={this.handleChange} label="Email" />
                <Input placeholder="Digite sua senha" name="password" type="password" handleChange={this.handleChange} label="Senha" />
                <div className="pull-right">
                    <Link to = '/home'>
                    <Button classButton="warning" type="button" onClick={this.onLoginButtonClick} text="Login" />
                    </Link>
                </div>
            </div>
        )
    }

}