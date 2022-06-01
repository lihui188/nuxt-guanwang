<template>
  <div class="container">
    <div class="control_btn">
      <span>
         <nuxt-link to="/"> previous page </nuxt-link>
      </span>
      <span>
        <nuxt-link :to="{name:'waterPolo'}"> next page </nuxt-link>
      </span>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: #102626;
}
</style>
