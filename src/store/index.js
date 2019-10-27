import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [{
      imgSrc: 'https://i.ibb.co/GTGVr7G/cat.png',
      visible: true,
    }, {
      imgSrc: 'https://i.ibb.co/GWMwFzT/unicorn.png',
      visible: true,
    }, {
      imgSrc: 'https://i.ibb.co/xhcVvKs/dreamy.png',
      visible: false,
    }],
  },
  mutations: {
    SHOW_HIDDEN(state) {
      state.items = state.items.map((item) => {
        const newItem = item;
        newItem.visible = true;
        return newItem;
      });
    },
  },
  actions: {
    showHidden(context) {
      context.commit('SHOW_HIDDEN');
    },
  },
  modules: {
  },
});
