<template>
  <div>
    <button class="btn" @click="incrementCounter">递加器</button>
    <span>当前值：{{getCount}}</span>
  </div>
</template>
<script>
  import {incrementCounter} from '../vuex/actions'
  import {getCount} from '../vuex/getters'
  export default{
      data(){
          return{
              msg:'hello vue'
          }
      },
      vuex:{
        getters: {
          getCount
        },
        actions: {
          incrementCounter
        }
      },
      ready(){
          debugger
        console.log('用户名：',this.$route.params.username);
      },
      components:{
      }
  }
</script>
<style scoped>
  .btn{
    width: 75px;
    height: 24px;
    border-radius: 4px;
    border: solid 1px #bdbdbd;
    font-size: 12px;
    color: #9a9a9a;
    margin-right: 20px;
  }
</style>
