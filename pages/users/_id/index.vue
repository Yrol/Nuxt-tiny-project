<template>
<h1>The user ID is {{$route.params.id}}</h1>
</template>

<script>
export default {

  /*
    Nuxt validate method
    Using the Regex to validate the param to be a number
    Using the "context" object to access properties such as "params" in this case
  */
  //validate({params}) // can also destructure instead of context below
  validate(context) {
    return /^\d+$/.test(context.params.id)
  }
}
</script>
