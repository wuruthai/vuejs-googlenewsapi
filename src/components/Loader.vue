<template>
  <div class="loaderContainer">


  <div class="loader">

  </div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
}
</script>

<style scoped="true">


.loaderContainer {
  display: flex;
  justify-content: center;
}

.loader {
  background: black;
  border: 10px solid coral;
  border-radius: 50%;
  border-top: 16px solid tomato;
  border-bottom: 16px solid tomato;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
