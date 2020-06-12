<template>
  <div>
     <div v-for="post in posts" :key="post.id">
       <p>{{post.title}}</p>
     </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      posts:[]
    }
  },
  asyncData(){
    return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      return {posts: res.data}
    })
  }
}
</script>


