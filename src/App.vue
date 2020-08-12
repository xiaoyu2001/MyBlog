<template>
  <div id="app">
    1
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
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
