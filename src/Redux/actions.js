//action creators here

export const setUser = (user)=>({type:'SET_USER', payload:user})

const getUsers = (users)=>({type:'GET_USERS', payload:users})


const getInsulins = (insulins)=>({type:'GET_INSULINS', payload:insulins})

export const selectInsulin = (insulin)=>({type:'SELECT_INSULIN', payload:insulin})

const addInsulin = (insulin)=>({type:'ADD_INSULIN', payload:insulin})

export const removeInsulin = (insulin)=>({type:'REMOVE_INSULIN', payload:insulin})

const addEntry = (entry)=>({type:'ADD_ENTRY', payload:entry})

export const removeEntry = (entry)=>({type:'REMOVE_ENTRY', payload:entry})

//thunk creators here

//--------------INSULINS------------//
export const fetchInsulins = (user)=>{
  return (dispatch)=>{
    return fetch(`http://localhost:3001/api/v1/users/${user}/insulins`)
    .then(res=>res.json())
    .then((res)=>dispatch(getInsulins(res)))
    .catch(console.error)
  }
}



export const postInsulin= (newInsulin)=>{
  return (dispatch)=>{
    const options = {
      method: "POST",
      body: JSON.stringify(newInsulin),
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    return fetch(`http://localhost:3001/api/v1/users/${newInsulin.user_id}/insulins`, options)
    .then(res=>res.json())
    .then((res) => dispatch(addInsulin(res)))
    .catch(console.error)
  }
}

export const deleteInsulin= (insulinObj)=>{
  return (dispatch)=>{
    const options = {
      method: "DELETE",
    }
    return fetch(`http://localhost:3001/api/v1/users/${insulinObj.user_id}/insulins/${insulinObj.id}`, options)
  }
}


//---------------ENTRY-----------------//

export const postEntry= (newEntry)=>{
  return (dispatch)=>{
    const options = {
      method: "POST",
      body: JSON.stringify(newEntry),
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    return fetch(`http://localhost:3001/api/v1/users/${newEntry.user_id}/entries`, options)
    .then(res=>res.json())
    .then((res) => dispatch(addEntry(res)))
    .catch(console.error)
  }
}


export const deleteEntry= (entryObj)=>{
  return (dispatch)=>{
    const options = {
      method: "DELETE",
    }
    return fetch(`http://localhost:3001/api/v1/users/${entryObj.user_id}/entries/${entryObj.id}`, options)
  }
}




//-----------------USER & AUTH-----------------------------//

export const fetchUsers = ()=>{
  return (dispatch)=>{
    return fetch(`http://localhost:3001/api/v1/users`)
    .then(res=>res.json())
    .then((res)=>dispatch(getUsers(res)))
    .catch(console.error)
  }
}



export const fetchCurrentUser = (token)=>{
  return (dispatch)=>{
    const options = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token
      }}
      return fetch(`http://localhost:3001/api/v1/current_user`, options)
      .then(res => res.json())
      // .then(res=>console.log(res))
      .then((user)=>dispatch(setUser(user)))
      .catch(console.error)

  }
}
