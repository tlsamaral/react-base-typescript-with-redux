import { types } from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      console.log('Estou fazendo a requisição');
      return state;
    }
    case types.LOGIN_SUCCESS: {
      console.log('Requisição feita com successo');
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      return newState;
    }
    case types.LOGIN_FAILURE: {
      console.log('Deu erro');
      return state;
    }
    default:
      return state;
  }
}
