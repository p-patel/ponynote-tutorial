const initialState = [
  {text: "Write code!"}
];


export default function notes(state=initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const addNote = text => {
  return {
    type: 'ADD_NOTE',
    text
  }
}

export const updateNote = (id, text) => {
  return {
    type: 'UPDATE_NOTE',
    id,
    text
  }
}

export const deleteNote = id => {
  return {
    type: 'DELETE_NOTE',
    id
  }
}
