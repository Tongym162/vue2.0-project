<template>
  <div>
    <label class="input-radio radio" v-for="(item, index) in radioGroup">
      <span class="input-radio-main" :class="{'is-checked': index == selectedValue}" @click="onClick(item, index)">
        <span class="input-radio-inner"></span>
        <input type="radio" class="input-radio-origin" v-model="item.value">
      </span>
      <span class="input-radio-label" v-text="item.name"></span>
    </label>
  </div>
</template>
<style lang="less" scoped>
  .input-radio{
    color:#1f2d3d;
    position:relative;
    cursor: pointer;
    display: inline-block;
    padding-right: 10px;
    white-space: nowrap;
    user-select:none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    .input-radio-main{
      display:inline-block;
      width: .36rem;
      height: .3rem;
      line-height:.3rem;
      vertical-align: middle;

      .input-radio-inner{
        border: 1px solid #bfcbd9;
        width: .28rem;
        height: .28rem;
        border-radius: 50%;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;

          &:hover{
            border-color: #20a0ff;
          }

          &:after{
             width: .1rem;
             height: .1rem;
             border-radius: 50%;
             background-color: #fff;
             content: "";
             position: absolute;
             left: 50%;
             top: 50%;
             transform: translate(-50%,-50%) scale(0);
             transition: transform .15s cubic-bezier(.71,-.46,.88,.6);
         }
      }

      .input-radio-origin{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        visibility: hidden;
      }

    }
    /*选中状态*/
    .input-radio-main.is-checked{

      .input-radio-inner{
        border-color: #20a0ff;
        background: #20a0ff;

        &:after{
           transform: translate(-50%,-50%) scale(1);
        }

      }
    }

    .input-radio-label{
      font-size: .16rem;
    }

  }
</style>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue',
        /*radioGroup: [
          {
              name: '苹果',
              value: 'apple'
          },
          {
            name: '香蕉',
            value: 'banana'
          },
        ],*/
        selectedValue: 0, //当前选中
      }
    },
    props: {
      radioGroup: {
          type: Array,
          default: [
            {
              name: '苹果',
              value: 'apple'
            },
          ]
      }

    },
    components: {},
    methods: {
      onClick(item, index){
          this.selectedValue = index;
          this.$emit('radio-select-event',item.value);
      }
    }
  }
</script>
