import React from 'react';
import Photo from './Photo.js';
import Comments from './Comments.js';

const Single = React.createClass({
  render() {
    // postID is from the URL string, provided through react-router
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex((post) => post.code === postId);

    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props } />
        <Comments postComments={postComments} />
      </div>
    )
  }
});

export default Single;
