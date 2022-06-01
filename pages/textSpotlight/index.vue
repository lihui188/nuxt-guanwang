<template>
  <div class="container">
    <div class="control_btn">
      <span>
        <nuxt-link to="/navigationBar"> previous page </nuxt-link>
      </span>
      <span>
        <nuxt-link :to="{ name: 'parallax' }"> next page </nuxt-link>
      </span>
    </div>
    <h1 data-spotlight="CodingStartUp">CodingStartUp</h1>
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
h1 {
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 8rem;
  letter-spacing: -0.3rem;
  position: relative;
}
h1::after {
  content: attr(data-spotlight);
  color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-clip-path: ellipse(100px 100px at 0% 50%);
  clip-path: ellipse(100px 100px at 0% 50%);
  animation: spotlight 4s linear infinite;
  background-image: linear-gradient(to right, #ec77ab 0%, #7873f5 100%);
  background-size: 150%;
  background-position: center center;
  /* CSS background-clip 属性指定背景的绘制区域。 */
  -webkit-background-clip: text;
  background-clip: text;
}
@keyframes spotlight {
  0% {
    -webkit-clip-path: ellipse(100px 100px at 0% 50%);
    clip-path: ellipse(100px 100px at 0% 50%);
  }
  50% {
    -webkit-clip-path: ellipse(100px 100px at 100% 50%);
    clip-path: ellipse(100px 100px at 100% 50%);
  }
  100% {
    -webkit-clip-path: ellipse(100px 100px at 0% 50%);
    clip-path: ellipse(100px 100px at 0% 50%);
  }
}
</style>
