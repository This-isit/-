<template>
 <div>
<Top></Top>
<div>
   <img src="http://157.122.54.189:9095/assets/images/th03.jfif" alt="" class="img">
   
</div>
<bt></bt>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import Top from "../components/Top.vue"
import bt  from "../components/bt.vue"
// interface Data {
// }
 export default defineComponent({
   name: '',
   props: {
   },
   components: {
    Top,
       bt,
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
.img{
   width: 100%;
    height: 700px;
}
</style>