<template>
  <!-- <div class="to-top" @click="backtop"> -->
  <i
    v-show="isShow"
    class="to-top iconfont icon-ico-to-top"
    @click="backtop"
  ></i>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'back-top',
  data() {
    return {
      isShow: false,
      scrollTop: 0,
    }
  },
  created() {},
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    backtop() {
      let timer = setInterval(() => {
        let ispeed = Math.floor(-this.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop =
          this.scrollTop + ispeed
        if (this.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },
    handleScroll() {
      let scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop
      this.scrollTop = scrollTop
      scrollTop > 400 ? (this.isShow = true) : (this.isShow = false)
    },
  },
}
// setup() {
//   const data = reactive({
//     isShow: false,
//     scrollTop: 0
//   });
//   const refData = toRefs(data);
//   onMounted(() => {
//     window.addEventListener("scroll", handleScroll, true);
//   });
//   const handleScroll = () => {
//     let scrollTop =
//       document.body.scrollTop || document.documentElement.scrollTop;
//     data.scrollTop = scrollTop;
//     scrollTop > 400 ? (data.isShow = true) : (data.isShow = false);
//   };
//   const backtop = () => {
//     let timer = setInterval(() => {
//       let ispeed = Math.floor(-data.scrollTop / 5);
//       document.documentElement.scrollTop = document.body.scrollTop =
//         data.scrollTop + ispeed;
//       if (data.scrollTop === 0) {
//         clearInterval(timer);
//       }
//     }, 16);
//   };
//   return {
//     ...refData,
//     backtop
//   };
// }
</script>
<style scoped lang="scss">
.to-top {
  // width: 30px;
  // height: 30px;
  position: fixed;
  right: 50px;
  bottom: 100px;
}
.icon-ico-to-top {
  color: #409eff;
  font-size: 50px;
}
</style>
