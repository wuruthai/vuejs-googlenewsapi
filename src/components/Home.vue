<template>
<div class="home">
  <Menu></Menu>
  <Loader v-if="isLoading"></Loader>
</div>
</template>

<script>

import Loader from "./Loader"
import Menu from "./Menu"

import {
  mapActions,
  mapState
} from "vuex"

export default {
  name: 'Home',
  created() {
    this.fetchNews();
  },
  computed: {
    ...mapState(["isLoading"])
  },
  methods: {
    ...mapActions(["fetchNews"])
  },

  components: {
    Loader,
    Menu,
  }
}
</script>

<style>

</style>
