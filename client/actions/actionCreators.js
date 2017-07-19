// increment
function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index: index
  }
}

// add comment
function addComment(postID, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postID: postID,
    author: author,
    comment: comment
}

// remove comment
function removeComment(postID, i) {
  return {
    type: 'REMOVE_COMMENT',
    i: i,
    postID: postID
  }
}
