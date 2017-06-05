<template>
  <div>
    <!--自定义select组件-->
    <input-select :data="selectData"
                  @event-custom-selected="selected"></input-select>
    <!--省市区选择器-->
    <input-city :data="area" :valid-promise-array="validArray"></input-city>

    <!--radio组件-->
    <input-radio :radio-group="radioGroup" v-on:radio-select-event="radioSelect"></input-radio>

    <!--checkbox组件-->
    <input-checkbox></input-checkbox>
  </div>
</template>
<style scoped>
</style>
<script>
  import {
    InputSelect,
    InputCity,
    InputRadio,
    InputCheckbox
  } from 'vui/Form'

  export default{
    data(){
      return {
        //select数据
        selectData: {
          name: "客户等级",
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
            },
            {
              name: "VIP客户",
              value: "VIP"
            }
          ],
        },
        //省市区数据
        area: {
          value: '',
          placeholder: '请选择区域',
          name: '省、市、区',
          minlength: 0,
          maxlength: 50,
          id: 'area',
          validFuncArray: [],//checkLength(0, 50)
          disabled: true,
          province: '',
          city: '',
          district: ''
        },
        validArray: [],
        //radio数据
        radioGroup: [
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
    mounted(){
      console.log('当前用户：', this.$route.params.id);
    },
    methods: {
      selected(value){
        console.log("selected-value", value);
      },
      radioSelect(val){
        console.log('radio-select-val:',val);
      }
    },
    components: {
      InputSelect,
      InputCity,
      InputRadio,
      InputCheckbox
    }
  }
</script>
