

export const addContact=(contact)=>{
  alert(contact)
  return{
    type:'ADD_CONTACT',
    payload: contact
  }
  
}