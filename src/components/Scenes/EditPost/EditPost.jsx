import React from 'react'
import Menu from '../../Generic/Menu/Menu'
import Input from '../../Generic/Input/Input'
import TextArea from '../../Generic/TextArea/TextArea'
import Button from '../../Generic/Button/Button'
import Alert from '../../Generic/Alert/Alert'
import ContentShadow from '../../Generic/ContentShadow/ContentShadow'

import './EditPost.css'

import Post from "../../Services/Post"

export default class MovieForm extends React.Component {

    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this),
        this.state = {            
            post: {},
            title: '',
            text:'',
            image:'',
            description:  ''
        }
    }

    componentDidMount(){
        return this.loadPost(this.props.match.params.id)
    }
    

    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    loadPost(id){
        debugger
        Post.getPost(id)
        .then((result) =>{
            this.setState({
                title: result.data.title,
                text: result.data.text,
                image: result.data.image,
                description: result.data.description
                
            })
        })
    }

    render() {
        return (
            <div className="PostForm">
                <div className="Menu"><Menu /></div>
                <div className="PostForm--content">
                    <ContentShadow>
                        <Input placeholder="Titulo do Post" name="title" type="text" value={this.title} handleChange={this.handleChange} label="Titulo" />
                        <TextArea placeholder="Uma breve descrição" name="description" type="text" value={this.description} handleChange={this.handleChange} label="Descrição" />
                        <TextArea placeholder="" name="text" type="text" value={this.text} handleChange={this.handleChange} label="Conteudo" />
                        <Input placeholder="Qual o url da imagem?" name="image" type="text" value={this.image} handleChange={this.handleChange} label="Imagem" />
                        <div className="pull-right">
                        <Button isOutline={true} classButton="primary" type="button" onClick={this.onPostRegisterButtonClick} text="Registrar" />
                        </div>
                    </ContentShadow>
                </div>
            </div>
        )

    }

}