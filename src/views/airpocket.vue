<template>
  <div>
    <div class="d-f">
      <div class="top">
        <div class="first">
          单程： {{data.value1}}-{{data.value2}}/{{data.id}}
          <div class="an">
            <a-dropdown>
              <template v-slot:overlay>
                <a-menu @click="handleMenuClick">
                  <a-menu-item key="1">首都机场</a-menu-item>
                </a-menu>
              </template>
              <a-button style="margin-left: 8px">
                起飞机场
                <DownOutlined />
              </a-button>
            </a-dropdown>

            <a-dropdown>
              <template v-slot:overlay>
                <a-menu @click="handleMenuClick">
                  <a-menu-item key="1">0：00-6：00</a-menu-item>
                  <a-menu-item key="2">6：00-12：00</a-menu-item>
                  <a-menu-item key="3">12：00-13：00</a-menu-item>
                  <a-menu-item key="4">13：00-19：00</a-menu-item>
                  <a-menu-item key="5">19：00-24：00</a-menu-item>
                </a-menu>
              </template>
              <a-button style="margin-left: 8px">
                起飞时间
                <DownOutlined />
              </a-button>
            </a-dropdown>

            <a-dropdown>
              <template v-slot:overlay>
                <a-menu @click="handleMenuClick">
                  <a-menu-item key="1">川航</a-menu-item>
                  <a-menu-item key="2">国航</a-menu-item>
                  <a-menu-item key="3">海航</a-menu-item>
                  <a-menu-item key="4">南航</a-menu-item>
                  <a-menu-item key="5">东航</a-menu-item>
                  <a-menu-item key="6">深航</a-menu-item>
                </a-menu>
              </template>
              <a-button style="margin-left: 8px">
                航空公司
                <DownOutlined />
              </a-button>
            </a-dropdown>

            <a-dropdown>
              <template v-slot:overlay>
                <a-menu @click="handleMenuClick">
                  <a-menu-item key="1">大</a-menu-item>
                  <a-menu-item key="2">中</a-menu-item>
                  <a-menu-item key="3">小</a-menu-item>
                </a-menu>
              </template>
              <a-button style="margin-left: 8px">
                机型
                <DownOutlined />
              </a-button>
            </a-dropdown>
          </div>
        </div>

        <div class="two">筛选：撤销</div>

        <div class="three">
          <div class="hh">航空信息</div>
          <div class="hh">起飞时间</div>
          <div class="hh">到达时间</div>
          <div class="hh">价格</div>
        </div>

        <div class="four" v-for="(item,index) in res" :key="index" >
          <div class="jp">{{item.airline_name}}{{item.flight_no}}</div>
          <div class="jb">
            <div class="jp">{{item.dep_time}}</div>
            <div>{{item.dst_airport_name}}</div>
          </div>

          <div class="jb">
            <div class="jp">{{item.arr_time}}</div>
            <div>{{item.org_airport_name}}</div>
          </div>
          <div class="jp">￥<div class="font">{{item.base_price}}</div> 起</div>
          <!-- <div class="yn">
            <div class="dj">低价推荐</div>
            <div class="gs">
            <div class="qq" v-for="(item,index) in res.seat_infos" :key="index">
                     <div class="tt">
                          <div>
                             {{item.group_name}}|{{item.supplierName}}
                          </div>
                     </div>
                     
            </div>
            </div>
          </div> -->
        </div> 
                <div class="four" v-for="(item,index) in ress" :key="index">
          <div class="jp">{{item.airline_name}}{{item.flight_no}}</div>
          <div class="jb">
            <div class="jp">{{item.dep_time}}</div>
            <div>{{item.dst_airport_name}}</div>
          </div>

          <div class="jb">
            <div class="jp">{{item.arr_time}}</div>
            <div>{{item.org_airport_name}}</div>
          </div>
          <div class="jp">￥<div class="font">{{item.base_price}}</div> 起</div>
          <!-- <div class="yn">
            <div class="dj">低价推荐</div>
            <div class="gs">
            <div class="qq" v-for="(item,index) in res.seat_infos" :key="index">
                     <div class="tt">
                          <div>
                             {{item.group_name}}|{{item.supplierName}}
                          </div>
                     </div>
                     
            </div>
            </div>
          </div> -->
        </div> 
      </div>
      <div class="head">
        <div>
          <img src="../assets/I5IP[8)DH_FZJMBUN2C[II6.png" alt class="bj" />
        </div>
        <div class="cx">历史查询</div>
        <div class="ls" v-for="(item,index) in items" :key="index">
          {{item[0]}}-{{item[1]}}
        </div>
      </div>
    </div>
    <a-pagination
      size="small"
      :total="info.length"
      :show-total="total => `共 ${total} 条`"
      show-size-changer
      show-quick-jumper
      @change="changetable"
    />
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import api from "@/http/api";
interface Data {
  value1: string;
  value2: string;
  departCity: string;
  departCode: string;
  departDate: string;
  destCity: string;
  destCode: string;
  res: string[];
  ress: string[];
  msgBody: string[];
  items: string[];
  info: string[];
  name: string;
  ccit: string;
  sort: string;
  id: string;

}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const route = useRoute();
    const data: Data = reactive<Data>({
      departCity: "",
      departCode: "",
      departDate: "",
      destCity: "",
      destCode: "",
      res: [],
       ress: [],
      value1:"",
      value2:"",
      msgBody:[],
      items:[],
      info:[],
      name: "",
      ccit: "",
      sort:"",
      id: "",
    });
    const changetable = (page: number, pageSize: number) => {
        console.log(page, pageSize)
         api
        .gatairs({
          departCity: data.departCity,
          departCode: data.departCode,
          departDate: data.departDate,
          destCity: data.destCity,
          destCode: data.destCode,
        })
        .then((res: any) => {
          if(page === 1){
          data.res = res.flights.slice(0,pageSize)
          }
          else{
            data.res = res.flights.slice((page-1)*pageSize,page*pageSize)
          }
          console.log(res);
        });
    }
    onMounted(() => {
     data.items = JSON.parse(localStorage.getItem("msgBody")!);
     data.items.splice(5)
    
       console.log(data.items);
        if (route.query.value1,route.query.value2,route.query.id) {
        data.value1 = route.query.value1! as string;
        data.value2 = route.query.value2! as string;
        data.id = route.query.id! as string;
        console.log(data.value1,data.value2,data.id); 
      }
      if (
        (route.query.departCity,
        route.query.departCode,
        route.query.departDate,
        route.query.destCity,
        route.query.destCode)
      ) {
        data.departCity = route.query.departCity! as string;
        data.departCode = route.query.departCode! as string;
        data.departDate = route.query.departDate! as string;
        data.destCity = route.query.destCity! as string;
        data.destCode = route.query.destCode! as string;
      }
      
       api
      .getjp({
        name:data.value1
      })
      .then((res: any)=>{
        
        data.sort=res.data[0].sort
           console.log(data.sort);
      });
        api
      .getjps({
        name:data.value2
        
      })
      .then((res: any)=>{
         
           data.ccit=res.data[0].sort
          console.log(data.ccit);
         
      });
      if(data.id!=""){
            api
        .gatairs({
          departCity: data.value1,
          departCode: data.sort,
          departDate: data.id,
          destCity:  data.value2,
          destCode: data.ccit,
        })
        .then((res: any) => {
          data.info = res.flights
          data.ress = res.flights.slice(0,10);
          console.log(res);
        });
      }
    
      
       
      api
        .gatairs({
          departCity: data.departCity,
          departCode: data.departCode,
          departDate: data.departDate,
          destCity: data.destCity,
          destCode: data.destCode,
        })
        .then((res: any) => {
          data.info = res.flights
          data.res = res.flights.slice(0,10);
          console.log(res);
        });
      
    });
    return {
      ...toRefs(data),
      changetable
    };
  },
});
</script>

