<template>
  <div class="container">
    <div class="control_btn">
      <span>
        <nuxt-link to="/timeButton"> previous page </nuxt-link>
      </span>
      <span>
        <nuxt-link :to="{ name: 'textSpotlight' }"> next page </nuxt-link>
      </span>
    </div>
    <div class="navbar">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <ul>
        <li><a href="javascript:void(0);">点赞</a></li>
        <li><a href="javascript:void(0);">投币</a></li>
        <li><a href="javascript:void(0);">收藏</a></li>
        <li><a href="javascript:void(0);">关注</a></li>
        <li><a href="javascript:void(0);">分享</a></li>
      </ul>
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
ul {
  padding: 0;
  margin: 0;
}
.navbar,
.navbar ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar {
  position: relative;
  padding: 20px;
  background-color: #fff;
  border-radius: 50px;
}
.navbar ul {
  width: 0;
  overflow: hidden;

  /* 加个过渡时间 */
  transition: all 0.5s;
  /* 解决展开时文字竖行排列 */
  white-space: nowrap;
}
.navbar input {
  width: 40px;
  height: 40px;
  cursor: pointer;
  /* 设置选框透明度为0 */
  opacity: 0;
}
.navbar span {
  /* 这里是第一条线的位置 */
  position: absolute;
  top: calc(50% - 10px);
  left: 25px;
  width: 30px;
  height: 4px;
  border-radius: 15px;
  background-color: #999;
  /* 这里结局鼠标放上span标签不能选中或者取消选中复选框 */
  pointer-events: none;
  transition: transform 0.3s ease-in-out, top 0.3s ease-in-out;
}
/* 因为第二条线在这个元素内的第三个位置，所以这里选择第三个 */
.navbar span:nth-child(3) {
  top: calc(50% + 6px);
}
.navbar ul li {
  list-style: none;
  margin: 0 15px;
}
.navbar ul li a {
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: #333;
}
.navbar ul li a:hover {
  color: #fb7299;
}
/* :checked是当选中的复选框时 ~是兄弟选择器 查找同一级的ul */
.navbar input:checked ~ ul {
  width: 350px;
}
.navbar input:checked ~ span:nth-child(2) {
  top: calc(50% - 2px);
  transform: rotate(-45deg);
  background-color: #fb7299;
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out;
}
.navbar input:checked ~ span:nth-child(3) {
  top: calc(50% - 2px);
  transform: rotate(45deg);
  background-color: #fb7299;
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out;
}

</style>
