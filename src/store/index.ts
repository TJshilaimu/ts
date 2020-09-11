import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    path:['x1','x2'],
    msg:'hello world',
    val:{
      name:'cl',
      age:18
    }
  },
  mutations: {
    getMsg(state,payload){
      console.log('mu')
      state.msg = payload
    },
    getVal(state,payload){
      state.val = payload
    }
  },
  actions: {
    setMsg({commit},payload){
      commit('getMsg',payload)
    }
  },
  modules: {}
});
