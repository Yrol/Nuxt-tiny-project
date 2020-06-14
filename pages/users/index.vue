<template>
  <div>
    <h1>Main user page</h1>
    <input type="text" v-model="userID" />

    <button @click="loadUser">Load user</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userID: ''
    }
  },

  methods: {
    loadUser () {
      this.$router.push(`/users/${this.userID}`)
    }
  },
  head:{
    title:"Users"
  }
}
</script>
