<!--
This component will be inherited by the "users" (the index.vue of /users) page and all its child pages
Using "nuxt-child" property to create the relationship
 -->
<template>
  <div>
    <p> You'll see me in all users related pages </p>
    <nuxt-child />
  </div>
</template>
