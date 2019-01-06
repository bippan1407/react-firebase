import { fork } from 'redux-saga/effects'

import login from './login'
import register from './register'

export default function* rootSaga() {
  yield fork(login)
  yield fork(register)
}