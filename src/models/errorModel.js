import goActions from './goActions'
import services from '../services/userServices'

export default {
  namespace: 'error',
  state: {
    error: undefined
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload}
    },
  },

  effects: {
  },

  subscriptions: {
  }
}
