<template>
  <div class="jumbotron jumbotron-fluid post-view">
    <div class="container">
      <h1 class="display-4">{{post.title}}</h1>
      <p
        class="lead"
      >{{post.body}}</p>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      post: []
    };
  },
  async asyncData({ route }) {
    try {
      let res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
      );
      return { post: res.data };
    } catch (error) {
      console.log(error);
    }
  },
  //Unlike in "/pages/posts/index.vue", here using a callback function to return title when the post data is available in "asyncData"
  head() {
    return {
      title:this.post.title
    }
  }
};
</script>
