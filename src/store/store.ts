import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './sagas/index';

const sagaMiddleWare = createSagaMiddleware();

export default configureStore({
  reducer: {
  },
  middleware: [sagaMiddleWare],
});

rootSagas.map(sagaMiddleWare.run);