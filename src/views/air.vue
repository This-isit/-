<template>
  <div>
    <div class="top">国内机票</div>
    <div class="gw">
      <div class="dc">
        <div class="d-f">
          <div class="log" @click="login">单程</div>
          <div class="renter" @click="warning">往返</div>
        </div>
        <div class="some">
          <div class="rules">
            <div>
              出发城市
              <input v-model="value1" placeholder="请搜索出发城市" type="text" />
            </div>

            <div>
              到达城市
              <input v-model="value2" placeholder="请搜索到达城市" type="text" />
            </div>
            <div class="jh" @click="huan">换</div>

            <div class="df">
              <a-input-group compact>
                出发时间
                <a-date-picker
                  format="YYYY-MM-DD"
                  :disabled-date="disabledDate"
                  :disabled-time="disabledDateTime"
                  placeholder="请选择日期"
                  v-model="day"
                  @change="onChange"
                  :show-time="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"
                />
              </a-input-group>
            </div>

            <a-button type="primary" class="lu" @click="bb(item)">
              <SearchOutlined />搜索
            </a-button>
          </div>
        </div>
      </div>
      <div class="im">
        <img src="../assets/pic_sale.jpeg" alt style="height: 310px;
    width: 560px;" />
      </div>
    </div>
    <div class="top">
      <div class="hh">100%航协认证</div>
      <div class="hh">出行保证</div>
      <div class="hh">7x24小时服务</div>
    </div>
    <div class="top">特价机票</div>
    <div class="tj">
      <div v-for="(item,index) in res" :key="index" @click="mp(item)">
        <img :src="item.cover" alt class="img" />
        <div class="fk">{{item.departCity}}-{{item.destCity}}&nbsp;&nbsp;￥{{item.price}}</div>
      </div>
    </div>
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
import { message } from "ant-design-vue";
// import moment from '@ant-design/icons-vue';
import moment from "moment";
import { RuleItem, Ruless, FormItems } from "@/types/type";
import { useRouter } from "vue-router";
import api from "@/http/api";
interface Data {
  msgBody: string[];
  newname: string;
  value8: string;
  active: number;
  res: string[];
  value1: string;
  value2: string;
  day: string;
  d: string;
  c: string;
  id: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const router = useRouter();
    const data: Data = reactive<Data>({
      active: 0,
      res: [],
      day: "",
      newname: "",
      value8: "",
      value1: "",
      value2: "",
      msgBody: [],
      d: "",
      c: "",
      id: "",
    });

    const bb = (e: any): void => {
      const templist = JSON.parse(localStorage.getItem("msgBody") || "[]");
      data.msgBody.push(data.value1);
      data.msgBody.push(data.value2);
      data.msgBody.push(data.id);
      templist.push(data.msgBody);
      localStorage.setItem("msgBody", JSON.stringify(templist));
      router.push({
        path: "/airpocket",
        query: {
          value1: data.value1,
          value2: data.value2,
          id:data.id
        },
      });
    };
    const mp = (e: any): void => {
      console.log(e);
      router.push({
        path: "/airpocket",
        query: {
          departCity: e.departCity,
          departCode: e.departCode,
          departDate: e.departDate,
          destCity: e.destCity,
          destCode: e.destCode,
        },
      });
    };

    onMounted(() => {
      console.log(data.day);
      api
        .getair()
        .then((res: any) => {
          data.res = res.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
        
    });
    const warning = (): void => {
      message.warning("小哥哥，小姐姐我们这里只能去不能回。");
    };
    const range = (start: number, end: number) => {
      const result = [];
      for (let i = start; i < end; i++) {
        result.push(i);
      }
      return result;
    };
    const disabledDate = (currentDate: any) => {
      return currentDate < moment().subtract(1, "day");
    };
    const onChange = (e: any): void => {
      console.log(e._d);
      const d = new Date(e._d);
       const id =
        d.getFullYear() +
        "-" +
        (d.getMonth() + 1) +
        "-" +
        d.getDate()
        console.log(id);
        data.id=id
          
    };
    const disabledDateTime = () => {
      return {
        disabledHours: () => range(0, 24).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    };
    const huan = (): void => {
      const city = data.value1;
      data.value1 = data.value2;
      data.value2 = city;
      console.log(data.value1);
      console.log(data.value2);
    };
    return {
      ...toRefs(data),
      warning,
      huan,
      bb,
      range,
      disabledDate,
      disabledDateTime,
      moment,
      mp,
      onChange,
    };
  },
});
</script>

<style scoped lang='scss'>
.df {
  display: flex;
  height: 30px width：80px;
}
.jh {
  height: 20px;
  width: 20px;
  background-color: #999999;
  position: absolute;
  top: 180px;
  left: 550px;
}
.fk {
  position: absolute;
  top: 639px;
}
.lu {
  width: 185px;
  text-align: center;
  margin-left: 100px;
  border-radius: 3%;
}
.img {
  height: 125px;
  width: 200px;
  border: 1px solid red;
  margin-right: 2px;
}
.hh {
  height: 50px;
  display: flex;
  width: 300px;
  justify-content: center;
  align-items: center;
  background: whitesmoke;
}
.im {
  height: 310px;
  width: 560px;
  border: 1px solid red;
  margin-left: 20px;
}
.dc {
  width: 370px;
  height: 310px;
  border: 1px solid red;
  justify-content: center;
  align-items: center;
}
.top {
  display: flex;
  height: 50px;
  width: 100%;
  border: 1px solid red;
  justify-content: center;
  align-items: center;
  font-weight: 700;
}
.gw {
  display: flex;
  height: 329px;
  width: 100%;
  border: 1px solid red;
  justify-content: center;
  align-items: center;
}
.tj {
  display: flex;
  height: 129px;
  width: 100%;
  border: 1px solid red;
  justify-content: center;
  align-items: center;
}
.log {
  width: 175px;
  height: 50px;
  background: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  background: white;
  border-top: 3px solid rgb(255, 165, 0);
  color: rgb(255, 165, 0);
}
.renter {
  width: 175px;
  height: 50px;
  background: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
}
</style>

