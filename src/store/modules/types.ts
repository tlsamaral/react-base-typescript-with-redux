export const types = {
  EXEMPLE: '',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
} as const;

type Types = typeof types;
export type ActionTypes = Types[keyof Types];
