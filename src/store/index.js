// store.js without Vuex
import Vue from 'vue';

export const store = Vue.observable({
  cat: {
    name: '',
  },
});

export const mutations = {
  setName(name) {
    store.cat.name = name;
  }
};