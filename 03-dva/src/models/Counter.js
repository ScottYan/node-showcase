
export default {

  namespace: 'Counter',

  state: {
    value: 0
  },

  subscriptions: {

  },

  effects: {

  },

  reducers: {
    add(state, { payload }) {
      return { ...state, value: payload };
    }
  },

};
