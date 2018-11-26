const initialState = {
  user:1,
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
    case("ADD_ENTRY"):{
      const insulin = state.insulins.find((insulin)=> insulin.id ===action.payload.insulin_id)
      const insulinData = [...insulin.all_associated_entries, action.payload]
      return {...state, insulins:[...state.insulins, insulinData]}

    }

    default:
      return state
  }
}

export {reducer}
