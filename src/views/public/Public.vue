<template>
 <div>
<Top></Top>
<router-view/>
<bt></bt>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import Top from "../../components/Top.vue"
import bt  from "../../components/bt.vue"

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

// const data: Data = reactive<Data>({
// })
return {
// ...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>