import { testHttp } from '@/services/home'

// ActionTypes
export const types = {
  SET_USER_INFO: 'COMMON/SET_USER_INFO',
  SET_TEST_INFO: 'COMMON/SET_TEST_INFO',
  SET_IS_LOADING: 'COMMON/SET_IS_LOADING',
};

// State
const initState = {
  userInfo: {},
  testInfo: {},
  isLoading: false
};

// Action
export const actions = {
  setUserInfo: (payload) => {
    return {
      type: types.SET_USER_INFO,
      payload
    }
  },
  testAction: (payload) => {
    return {
      type: types.SET_TEST_INFO,
      payload
    }
  },
  testActionSend: (param) => {
    return (dispatch, getState) => {
      return testHttp(param).then(res => {
        const action = actions.testAction(res.data)
        dispatch(action)
      })
    }
  },
  changeIsloading: (payload) => {
    return {
      type: types.SET_IS_LOADING,
      payload
    }
  }
};

// reducer
const commonReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.payload
      })
    case types.SET_TEST_INFO:
      return Object.assign({}, state, {
        testInfo: action.payload
      })
    case types.SET_IS_LOADING:
      return Object.assign({}, state, {
        isLoading: action.payload
      })
    default:
      return state;
  }
};

export default commonReducer;
