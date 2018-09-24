import React from 'react'
import Menu from '../../../../Generic/Menu/Menu'
import MovieCard from './MovieCard/MovieCard'
import Modal from '../../../../Generic/Modal/Modal'
import Post from '../../../../Services/Post'
import Login from '../../../../Services/Login'
import LoginPage from '../../../Login/Login'
import './Postagens.css'

export default class Postagens extends React.Component {

    constructor() {
        super()
        this.state = {
            posts: [],
            selectedPost: {},
            selectedPostToDelete: {}  
        }

        this.onClickDeleteButton = this.onClickDeleteButton.bind(this)
        this.onClickDescriptionButton = this.onClickDescriptionButton.bind(this)
        this.onCloseModalselectedPost = this.onCloseModalselectedPost.bind(this)
        this.onCloseModalselectedPostToDelete = this.onCloseModalselectedPostToDelete.bind(this)
        this.deletePost = this.deletePost.bind(this)
    }

    componentDidMount(){
        this.loadPost()
    }

    onClickDeleteButton(selectedPostToDelete) {
        this.setState({
            selectedPostToDelete
        })
    }

    onClickDescriptionButton(selectedPost) {
        this.setState({
            selectedPost
        })
    }


    deletePost(id) {
        Post.delete(id).then(() => {
            this.loadPost()
        }).finally(() => {
            this.onCloseModalselectedPostToDelete()
        })
    }

    loadPost() {
        Post.myPosts().then((resp) => {
            this.setState({
                posts: resp
            })
        })
    }

    renderPosts() {
        if (this.state.posts.length) {
            const posts = this.state.posts.map((post) => {
                return <div key={post.id} className="Movies--item">
                    <MovieCard
                        id={post.id}
                        image= {post.image}
                        title= {post.title}
                        description = {post.description}
                        text= {post.text}
                        onClickDeleteButton={() => this.onClickDeleteButton(post)}
                        onClickDescriptionButton={() => this.onClickDescriptionButton(post)}
                    />
                </div>
            })
            return <div className="Movies--content">
                {posts}
            </div>
        }
        return <div className="Movies--empty">
          <div className="Movies--empty--text"><h1>Oops!</h1> Você ainda não possui posts cadastrados</div>
        </div>
    }

    onCloseModalselectedPost() {
        this.setState({
            selectedPost: {}
        })
    }

    onCloseModalselectedPostToDelete() {
        this.setState({
            selectedPostToDelete: {}
        })
    }

    render() {
            return <div className="Movies">
                <Menu />
                <Modal show={this.state.selectedPostToDelete.text}
                    text={`Deseja excluir o post ${this.state.selectedPostToDelete.title} ?`}
                    title="Confirmação"
                    onClose={this.onCloseModalselectedPostToDelete}
                    classButtonAction="danger"
                    onClickButtonAction={() => this.deletePost(this.state.selectedPostToDelete.id)}
                    textButtonAction="Excluir"
                />
                {this.renderPosts()}
            </div>
    }

}