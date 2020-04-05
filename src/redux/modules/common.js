
// ActionTypes
export const types = {
  CHANGE_IS_LOADING: 'COMMON/CHANGE_IS_LOGIN',
  CHANGE_IS_LOGIN: 'COMMON/CHANGE_IS_LOGIN',
  SET_USER_INFO: 'COMMON/SET_USER_INFO',
};

// State
const initState = {
  isloading: false,
  isLogin: false,
  userInfo: {},
};

// Action
export const actions = {
  changeIsloading: (value) => {
    return {
      type: types.CHANGE_IS_LOADING,
      value,
    };
  },
  changeIsLogin: (value) => {
    return {
      type: types.CHANGE_IS_LOGIN,
      value,
    };
  },
  setUserInfo: (payload) => {
    return {
      type: types.SET_USER_INFO,
      payload
    }
  }
};

// reducer
const commonReducer = (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_IS_LOADING:
      return Object.assign({}, state, {
        isloading: action.value,
      });
    case types.CHANGE_IS_LOGIN:
      return Object.assign({}, state, {
        isLogin: action.value,
      });
    case types.SET_USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.payload
      })
    default:
      return state;
  }
};

export default commonReducer;
