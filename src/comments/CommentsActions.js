export const addCommet = (name, text) => {
  return {
    type: 'ADD_COMMENT',
    name,
    text,
  }
} 
