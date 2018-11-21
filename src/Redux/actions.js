//action creators here
const getInsulins = (insulins)=>({type:'GET_INSULINS', payload:insulins})

export const selectInsulin = (insulin)=>({type:'SELECT_INSULIN', payload:insulin})

//thunk creators here
export const fetchInsulins = ()=>{
  return (dispatch)=>{
    return fetch(`http://localhost:3001/api/v1/users/1/insulins`)
    .then(res=>res.json())
    .then((res)=>dispatch(getInsulins(res)))
    .catch(console.error)
  }
}
