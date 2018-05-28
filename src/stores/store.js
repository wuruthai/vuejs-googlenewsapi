import Vue from "vue"
import Vuex from "vuex"
import service from "../services/service"


Vue.use(Vuex)

const state =  {
  isLoading:true,
  newsData:{}
}
const getters =  {

}
const mutations =  {
setNews(state, data){
  state.newsData = data;
},
setIsLoading(state, bool){
  state.isLoading = bool;
}
}
const actions =  {
  fetchNews({commit}) {
    commit("setIsLoading", true)
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c26001f9857c45f585c71a831f506c99')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      setTimeout(()=>{return commit("setIsLoading", false)},3000)
      commit("setNews", myJson)
    });
  },
}

const store = new Vuex.Store({state,getters,mutations,actions})

export default store;
