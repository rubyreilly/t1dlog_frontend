const initialState = {
  // users:[],
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
    // case("GET_USERS"):{
    //   return {...state, users:action.payload}
    // }
    // case("SELECT_USER"):{
    //   console.log('this is the user', state.user)
    //   return {...state, user: action.payload}
    // }
    case("ADD_ENTRY"):{
      const newInsulins = [...state.insulins].map((insulin)=>{
        if (insulin.id === action.payload.insulin_id){
          const newEntries = [action.payload,...insulin.all_associated_entries]
          return {...insulin,all_associated_entries: newEntries}
        }else{
          return {...insulin}
        }
    })

      return {...state, insulins: newInsulins}

    }

    default:
      return state
  }
}

export {reducer}
