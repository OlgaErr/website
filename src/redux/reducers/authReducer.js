export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAILED = 'LOGIN_REQUEST_FAILED';
export const LOGOUT = 'LOGOUT';

export function logOut(payload) {
  return {
    type: LOGOUT
  };
}

export function loginRequestSuccess(payload) {
  return {
    type: LOGIN_REQUEST_SUCCESS,
    payload
  };
}

export function loginRequestFailed(payload) {
  return {
    type: LOGIN_REQUEST_FAILED,
    payload
  };
}

const initState = {
  isAuthenticated: true,
  user: ''
};

const resetToken = () => localStorage.clear();

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_SUCCESS:
      return { ...state,  ...action.payload }
    case LOGIN_REQUEST_FAILED:
      return { ...state,  ...action.payload }
    case LOGOUT:
        resetToken();
        return { isAuthenticated: false, user: ''}
    default:
      return state
  }
}

export default authReducer