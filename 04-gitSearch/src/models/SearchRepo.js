import { message } from 'antd'
import { searchRepoService } from '../services/repoService'

export default {

  namespace: 'searchRepo',

  state: {
    filter: '',
    pageSize: 5,
    pageIndex: 0,
    maxPageIndex: 0,
    dataSource: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *changePageSize({ payload }, { put }) {
      const defaultPageSize = 10
      let newPageSize = payload
      if (payload < 1 || payload > 200) {
        message.error('invalid page size, system will set page size to 10 automatically.', 5)
        newPageSize = defaultPageSize
      }
      yield put({ type: 'setPageSize', payload: newPageSize })
      yield put({ type: 'doSearch' })
    },
    *turnPage({ payload }, { put, select }) {
      let newPageIndex = payload - 1
      const maxPageIndex = yield select(({ searchRepo }) => searchRepo.maxPageIndex)
      if (newPageIndex < 0 || newPageIndex > maxPageIndex) {
        message.error('invalid page index, system will set page index to 1 automatically.', 5)
        newPageIndex = 0
      }
      yield put({ type: 'setPageIndex', payload: newPageIndex })
      yield put({ type: 'doSearch' })
    },
    *firstPage({ }, { put, select }) { // eslint-disable-line
      yield put({ type: 'setPageIndex', payload: 0 })
      yield put({ type: 'doSearch' })
    },
    *prevPage({ }, { put, select }) { // eslint-disable-line
      const pageIndex = yield select(({ searchRepo }) => searchRepo.pageIndex)
      if (pageIndex === 0) return
      yield put({ type: 'setPageIndex', payload: pageIndex - 1 })
      yield put({ type: 'doSearch' })
    },
    *nextPage({ }, { put, select }) { // eslint-disable-line
      const pageIndex = yield select(({ searchRepo }) => searchRepo.pageIndex)
      const maxPageIndex = yield select(({ searchRepo }) => searchRepo.maxPageIndex)
      if (pageIndex === maxPageIndex) return
      yield put({ type: 'setPageIndex', payload: pageIndex + 1 })
      yield put({ type: 'doSearch' })
    },
    *lastPage({ }, { put, select }) { // eslint-disable-line
      const maxPageIndex = yield select(({ searchRepo }) => searchRepo.maxPageIndex)
      yield put({ type: 'setPageIndex', payload: maxPageIndex })
      yield put({ type: 'doSearch' })
    },
    *doSearch({ }, { call, put, select }) {  // eslint-disable-line
      const filter = yield select(({ searchRepo }) => searchRepo.filter)
      const pageSize = yield select(({ searchRepo }) => searchRepo.pageSize)
      const pageIndex = yield select(({ searchRepo }) => searchRepo.pageIndex)
      if (filter === '') {
        message.error('filter can not be empty', 5)
        return
      }
      const dataSource = yield call(searchRepoService, { pageSize, pageIndex, filter })
      if (dataSource.err) {
        message.error(`doSearch service failed, error message is: ${dataSource.err.message}`, 5)
      } else {
        yield put({ type: 'searchComplete', payload: dataSource })
      }
    },
  },

  reducers: {
    setFilter(state, { payload }) {
      return { ...state, filter: payload };
    },
    setPageSize(state, { payload }) {
      return { ...state, pageSize: payload }
    },
    setPageIndex(state, { payload }) {
      return { ...state, pageIndex: payload }
    },
    searchComplete(state, { payload }) {
      const maxPageIndex = Math.ceil(payload.data.total_count / state.pageSize) - 1
      return { ...state, dataSource: payload.data, maxPageIndex }
    }
  },

};
