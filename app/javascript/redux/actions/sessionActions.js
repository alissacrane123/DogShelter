export const RECEIVE_USER = 'RECEIVE_USER'


const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    payload: user
  }
}


export const loginUser = (user) =>  {
  return async (dispatch) => {

    try {
      let res = await $.ajax({
        method: "POST",
        url: "/api/session",
        data: { user },
      })
      dispatch(receiveUser(res))
  
      console.log('login res', res)
    } catch (err) {
      console.log('login error', err)
    }
  }
}