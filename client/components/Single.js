import React, { Component } from 'react';

import Photo from './Photo';
import Comment from './Comments'

import {Link} from 'react-router'

export class Single extends Component {

    render() {
        const i = this.props.posts.findIndex( (post) => post.code === this.props.params.postId)
        const post = this.props.posts[i]

        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props}/>
                <Comment />
            </div>
        )
    }
}

export default Single
