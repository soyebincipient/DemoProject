import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router';

Vue.use(Vuex)
const url = 'http://php.demo4work.com/mts/backend_api/api/auth/login';
export default new Vuex.Store({
  state: {
    user: false,
    profile: []
  },
  getters: {
    profileData(state) {
      return state.profile;
    }
  },
  mutations: {
    login(state, payload) {
      localStorage.setItem('user', payload.data.access_token);
      console.log('@@@', payload);
      state.profile = payload.data;
      state.user = true;
    },
    loginFailure(state) {
      state.user = false;
    },
    logout(state) {
      localStorage.removeItem('user');
      state.user = false;
      state.profile = "";
      Vue.$toast.error("Logged out successfully", {
        timeout: 2000
      });
      router.push('/');
    }
  },
  actions: {
    login(context, payload) {
      axios.post(url, { email: payload.email, password: payload.password }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      }).then((response) => {
        if (response.data.data !== null) {
          context.commit('login', response.data);
          Vue.$toast.success("Logged in successfully", {
            timeout: 2000
          });
          router.push('/dashboard');
        } else {
          // console.log('11', response.data.message);
          Vue.$toast.error(response.data.message, {
            timeout: 2000
          });
        }
      }).catch((error) => {
        context.commit('loginFailure', error);
        console.log(error);
      })
    },
    logout(context) {
      context.commit('logout');
    }
  },
  modules: {
  }
})
