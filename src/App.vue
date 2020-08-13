<template>
  <div id="app">
    <Header></Header>
    <transition enter-active-class="animate__animated animate__bounceInLeft" leave-active-class="animate__animated animate__bounceInLeft">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/common/Header'
import Footer from './components/common/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 监听当前页面 显示状态
    window.addEventListener('visibilitychange',function(){
      if (document.visibilityState === 'hidden') {
        document.title = "Σ(っ °Д °;)っ 你去哪儿啦？"
      }else if (document.visibilityState === 'visible') {
        document.title = "o(*≧▽≦)ツ 欢迎回来"
      }
    })
  }
}
</script>
