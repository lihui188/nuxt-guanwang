<template>
  <div class="container">
    <!-- <div class="control_btn">
      <span>
         <nuxt-link to="/"> previous page </nuxt-link>
      </span>
      <span>
        <nuxt-link :to="{name:'waterPolo'}"> next page </nuxt-link>
      </span>
    </div> -->
    <header>
      <a id="logo" href="#">logo</a>
      <ul>
        <li><a href="#" onfocus="this.blur();">Home</a></li>
        <li><a href="#" onfocus="this.blur();">About</a></li>
        <li><a href="#" onfocus="this.blur();">Work</a></li>
        <li><a href="#" onfocus="this.blur();">Contact</a></li>
      </ul>
    </header>
    <section>
      <img id="stars" src="@/assets/images/parallax/stars.png" />
      <img id="moon" src="@/assets/images/parallax/moon.png" />
      <img id="behind" src="@/assets/images/parallax/mountains_behind.png" />
      <div id="text">Moon Light</div>
      <a id="btn" href="#">explore</a>
      <img id="front" src="@/assets/images/parallax/mountains_front.png" />
    </section>
    <div class="sec">
      <h2>This is title</h2>
      <p>
        There are moments in life when you miss someone so much that you just
        want to pick them from your dreams and hug them for real! Dream what you
        want to dream;go where you want to go;be what you want to be,because you
        have only one life and one chance to do all the things you want to
        do.<br /><br />
        There are moments in life when you miss someone so much that you just
        want to pick them from your dreams and hug them for real! Dream what you
        want to dream;go where you want to go;be what you want to be,because you
        have only one life and one chance to do all the things you want to
        do.<br /><br />
        There are moments in life when you miss someone so much that you just
        want to pick them from your dreams and hug them for real! Dream what you
        want to dream;go where you want to go;be what you want to be,because you
        have only one life and one chance to do all the things you want to
        do.<br /><br />
      </p>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log('这里是mounted生命周期')
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    // 最后要销毁监听事件，不然会影响到其他页面
    document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      let stars = document.getElementById('stars')
      let moon = document.getElementById('moon')
      let behind = document.getElementById('behind')
      let front = document.getElementById('front')
      let value = window.scrollY
      stars.style.left = value * 0.25 + 'px'
      moon.style.top = value * 1.5 + 'px'
      behind.style.top = value * 0.7 + 'px'
      front.style.top = value * 0.4 + 'px'
    },
  },
  
}
</script>
<style scoped>
.container {
  box-sizing: border-box;
  min-height: 100vh;
  background-color: #102626;
}
ul {
  padding: 0;
  margin: 0;
  z-index: 20;
}
ul li {
  list-style: none;
}
a {
  text-decoration: none;
}
a#logo {
  z-index: 20;
}
header {
  color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  padding: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
header #logo {
  color: #fff;
  font-size: 2em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
}
header ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
header ul li {
  list-style: none;
  margin-left: 20px;
}
header ul li a {
  color: #fff;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 20px;
  transition: 0.5s;
}
header ul li a:hover,
header ul li a.active {
  color: #000;
  font-weight: 700;
  background-color: #fff;
  transition: 0.5s;
}
section {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
section::before {
  position: absolute;
  width: 100%;
  height: 100px;
  content: '';
  bottom: 0;
  background: linear-gradient(to top, #1c0522, transparent);
  z-index: 100;
  overflow: hidden;
}
section img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
section img#moon {
  mix-blend-mode: screen;
}
section img#front {
  z-index: 15;
}
section #text {
  position: absolute;
  color: #fff;
  font-size: 7.5vw;
  white-space: nowrap;
  z-index: 10;
  transform: translateY(100px);
}
section #btn {
  text-decoration: none;
  color: #2b1055;
  padding: 8px 30px;
  border-radius: 20px;
  background-color: #fff;
  font-size: 1.5em;
  z-index: 10;
  display: inline-block;
}
.sec {
  position: relative;
  padding: 100px;
  background: #1c0522;
  color: #fff;
}
.sec h2 {
  font-size: 3.5em;
}
.sec p {
  font-size: 1.5em;
}
</style>
