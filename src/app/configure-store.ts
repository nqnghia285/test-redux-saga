import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './root.reducer'

export default function configureReduxStore() {
   const sagaMiddleware = createSagaMiddleware()

   return {
      ...configureStore({
         reducer: rootReducer,
         middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
               immutableCheck: true,
               serializableCheck: true,
               thunk: false,
            }).concat(sagaMiddleware),
      }),
      runSaga: sagaMiddleware.run,
   }
}
