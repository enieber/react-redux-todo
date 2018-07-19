const types = {
  addCommet: 'ADD_COMMENT',
};

export const addCommet = (name, text) => {
  return {
    type: types.addCommet,
    name,
    text,
  }
} 

export default function reducer(state = [], payload) {
  switch(payload.type) {
    case types.addCommet:
    let comment = {name:  payload.name, text: payload.text}
      return [...state, comment]
    default:
      return state;
  }
}
