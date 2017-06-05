<template>
  <div>
    <label class="input-checkbox checkbox" v-for="(item, index) in checkboxGroup">
      <span class="input-checkbox-main" :class="{'is-checked': true}">
        <span class="input-checkbox-inner"></span>
        <input type="checkbox" class="input-checkbox-origin" value="">
      </span>
      <span class="input-checkbox-label">上海</span>
    </label>
  </div>
</template>
<style lang="less" scoped>
  .input-checkbox{
    color: #1f2d3d;
    position: relative;
    cursor: pointer;
    display: inline-block;
    padding-right: 10px;
    white-space: nowrap;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    .input-checkbox-main{
        display:inline-block;
        width: 20px;
        height: 16px;
        line-height:.3rem;
        vertical-align: middle;

      .input-checkbox-inner{
        border: 1px solid #bfcbd9;
        width: 16px;
        height: 16px;
        border-radius: 4px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;

        &:hover{
           border-color: #20a0ff;
         }

        &:after{
           width: 4px;
           height: 8px;
           border: 2px solid #fff;
           border-top: 0;
           border-left: 0;
           content: "";
           position: absolute;
           top: 0;
           left: 4px;
           transform: rotate(45deg) scale(0);
           transform-origin: center;
           transition: transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;
        }

      }

      .input-checkbox-origin{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        visibility: hidden;
      }

    }
    .input-checkbox-main.is-checked{
      .input-checkbox-inner{
        border-color: #20a0ff;
        background: #20a0ff;

        &:after{
           transform: rotate(45deg) scale(1);
         }

      }

    }
    .input-checkbox-label{
      font-size: 14px;
    }
  }
</style>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue',
        checkboxGroup: [
           {
             name: '苹果',
             value: 'apple'
           },
           {
             name: '香蕉',
             value: 'banana'
           },
         ],
      }
    },
    props: {

    },
    components: {},
    methods: {
    }
  }
</script>
