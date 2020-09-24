<template>
  <div>
    <div class="dd">
      <a-menu
        class="input"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        style="width: 256px; "
        mode="vertical"
        @click="handleClick"
      >
        <a-sub-menu v-for="(item,index) in res" :key="index">
          <template v-slot:title>
            <span>
              <span>{{item.type}}</span>
            </span>
          </template>
          <a-menu-item v-for="(item1,index1) in item.children" :key="index1">
            {{index1}}
            {{item1.city}}
            {{item1.desc}}
          </a-menu-item>
        </a-sub-menu>
      </a-menu>

      <div class="hh">
        <div class="ee">
          <a-input-search
            class="ss"
            v-model:value="value"
            placeholder="请输入想去的地方，比如：“广州"
            style="width: 200px;"
            @search="onSearch"
          />
        </div>
        <div class="ff">推荐： 广州 上海 北京</div>
        <div class="ji">
          <div class="tui">推荐攻略</div>
          <div>
            <a-button type="primary" class="btn">
              <EditOutlined />写游记
            </a-button>
          </div>
        </div>

        <div class="one" v-for=" (item,index) in ress" :key="index" @click="bb(item)">
          <div>{{item.title}}</div>
          <div class="jj">{{item.summary}}</div>
          <div class="xx">
            <div v-for="(item1,index1) in item.images" :key="index1">
              <img :src="item1" alt class="imge" />
            </div>
          </div>
          <div>
            <EnvironmentOutlined />
            {{item.cityName}} by {{item.account.nickname}}
            <EyeOutlined />
            {{item.watch}}
          </div>
        </div>
      </div>
    </div>

    <div class="gg">
      <div>推荐城市</div>
      <div>____________________________________________</div>
      <img src="../assets/xiansheng.png" alt class="img" />
    </div>
    <div class="ll"></div>
  </div>
</template>

<script lang='ts'>
import { useRouter } from "vue-router";
import api from "@/http/api";
import {
  Res,
  typeItem,
  ChildrenItem,
  Account,
  AccountItem,
} from "@/types/type";
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
} from "vue";
interface Data {
  res: typeItem[];
  selectedKeys: [];
  openKeys: [];
  ress: Account[];
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const router = useRouter();

    const data: Data = reactive<Data>({
      res: [],
      selectedKeys: [],
      openKeys: [],
      ress: [],
    });

    const bb = (e: any): void => {
      console.log(e);
      router.push({
        path: "/detail",
        query: { id: e.id },
      });
    };
    onMounted(() => {
      api
        .getpost()
        .then((res: Res) => {
          data.res = res.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      api.getposts({ city: "北京" }).then((res: any) => {
        data.ress = res.data;

        console.log(res);
      });
    });
    return {
      ...toRefs(data),
      bb,
    };
  },
});
</script>

<style scoped lang='scss'>
.ss {
}
.ll {
}
.xx {
  display: flex;
}
.imge {
  width: 225px;
  height: 200px;
}
.jj {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.one {
  font-weight: 400;
  font-size: large;
}
.font {
  color: #ffa500;
  border-bottom: 5px solid #ffa500;
  font-weight: 700;
  width: 60px;
}

.hh {
  width: 680px;

  border: 1px solid red;
  left: 480px;
}
.gg {
  height: 250px;
  width: 256px;
  position: absolute;
  top: 280px;
  left: 170px;
}
.dd {
  margin-left: 170px;
  display: flex;
  width: 100%;
}
.ee {
  height: 100px;
  width: 500px;
  margin-left: 50px;
}
.ff {
}
.img {
  width: 252px;
  margin-top: 20px;
}
.input {
}
.ji {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  margin-top: 20px;
}
.tui {
  font-size: 18px;
  color: orange;
  height: 50px;
  border-bottom: 2px solid orange;
}
.btn {
  height: 40px;
}
</style>