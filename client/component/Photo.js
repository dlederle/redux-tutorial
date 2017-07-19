import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
  render() {
    const { post, i, comments } = this.props;
    return (
      <figure className="grid-figure">
      <div class="grid-photo-wrap">
        <Link to={`/view/${post.code}`}>
          <img src={post.display_src} alt={post.caption} className="grid-photo" />
        </Link>
        <CSSTransitionGroup transitionName="like"
          transitionEnterTimeout={500}
          transitionLeavetimeout={500}>
          <span key={post.likes} class="likes-heart">{post.likes}</span>
        </CSSTransitionGroup>
      </div>
      <figcaption>
        <p>{post.caption}</p>
        <div class="control-buttons">
          <button class="likes">&hearts; {post.likes}</button>
          <Link className="button" to={`/view/${post.code}`}>
          <span class="comment-count">
            <span class="speech-bubble">
            </span>
            {comments[post.code] ? comments[post.code].length : 0 }
          </span>
          </Link>
        </div>
      </figcaption>
      </figure>
    )
  }
});

export default Photo;
