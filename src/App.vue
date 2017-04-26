<template>
  <div id="app">
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import "assets/fonts/iconfont.css";

  html, body {
    height: 100%;
  }

  body {
    background-color: #fff;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
</style>
