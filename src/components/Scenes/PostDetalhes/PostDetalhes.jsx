import React from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Button from '../../Generic/Button/Button'
import Menu from '../../Generic/Menu/Menu'
import Post from '../../Services/Post'
import Markdown from 'react-markdown'

import './PostDetalhes.css'

export default class PostDetalhes extends React.Component {

    constructor() {
        
        super()
        this.state = {
            posts: [],
        }
    }

    getInitialState(){
        return{
            posts:[]
        }
    }

    componentDidMount(){
        this.loadPost(this.props.match.params.id)
    }

    loadPost(id) {
        Post.getPost(id).
        then((resp) => {
            this.setState({
                posts: resp
            })
        })
    }
    

    render(){
        const detalhar = this.state.posts
        return(
            <div className="background">
            <Menu />
                <div className="corpo">
                    <img src={detalhar.image} />
                    <div className="title"><h1>{detalhar.title}</h1></div>
                    <Markdown source={detalhar.text} />
                    <Link to= '/editpost'>
                    <Button classButton="warning" text="Editar" />
                    </Link>
                </div>
            </div>
    )
    }
}