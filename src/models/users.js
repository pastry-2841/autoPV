import action from './goActions'
import services from '../services/userServices'

export default {
  namespace: 'users',
  state: {
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    },
  },

  effects: {
    ...action,
  },

  subscriptions: {
  }
}
