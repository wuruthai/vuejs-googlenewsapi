<template lang="html">
  <div class="menu">
    <MenuButton v-for="(button, i) in MenuItems" :name="button"></MenuButton>
  </div>
</template>

<script>
import MenuButton from "./MenuButton"

export default {
  data() {
    return {
      MenuItems: ["business", "entertainment", "general", "health", "science", "sports", "technology"]
    }
  },
  components: {
    MenuButton
  }
}
</script>

<style lang="css" scoped="true">
.menu{
  display: flex;
  justify-content: center;
}
</style>
