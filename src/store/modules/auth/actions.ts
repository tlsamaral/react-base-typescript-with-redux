import { types } from '../types';

export interface LoginRequestAction {
  type: typeof types.LOGIN_REQUEST;
  payload: { username: string; password: string };
}

export interface LoginSuccessAction {
  type: typeof types.LOGIN_SUCCESS;
  data: any;
}

export interface LoginFailureAction {
  type: typeof types.LOGIN_FAILURE;
  error: string;
}

export type LoginActions =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction;

export function loginRequest(payload: {
  username: string;
  password: string;
}): LoginRequestAction {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function loginSuccess(data: any): LoginSuccessAction {
  return {
    type: types.LOGIN_SUCCESS,
    data,
  };
}

export function loginFailure(error: string): LoginFailureAction {
  return {
    type: types.LOGIN_FAILURE,
    error,
  };
}
