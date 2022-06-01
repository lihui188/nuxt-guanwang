<template>
  <div class="container">
    <div class="control_btn">
      <span>
        <nuxt-link to="/"> previous page </nuxt-link>
      </span>
      <span>
        <nuxt-link :to="{ name: 'timeButton' }"> next page </nuxt-link>
      </span>
    </div>
    <div class="main">
      <div class="wave"></div>
    </div>
  </div>
</template>
<script scoped>
export default {}
</script>
<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: #102626;
}
.main,
.wave {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.main {
  border: 3px solid #2aa8a6;
  padding: 10px;
}
.wave {
  background: rgb(26, 234, 238);
  overflow: hidden;
}
.wave:after {
  content: '';
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -60%);
  border-radius: 40%;
  animation: wave 5s linear infinite;
}
@keyframes wave {
  100% {
    transform: translate(-50%, -60%) rotate(360deg);
  }
}
</style>
