import { fork } from 'redux-saga/effects'
import { loginSaga } from '~/features/login'

export default function* rootSaga() {
   yield fork(loginSaga)
}
