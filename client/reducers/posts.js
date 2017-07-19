// Reducers take in an action and a copy of the current state
// Every reducer runs every time there is an action

function posts(state = [], action) {
  console.log("The post will change");
  console.log(state, action);
  return state;
}

export default posts;
