<template>
  <div class="menu">
    <div class="menu-list">
      <ul>
        <li class="menu-list-li" v-for="item in menuArray">
          <a class="menu-list-a" @click.stop="routTo(item.value)">{{item.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      menuArray: [
        {
          name: "vuex demo",
          value: "vuex"
        },
        {
          name: "表单组件",
          value: "customform"
        }
      ]
    }
  },
  methods:{
    routTo(value){
      switch(value){
        case "vuex":
          this.$router.push({
              name: 'vuex'
          });
          break;
        case "customform":
              this.$router.push({
                name: 'customform',
                params:{id: '26511'}
              });
              break;

      }

    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu-list-li{
    line-height: .6rem;
  }
  .menu-list-a{
    font-size: .32rem;
    color: #42b983;
    text-decoration: underline;

  }
</style>
