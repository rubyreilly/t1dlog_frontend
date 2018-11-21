//action creators here
const getEntries = (entries)=>({type:'GET_ENTRIES', payload:entries})

//thunk creators here
export const fetchEntries = ()=>{
  return (dispatch)=>{
    return fetch('http://localhost:3001/api/v1/users/1/entries')
    .then(res=>res.json())
    .then((res)=>dispatch(getEntries(res)))
    .catch(console.error)
  }
}
