import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
})],
  state: {
    tasks: [],
    modalId: '',
  },
  getters: {
    getTasks(state){
      return state.tasks
    },
    getModalId(state){
      return state.modalId
    },
  },
  mutations: {
    addTask(state, payload){
      state.tasks.push(payload)
    },
    changeModalId(state, payload){
      state.modalId = payload
    },
    closeModal(state){
      state.modalId = ''
    },
    changeTask(state, payload){
      state.tasks[state.modalId-1].task = payload
    },
    deleateTask(state, payload){
      state.tasks.splice(payload-1,1);
      state.tasks.forEach((item,indx) => item.id = indx+1);
      state.modalId = '';
    },
    
  },
  actions: {
  },
  modules: {
  }
})
