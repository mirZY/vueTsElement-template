import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: window.localStorage.getItem('token') ? window.localStorage.getItem('token') : false,
    userinfo: window.localStorage.getItem('userinfo') ? JSON.parse(window.localStorage.getItem('userinfo')) : false, //字符串提取的时候要转json对象
  },
  mutations: {
    Login(state, data: any) {
      window.localStorage.setItem('token', data);
      state.token = window.localStorage.getItem('token');
    },
    LogOut(state) {
      state.token = "";
      window.localStorage.setItem('token', ''); //本地存储只能存字符串
      window.localStorage.setItem('userinfo', '');
    },
    SaveUserInfo(state, data) {
      window.localStorage.setItem('userinfo', JSON.stringify(data)); //本地存储只能存字符串
      state.userinfo = JSON.parse(window.localStorage.getItem('userinfo'));
  },
  },
  actions: {
  },
  modules: {
  }
})
