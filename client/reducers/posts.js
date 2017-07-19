// Reducers take in an action and a copy of the current state

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;
