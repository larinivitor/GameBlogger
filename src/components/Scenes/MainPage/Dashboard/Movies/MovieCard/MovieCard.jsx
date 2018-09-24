import React from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Button from '../../../../../Generic/Button/Button'

import './PostCard.css'

export default class MovieCard extends React.Component {

    render() {
        return <div className="card">
        <img alt="" className="PostCard-image" src={this.props.image} />
        <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <h3 className="card-title">{this.props.description}</h3>
            <Link to={`/PostDetalhes/${this.props.id}`}>
                <Button classButton="warning" text="Detalhes" />
            </Link>
            <div className="pull-right">
                <Button classButton="danger" onClick={this.props.onClickDeleteButton} text="Excluir" />
            </div>
        </div>
    </div>
    }

}

