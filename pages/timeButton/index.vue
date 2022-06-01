<template>
  <div class="container">
    <div class="control_btn">
      <span>
        <nuxt-link to="/waterPolo"> previous page </nuxt-link>
      </span>
      <span>
        <nuxt-link :to="{ name: 'navigationBar' }"> next page </nuxt-link>
      </span>
    </div>
    <a class="btn" href="javascript:void(0);" onfocus="this.blur();"> sunbutton </a>
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
.btn {
  outline:none;
  text-decoration: none;
  position: relative;
  font-size: 24px;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  width: 400px;
  height: 100px;
  color: #fff;
  line-height: 100px;
  
  text-align: center;
  text-transform: uppercase;
  border-radius: 50px;
  z-index: 1;
}
.btn:hover {
  animation: sun 8s linear infinite;
}
.btn:hover::before {
  animation: sun 8s linear infinite;
}
@keyframes sun {
  100% {
    background-position: 400% 0;
  }
}
.btn::before {
  content: '';
  position: absolute;
  top: -5px;
  right: -5px;
  left: -5px;
  bottom: -5px;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 50px;
  filter: blur(20px);
  z-index: -1;
}
</style>
