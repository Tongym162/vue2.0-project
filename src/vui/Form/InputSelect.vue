<template>
    <div class="input-select">
      <div class="item-label" v-if="data.name">
        <span class="item-required" v-show="data.required">*</span>
        <span class="item-label" v-text="data.name">省市区</span><span>:</span>
      </div>

      <div class="input-select-box">
        <div class="item-value" :class="{'active':isShowPanel}"  @click="toggle">
          <span class="item-placeholder" v-if="isShowPlaceholder">请选择</span>
          <span class="item-name" v-else v-text="checkName"></span>
          <span class="iconfont icon-drop-down" v-show="!isShowPanel"></span>
          <span class="iconfont icon-drop-up" v-show="isShowPanel"></span>
        </div>
        <div class="checkbox-panel" v-show="isShowPanel">
          <ul>
            <li v-for="item in data.item" @click="chooseItem(item)">{{item.name}}</li>
          </ul>
        </div>
      </div>

    </div>
</template>
<script>
  export default{
      data(){
          return{
            //参数格式
            /*data: {
              name: "省市区",
              required: true,
              placeholder: "请选择",
              value: "",
             item: [
                {
                  name: "所有客户",
                  value: "all"
                },
                {
                  name: "重要客户",
                  value: "import"
                },
                {
                  name: "普通客户",
                  value: "geneal"
                }
              ],
            },*/
            isShowPanel: false, //是否显示面板
            isShowPlaceholder: true, //是否显示提示
            checkName: "",
          }
      },
      props:{
        data: {
          type: Object,
          required: true
        }
      },
      components:{

      },
      computed:{

      },
      watch:{
        checkName(){

        }
      },
      ready(){
        this.checkName = this.data.value;

      },
      methods: {
        toggle(){
          this.isShowPanel = !this.isShowPanel;
        },
        chooseItem(item){
          this.checkName = item.name;
          this.toggle();
          if(this.checkName){
            this.isShowPlaceholder = false;
          }else{
            this.isShowPlaceholder = true;
          }
          this.$dispatch('event-custom-selected',item.value);
        },
      }
  }
</script>
<style lang="css" scoped>
  .input-select{
    display: inline-block;
    position: relative;
    vertical-align: middle;
    font-size: .26rem;
  }
  .item-required{
    display: inline-block;
    vertical-align: middle;
    color: #f4595a;
    font-size: .26rem;
    text-align: left;
  }
  .item-label{
    display: inline-block;
  }
  .input-select-box{
    display: inline-block;
    position: relative;
  }
  .item-value{
    display: inline-block;
    vertical-align: middle;
    position: relative;
    border-bottom: 1px solid #ecedf0;
    padding: 4px;
    min-width: 1.5rem;
    margin-bottom: 4px;
  }
  .item-placeholder, .item-name{
    display: inline-block;
    width: 1.5rem;

  }
  .item-value.active{
    border-bottom: 1px solid #3cbaff;
  }
  .item-value.active .icon-drop-up{
    color: #3cbaff;
  }
  .checkbox-panel{
    background: rgba(26, 32, 55, .69);
    color: #fff;
    font-size: .22rem;
    width: 1.5rem;
    position: absolute;
    z-index: 100;
    border-radius: 2px;
    padding: 0 4px;
  }
  .checkbox-panel ul li{
    height: .4rem;
    line-height: .4rem;
    border-bottom: 1px solid rgba(255, 255, 255, .3);
    padding: 0 16px;
    width: 100%;
  }
  .iconfont {
    font-size: .22rem;
  }
</style>
