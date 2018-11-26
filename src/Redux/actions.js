//action creators here
const getInsulins = (insulins)=>({type:'GET_INSULINS', payload:insulins})

export const selectInsulin = (insulin)=>({type:'SELECT_INSULIN', payload:insulin})

const addEntry = (entry)=>({type:'ADD_ENTRY', payload:entry})

//thunk creators here

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


export const fetchInsulins = (user)=>{
  return (dispatch)=>{
    return fetch(`http://localhost:3001/api/v1/users/${user}/insulins`)
    .then(res=>res.json())
    .then((res)=>dispatch(getInsulins(res)))
    .catch(console.error)
  }
}
