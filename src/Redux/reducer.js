const initialState = {
  auth: { currentUser: {user_id:1,username:'kt', password:'password'} },

  insulins:[],
  selectedInsulin: 4
}

const reducer = (state = initialState, action) =>{
  switch (action.type){
    case("SET_USER"):{

      const currentUser = { currentUser: action.payload }
      console.log("CURRENT USER:", currentUser)
      return {...state, auth:{currentUser}}

    }
    case("GET_INSULINS"):{
      return {...state, insulins:action.payload}
    }
    case("SELECT_INSULIN"):{
      return {...state, selectedInsulin: action.payload}
    }
    case("REMOVE_ENTRY"):{
      const newInsulins = [...state.insulins].map((insulin)=>{
        if (insulin.id === action.payload.insulin_id){
          const newEntries = [...insulin.all_associated_entries].filter((entry)=>{
            return entry !== action.payload
          })
          return {...insulin, all_associated_entries: newEntries}
        }else{
          return {...insulin}
        }
      }
    )
      return {...state, insulins: newInsulins}
    }
    case("ADD_ENTRY"):{
      const newInsulins = [...state.insulins].map((insulin)=>{
        if (insulin.id === action.payload.insulin_id){
          const newEntries = [action.payload,...insulin.all_associated_entries]
          return {...insulin,all_associated_entries: newEntries}
        }else{
          return {...insulin}
        }
      }
    )
      return {...state, insulins: newInsulins}
    }

    case("REMOVE_INSULIN"):{
      const newInsulins = [...state.insulins].filter((insulin)=>{
        return insulin !== action.payload
          })
      return {...state, insulins: newInsulins}
    }

    case("ADD_INSULIN"):{
      const newInsulins = [...state.insulins, action.payload]
      return {...state, insulins: newInsulins}
    }

    default:
      return state
  }
}

export {reducer}
