import goActions from './goActions'
import services from '../services/userServices'

export default {
  namespace: 'ui',
  state: {
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    },
  },

  effects: {
  },
  subscriptions: {
  }
}
