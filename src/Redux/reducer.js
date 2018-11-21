const initialState = {
  user:{},
  insulins:[],
  selectedInsulin: 4
}

const reducer = (state = initialState, action) =>{
  switch (action.type){
    case("GET_INSULINS"):{
      return {...state, insulins:action.payload}
    }
    case("SELECT_INSULIN"):{
      return {...state, selectedInsulin: action.payload}
    }

    default:
      return state
  }
}

export {reducer}
