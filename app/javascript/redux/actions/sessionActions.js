export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
// export const RECEIVE_SHELTER = 'RECEIVE_SHELTER'


const receiveUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    payload: user
  }
}

// const receiveShelter = shelter => {
//   return {
// 		type: RECEIVE_SHELTER,
// 		payload: shelter,
// 	};
// }


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

export const createUser = (user) =>  {
  return async (dispatch) => {

    try {
      let res = await $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user },
      })
      dispatch(receiveUser(res))
  
      console.log('signup res', res)
    } catch (err) {
      console.log('signup error', err)
    }
  }
}

export const createShelter = (shelter) =>  {
  return async (dispatch) => {

    try {
      let res = await $.ajax({
        method: "POST",
        url: "/api/shelters",
        data: { shelter },
      })
      dispatch(receiveUser(res));
  
      console.log('signup res', res)
    } catch (err) {
      console.log('signup error', err)
    }
  }
}