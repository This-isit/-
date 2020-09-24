<template>
 <div>
<div class="top">
<div class="t1">

</div>
<div class="t2">

</div>
</div>
<div class="two">

</div>


<div class="three">

</div>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
// interface Data {
// }
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

// let data: Data = reactive<Data>({
// })
return {
// ...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>
.top{
    width: 980px;
    height: 340px;
    border: 1px solid red;
    margin-left: 200px;
    display: flex;
    margin-top: 10px;
}
.t1{
    width: 590px;
    height: 340px;
    border: 1px solid red;
}
.t2{
     width: 360px;
    height: 310px;
    border: 1px solid red;
    margin-left: 30px;
}
.two{
    width: 590px;
    height: 200px;
    border: 1px solid red;
     margin-left: 200px;
}
.three{
      width: 980px;
    height: 370px;
    border: 1px solid red;
    margin-left: 200px;
    display: flex;
}
</style>