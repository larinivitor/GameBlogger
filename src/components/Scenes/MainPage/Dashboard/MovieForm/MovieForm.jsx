import React from 'react'
import Menu from '../../../../Generic/Menu/Menu'
import Input from '../../../../Generic/Input/Input'
import TextArea from '../../../../Generic/TextArea/TextArea'
import Button from '../../../../Generic/Button/Button'
import Alert from '../../../../Generic/Alert/Alert'
import ContentShadow from '../../../../Generic/ContentShadow/ContentShadow'
import Markdown from 'react-markdown'

import './PostForm.css'

import Post from "../../../../Services/Post"

const POST_SAVED_MESSAGE = 'Post inserido'

export default class MovieForm extends React.Component {

    constructor() {
        super()
        this.state = this.getInitialState()


        this.handleChange = this.handleChange.bind(this)
        this.onPostRegisterButtonClick = this.onPostRegisterButtonClick.bind(this)
    }

    getInitialState() {
        return {
            title: '',
            description: '',
            text:'',
            image: '',
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

    onPostRegisterButtonClick() {
        Post.create(this.state).then((result) => {
            this.setState(this.getInitialState())
            this.setAlert('success', POST_SAVED_MESSAGE)
        }).catch(resp => {
            this.setAlert('danger', resp.response.data.error)
        })
    }

    setAlert(type, message) {
        this.setState({
            alert: {
                type,
                message
            }
        })
    }

    renderAlert() {
        return this.state.alert ? <Alert classAlert={this.state.alert.type} text={this.state.alert.message} /> : undefined
    }

    render() {
        return (
            <div className="PostForm">
                <div className="Menu"><Menu /></div>
                <div className="PostForm--content">
                    <ContentShadow>
                        {this.renderAlert()}
                        <Input placeholder="Titulo do Post" name="title" type="text" value={this.state.title} handleChange={this.handleChange} label="Titulo" />
                        <TextArea placeholder="Uma breve descrição" name="description" type="text" value={this.state.description} handleChange={this.handleChange} label="Descrição" />
                        <TextArea placeholder="" name="text" type="text" value={this.state.text} handleChange={this.handleChange} label="Conteudo" />
                        <Input placeholder="Qual o url da imagem?" name="image" type="text" value={this.state.image} handleChange={this.handleChange} label="Imagem" />
                        <div className="pull-right">
                        <Button isOutline={true} classButton="primary" type="button" onClick={this.onPostRegisterButtonClick} text="Registrar" />
                        </div>
                    </ContentShadow>
                </div>
            </div>
        )

    }

}