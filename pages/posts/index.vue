<template>
  <div>
     <postview v-for="post in posts" :key="post.id" :post_data="post" />
  </div>
</template>

<script>
import axios from 'axios'
import postview from '../../components/Post'
export default {
  data() {
    return {
      posts:[]
    }
  },

  components: { postview },

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
  //     return {posts: res.data}
  //   })
  // }
}
</script>


