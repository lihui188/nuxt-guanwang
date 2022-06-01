<template>
  <div id="layout_header" class="layout_header">
    <a id="logo" href="#">个人摄影小站</a>
    <ul>
      <li><a href="#">首页</a></li>
      <li><a href="#">分类</a></li>
      <li><a href="#">全部文章</a></li>
      <li><a href="#">关于我</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'layout-head',
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      let layoutHeader = $('#layout_header')
      console.log(layoutHeader)
      let scrollTop = window.scrollY
      console.log(scrollTop)
    },
  },
}
</script>
<style scoped>
.layout_header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 1;
  background-color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
a {
  text-decoration: none;
}
a:focus {
  border: none;
}
#logo {
  color: #333;
  font-size: 26px;
  font-weight: 700;
  text-decoration: none;
}
ul {
  display: flex;
  padding: 0;
  margin: 0;
}
ul li {
  list-style: none;
  color: #333;
  margin-left: 20px;
}
ul li a {
  color: #333;
  font-size: 16px;
  padding: 8px 20px;
  transition: 0.3s;
}
ul li a:hover {
  background-color: #333;
  color: #fff;
  border-radius: 20px;
}
</style>
