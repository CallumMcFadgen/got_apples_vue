import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user_token: null,
    user: null,
    grower_id: null,
    variety_id: null,
    auction_id: null
  },

  mutations: {

    SET_GROWER_ID(state, id) {
      state.grower_id = id;
    },

    SET_VARIETY_ID(state, id) {
      state.variety_id = id;
    },

    SET_AUCTION_ID(state, id) {
      state.auction_id = id;
    },

    SET_USER(state, user) {
      state.user = user;
    }

  },

  actions: {

    addGrowerId(context, id) {
      context.commit("SET_GROWER_ID", id);
    },

    addVarietyId(context, id) {
      context.commit("SET_VARIETY_ID", id);
    },

    addAuctionId(context, id) {
      context.commit("SET_AUCTION_ID", id);
    },

    addUser(context, user) {
      context.commit("SET_USER", user);
    }

  },

  modules: {

  }

});
