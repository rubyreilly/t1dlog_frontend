const initialState = {
  user:{},
  insulins:[],
  entries: []
}

const reducer = (state = initialState, action) =>{
  switch (action.type){
    case("GET_ENTRIES"):{
      return {...state, entries:action.payload}
    }

    default:
      return state
  }
}

export {reducer}
