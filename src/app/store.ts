import configureReduxStore from './configure-store'
import rootSaga from './root.saga'

export const store = configureReduxStore()
store.runSaga(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
