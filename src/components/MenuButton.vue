<template lang="html">
<button type="button" :id="name">{{name}}</button>
</template>

<script>
export default {
  props:{
    name:{
      type:String,
      required:true
    }
  }
}
</script>

<style lang="css" scoped="true">
</style>
