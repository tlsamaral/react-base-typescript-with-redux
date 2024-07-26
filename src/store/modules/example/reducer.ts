import { types } from '../types';

const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case types.EXEMPLE: {
      console.log('Requisição feita com successo');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case 'TESTE1': {
      console.log('Deu erro');
      return state;
    }
    case 'TESTE2': {
      console.log('Estou fazendo a requisição');
      return state;
    }
    default:
      return state;
  }
}
