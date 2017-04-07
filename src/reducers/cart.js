export default(state = [], payload) => {
  switch(payload.type) {
  
    case 'ADD':
      return [...state, payload.item]
    default:
      return state;
  }
}
