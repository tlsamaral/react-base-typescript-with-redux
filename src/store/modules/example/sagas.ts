import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const requisicao = () =>
  new Promise((resolve: any) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clicaBotaoSuccess());
    toast.success('Sucesso.');
  } catch {
    toast.error('Deu erro.');
    yield put(actions.clicaBotaoFailure());
  }
}

// export default all([takeLatest(types.EXEMPLE, exampleRequest)]);
