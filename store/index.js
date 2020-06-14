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
  //can also use 'commit directly by destructuring it "setPosts:({commit}, payload) => {}"'
  setPosts:(context, payload) => {
    context.commit('setPosts', payload)
  }
}
