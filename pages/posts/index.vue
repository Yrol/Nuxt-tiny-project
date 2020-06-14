<template>
  <div>
    <!-- Using computed property "allPosts" to access posts-->
    <postview v-for="post in allPosts" :key="post.id" :post_data="post" />
  </div>
</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
import postview from '../../components/Post'
export default {

  components: { postview },

  data() {
    return {
      //allPosts:[]
    }
  },

  computed: {
    allPosts() {
      return this.$store.getters.posts
    },

    //using mappGetters instead of "allPosts" above (make sure to use 'posts' in 'v-for')
   //...mapGetters(['posts'])
  },

  //with async
  async asyncData(context){
    try{
      let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      context.store.dispatch('setPosts', res.data)
      //return {posts: res.data}
    } catch(error) {
      console.log(error)
    }
  },

  //changing the title of the page
  head: {
    title: 'Posts'
  }

  //without Async
  // asyncData(){
  //   return axios.ge t('https://jsonplaceholder.typicode.com/posts')
  //   .then(res => {
  //     return {allPosts: res.data}
  //   })
  // }
}
</script>


