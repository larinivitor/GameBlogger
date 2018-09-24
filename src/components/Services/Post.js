import CONFIG from '../../config'
import axios from 'axios'
import Card from '../Scenes/MainPage/Dashboard/Movies/MovieCard/MovieCard'
import Login from './Login'

export default class Post {

    getHeader() {
        return {
            authorization: Login.getLoggedUser(),
            'Content-Type': 'application/json',
        }
    }

    static create(post) {
        return axios.post(`${CONFIG.API_URL_BASE}/post`,
            {
                'title': post.title,
                'description': post.description,
                'text': post.text,
                'image': post.image
            },
            {
                headers: {
                    authorization: Login.getLoggedUser(),
                    'Content-Type': 'application/json',
                }
            }

        )
    }

    static myPosts() {
        const token = Login.getLoggedUser()
            return axios.get(`${CONFIG.API_URL_BASE}/posts/victorugo.godinho`,
                {
                    headers: {
                        authorization: token,
                        'Content-Type': 'application/json',
                    }
                }
            ).then((resultPosts) => {
                return resultPosts.data.posts.map((post) => {
                    
                    return post
                })
            })
    }

    static getPost(id) {
        const token = Login.getLoggedUser()
            return axios.get(`${CONFIG.API_URL_BASE}/post/victorugo.godinho/${id}`,
                {
                    headers: {
                        authorization: token,
                        'Content-Type': 'application/json',
                    }
                }
            ).then((resultPosts) => {
                return resultPosts.data
            })
    }

    static delete(id) {
        const IdDoPost = id
        return axios.delete(`${CONFIG.API_URL_BASE}/post/${IdDoPost}`,
            {
                headers: {
                    authorization: Login.getLoggedUser(),
                    'Content-Type': 'application/json',
                }
            }

        )
    }

    static editPost(post) {
        return axios.put(`${CONFIG.API_URL_BASE}/post/${post.id}`,
            {
                id: post.id,
                title: post.title,
                description: post.description,
                text: post.text,
                category: post.category,
                image: post.img
            },
            {
                 headers: {
                      authorization: localStorage.getItem('tokenUser'),
                      'Content-Type': 'application/json'
                 }
            }
        )
     }
}
