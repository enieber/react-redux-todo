const types = {
  add: 'ADD',
};

export const addItem = (item) => {
  return {
    type: types.add,
    item
  }
} 

export default function reducer(state = [], payload) {
  switch(payload.type) {
  
    case types.add:
      return [...state, payload.item]
    default:
      return state;
  }
}

