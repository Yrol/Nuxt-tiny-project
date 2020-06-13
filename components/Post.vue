<template>
  <div class="card border-secondary mb-3" style="margin:10px">
    <!--The "name : 'posts-id'" below is the name defined in "router.js" automatically when we create the page for individual post (pages->posts->_id)-->
    <div class="card-header"><nuxt-link :to="{name : 'posts-id', params:{id: this.post_data.id } }">{{this.post_data.title}}</nuxt-link></div>
    <div class="card-body text-secondary">
      <p class="card-text">{{this.post_data.body}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post_data"]
};
</script>
