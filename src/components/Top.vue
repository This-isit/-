<template>
 <div>
<div class="top">
    <div>
        <div class="ft"> <img src="http://157.122.54.189:9093/images/logo.jpg" alt="" data-v-3f2f662b="" style="width: 150px;
    height: 48px;">
    <div class="zt" >首页</div>
    <div class="zt" @click="bb">旅游攻略</div>
    <div class="zt" @click="jd">酒店</div>
    <div class="zt"  @click="jj">国内机票</div>
  
    </div>
    <div>  <div class="dl" @click="tt">登录/注册</div></div>
         
    </div>
    
</div>
 </div>
</template>

<script lang='ts'>
import {useRouter} from 'vue-router'
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
    const router = useRouter();

// const data: Data = reactive<Data>({
// })

    const tt= (): void=>{
      router.push('/login')
    }
    const bb= (): void=>{
      router.push('/post')
    }
      const jj= (): void=>{
      router.push('/air')
    }
    const jd= (): void=>{
      router.push('/hotel')
    }
return {
// ...toRefs(data),
tt,
bb,
jj,
jd
}
},
 })
</script>

<style scoped lang='scss'>
.top{
    width: 100%;
    height: 60px;
   
    
}
.zt{
    height: 60px;
    padding: 0px 20px;
    line-height: 60px;
     font-size: 18px;
  &:hover{
      cursor: pointer;
         border-bottom: 5px solid skyblue;
         color: skyblue;
  }
}

.ft{
    display:flex;
    margin-left: 170px;
   

}
.dl{
    position: absolute;
    left: 1100px;
    top: 20px;
   &:hover{
      cursor: pointer;
         border-bottom: 5px solid skyblue;
         color: skyblue;
  }
}

</style>