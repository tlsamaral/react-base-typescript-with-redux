import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { loginSuccess, loginFailure, LoginRequestAction } from './actions';
import { types, ActionTypes } from '../types';

const requisicao = () =>
  new Promise((resolve: any) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

function* loginRequest(action: LoginRequestAction) {
  try {
    const { payload } = action;

    yield call(requisicao);
    yield put(loginSuccess({}));
    toast.success('Sucesso.');
  } catch {
    toast.error('Deu erro.');
    yield put(loginFailure(''));
  }
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
