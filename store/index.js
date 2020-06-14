import axios from 'axios'

//creating a store
export const state = () => ({
  posts:[]
})

//getters - getters will return objects defined in state
export const getters = {
  posts(state) {
    return state.posts
  }
}

//mutations - mutations will set/change values objects defined in state
export const mutations = {
  setPosts(state, posts) {
    state. posts = posts
  }
}

/*
* actions - can be used for calling the mutation defined above as best practice.
* We can perform time consuming tasks such as server fetching data from servers and dispatch them within the app.
*/
export const actions = {

  /*
  * An example of nuxtServerInit method which get initialised on server side and when the application boots up, this method will get executed
  * Can be used for fetching important data to make available globally within the app
  * It is an async method hence the axios should be used with 'await'
  * When this function is un use make sure to disable 'asyncData' within teh post main component and
  */
  // async nuxtServerInit(context) {
  //   let res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  //   context.commit('setPosts', res.data)
  // },

  //can also use 'commit directly by destructuring it "setPosts:({commit}, payload) => {}"'
  setPosts:(context, payload) => {
    context.commit('setPosts', payload)
  }
}
