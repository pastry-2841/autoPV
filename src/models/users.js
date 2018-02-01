import action from './goActions'
import services from '../services/userServices'

export default {
  namespace: 'users',
  state: {
    list: []
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    },
  },

  effects: {
    ...action,
    *getData({ payload }, { call, put }) {
      const list = yield call(services.get_node_list)
      console.log(list)
      yield put({
        type: 'save',
        payload: {
          list
        }
      })
    },
  },

  subscriptions: {
  }
}