<style scoped lang='scss'>
#components-pagination-demo-mini .ant-pagination:not(:last-child) {
  margin-bottom: 24px;
}
.tt{
  width: 600px;
  height: 60px;
  display: flex; 
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
}
.qq{
  width: 100%;
  height: 60px;
  display: flex;
}
.gs{
  display: flex;
  flex-direction: column;
}
.yn{
  width: 100%;
  background-color: rgb(246,246,246);
  display: flex;
  justify-content: space-around;
}

.cx {
  margin-top: 8px;
  font-weight: 700;
}
.ls {
  width: 250px;
  border: 1px solid red;
  margin-top: 20px;
}
.bj {
  height: 128px;
  width: 250px;
  border: 1px solid red;
}
.an {
  margin-left: 80px;
}
.bt {
  position: absolute;
  left: 420px;
}
.jp {
  display: flex;
  justify-content: center;
  align-items: center;
}
.jb {
  display: flex;
  flex-direction: column;
}
.hh {
  height: 30px;
  width: 150px;
  justify-content: center;
  align-items: center;

  margin-left: 80px;
}
.top {
  width: 600px;
   flex-direction: column;
  border: 1px solid red;
  margin-left: 280px;
}
.head {
  width: 250px;
  height: 450px;
  border: 1px solid red;
  margin-left: 20px;
}
.first {
  width: 600px;
  border: 1px solid red;
  height: 30px;
}
.two {
  width: 600px;
  border: 1px solid red;
  height: 30px;
  margin-top: 20px;
  display: flex;
}
.three {
  width: 600px;
  border: 1px solid red;
  height: 30px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: whitesmoke;
}
.four {
  width: 600px;
  border: 1px solid red;
  height: 80px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
.font{
  color:orange;
}
</style>