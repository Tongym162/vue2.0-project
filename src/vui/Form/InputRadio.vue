<template>
  <div>
    <label class="custom-radio radio">
      <span class="radio-input">
        <span class="radio-input-inner"></span>
        <input type="radio" class="radio-origin" value="">
      </span>
      <span class="radio-label">苹果</span>
    </label>
  </div>
</template>
<style scoped>
  .custom-radio{
    .radio-input{

    }
  }
</style>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    props: {

    },
    components: {}
  }
</script>
