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
  @import "assets/css/cssreset.min.css";
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
    padding: 10px 15px;
    height: 100%;
    overflow-y: auto;
  }

  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
</style>
