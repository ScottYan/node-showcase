import { routerRedux } from 'dva/router'
import { loadCustomer } from '../services/app'

export default {

  namespace: 'app',

  state: {
    isLogin: false,
    preLocation: '',
    customer: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      dispatch({ type: 'initCustomer' })
    },
  },

  effects: {
    *initCustomer(p, { call, put }) {
      const data = yield call(loadCustomer)
      yield put({ type: 'setCustomerData', payload: data })
    },
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *redirect({ payload }, { put }) {
      yield put(routerRedux.push(payload))
    },
    *login(p, { select, put }) {
      const preLocation = yield select(({ app }) => app.preLocation)
      yield put({ type: 'setLogin', payload: true })
      yield put({ type: 'redirect', payload: preLocation })
    },
    *logout(p, { put }) {
      yield put({ type: 'setPreLocation', payload: '' })
      yield put({ type: 'setLogin', payload: false })
      yield put({ type: 'redirect', payload: '/login' })
    }
  },

  reducers: {
    setPreLocation(state, { payload }) {
      return { ...state, preLocation: payload }
    },
    setLogin(state, { payload }) {
      return { ...state, isLogin: payload };
    },
    setCustomerData(state, { payload }) {
      return { ...state, customer: payload }
    }
  },

};
