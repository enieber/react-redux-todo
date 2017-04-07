export default(state = [], payload) => {
  console.log(payload)
  switch(payload.type) {
    case 'ADD_COMMENT':
    let comment = {name:  payload.name, text: payload.text}
      return [...state, comment]
    default:
      return state;
  }
}
