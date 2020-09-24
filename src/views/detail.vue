<template>
     <div class="bb">
         <div v-for="(item,index) in res" :key="index">
          <div>{{item.title}}</div>
        </div>
     </div>
  <div class="box">
    <div class="center">
      <div class="center_left">
        <div v-for="(item,index) in res" :key="index">
          <div v-html="item.content"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="kt"> 
      <div></div>
      <div></div>
      <div></div>
      <div></div>
  </div>
</template>

<script lang='ts'>
import api from "@/http/api";
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
} from "vue";
import { Account, AccountItem } from "@/types/type";
import { useRouter, useRoute } from "vue-router";
interface Data {
  id: number | string;
  res:  [];
  ress: Account[];
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const route = useRoute();
    const data: Data = reactive<Data>({
      id: "",
      res: [],
      ress: [],
    });

    onMounted(() => {
      if (route.query.id) {
        data.id = route.query.id! as string;
        console.log(data.id); 
      }
      api
        .getxiangqing({ id: data.id })
        .then((res: any) => {
          data.res = res.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
         api
        .getposts({city: "成都"})
        .then((ress: any)=>{
          data.ress = ress.data;
          
          console.log(ress);
        })
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.kt{
    height: 370px;
    width: 275px;
    border: 1px solid red;
    position: absolute;
    left: 930px;
    top: 100px;
}
.bb{
    font-size: 25px;
  margin-left: 200px;
 
}
.center {
  width: 1100px;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.center_left {
    width: 700px;
}
</style>