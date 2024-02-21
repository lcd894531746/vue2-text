<template>
  <div class="w-100pre h-100pre">
    <!-- version 2 -->
    <div
      v-if="false"
      class="h-vh w-vw bgColor flex justify-center align-center"
    >
      <div class="w-803 h-700 rounded-left-11">
        <swiperLv class="w-100pre h-100pre"></swiperLv>
      </div>
      <div class="w-430 h-700 bg-fff rounded-right-11 pt-66 pl-59">
        <div class="font-26 title">COP协同办公系统</div>
        <div class="pt-48 pb-42 font-29 loginTitle">登录</div>
        <div class="w-319">
          <a-input class="pb-36" v-model="userName" placeholder="账号/工号">
            <template #prefix>
              <!-- <user-outlined type="user" /> -->
              <span></span>
            </template>
          </a-input>
          <a-input-password
            class="mb-22"
            v-model="password"
            placeholder="input password"
          >
            <template #prefix>
              <span></span>
            </template>
          </a-input-password>
          <a-radio class="pb-34">记住密码</a-radio>
          <a-button type="primary" class="h-50 font-16 login" block>
            登录
          </a-button>
          <div class="pt-55 pb-11 w-100pre flex justify-center">
            <div>
              <img class="w-110" src="./andriod.png" alt="" srcset="" />
            </div>
          </div>
          <div class="text-center jinghe pb-8">
            使用鲸禾cp办公系统APP扫码快速登陆
          </div>
          <div class="text-center copyright">
            Copyright 2021 鲸禾科技 . All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
    <div v-if="false">
      <wave-ball
        class="ball"
        :rate="0.36"
        :bSize="120"
        :waveColor="'#4FAEFC'"
        :fontColor="'#8B008B'"
        :fontSize="28"
        :canvasId="`item_1`"
      ></wave-ball>
    </div>
    <components class="w-100pre h-100pre" :is="component"></components>
  </div>
</template>

<script>
// import swiperLv from "./swiperLv.vue";
// import bozhong from "./bozhong.vue";
// import waveBall from "./shuiqiu.vue";
// import tableLv from "./tableLv.vue";
// import ganttLv from "./gantt_lv.vue";
// import tets from "./tets.vue";
// import qrcode from "./qrcode.vue";
// import jsonTest from "./jsonTest.vue";
// import echartsTest from "./echartsTest.vue";
// import bigScree from "./bigScree.vue";
// import qiyejiBIG from "./qiyejiBIG.vue";
// import flotTest from "./flotTest.vue";
// import componentsTest from "./componentsTest.vue";
// import testXlsx from "./testXlsx.vue";
// import test1 from "./test1.vue";
// import request from "./request.vue";
// import xgpler from "./xgpler.vue";
// import ruoyi from "./ruoyi.vue";
// import model1 from "./model1.vue";
// import upload from "./upload.vue";
import three from "./three/index.vue";


export default {
  name: "Home",
  components: {
    // flotTest,
    // swiperLv,
    // bozhong,
    // waveBall,
    // tableLv,
    // ganttLv,
    // tets,
    // qrcode,
    // jsonTest,
    // echartsTest,
    // bigScree,
    // qiyejiBIG,
    // componentsTest,
    // testXlsx,
    // test1,
    // request,
    // xgpler
    // upload
    // ruoyi
    // model1
    three
  },
  data() {
    return {
      component: "three",
      videoUrl: require("./test.mp4"),
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      hourly24: [], //24小时天气预报
      userName: "",
      password: "",
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },

  mounted() {
    // this.getData();
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
    const treeData = {
      root: {
        name: "root",
        children: [
          {
            name: "node01",
            children: [
              {
                name: "node011",
                children: [{ name: "node0111" }, { name: "node0112" }],
              },
            ],
          },
          {
            name: "node02",
          },
        ],
      },
    };

    // 调用
    // this.treeTraverse(treeData.root);
    // this.testCOP();
  },
  methods: {
    getData() {
      const box = document.getElementById("box");
      const text = document.getElementById("percentText");
      let i = 0;
      let timer = null;
      const loading = () => {
        if (i < 100) {
          i++;
          box.style.setProperty("--per", i + "%");
          text.innerHTML = i + "%";
        } else {
          i = 0;
          clearInterval(timer);
          setTimeout(() => {
            text.innerHTML = "0%";
            box.style.setProperty("--per", "0%");
            timer = setInterval(loading, 100);
          }, 2000);
        }
      };
      loading();
      timer = setInterval(loading, 100);
    },
    // 执行
    // cop 按照事件排序
    testCOP() {
      let arr = [
        {
          code: 1,
          id: "1737634",
          taskName: "迟到抵扣",
          taskId: "task1653546790512",
          taskAssigneeName: "蔡胜文",
          taskAssigneeId: "caishengwen",
          taskBeginTime: "2023-02-06 14:44:44",
          taskEndTime: null,
          taskDueTime: null,
          processApplyUserName: "蔡胜文",
          processApplyUserId: "caishengwen",
          processDefinitionId: "process1653545944517:5:1737607",
          processDefinitionName: "迟到抵扣",
          processInstanceId: "1737608",
          bpmBizTitle: "迟到抵扣【蔡胜文】",
          bpmStatus: null,
          taskTimeoutWarn: null,
          taskUrge: false,
          taskUrgeRemark: null,
          remarks: null,
          durationStr: null,
        },
        {
          code: 2,
          id: "1737571",
          taskName: "迟到抵扣",
          taskId: "task1653546790512",
          taskAssigneeName: "蔡胜文",
          taskAssigneeId: "caishengwen",
          taskBeginTime: "2023-02-06 14:41:59",
          taskEndTime: null,
          taskDueTime: null,
          processApplyUserName: "蔡胜文",
          processApplyUserId: "caishengwen",
          processDefinitionId: "process1653545944517:3:1580017",
          processDefinitionName: "迟到抵扣",
          processInstanceId: "1737545",
          bpmBizTitle: "迟到抵扣【蔡胜文】",
          bpmStatus: null,
          taskTimeoutWarn: null,
          taskUrge: false,
          taskUrgeRemark: null,
          remarks: null,
          durationStr: null,
        },
        {
          code: 3,
          id: "1737571",
          taskName: "迟到抵扣",
          taskId: "task1653546790512",
          taskAssigneeName: "蔡胜文",
          taskAssigneeId: "caishengwen",
          taskBeginTime: "2023-02-01 14:41:59",
          taskEndTime: null,
          taskDueTime: null,
          processApplyUserName: "蔡胜文",
          processApplyUserId: "caishengwen",
          processDefinitionId: "process1653545944517:3:1580017",
          processDefinitionName: "迟到抵扣",
          processInstanceId: "1737545",
          bpmBizTitle: "迟到抵扣【蔡胜文】",
          bpmStatus: null,
          taskTimeoutWarn: null,
          taskUrge: false,
          taskUrgeRemark: null,
          remarks: null,
          durationStr: null,
        },
        {
          code: 4,
          id: "1737571",
          taskName: "迟到抵扣",
          taskId: "task1653546790512",
          taskAssigneeName: "蔡胜文",
          taskAssigneeId: "caishengwen",
          taskBeginTime: "2023-02-07 14:41:59",
          taskEndTime: null,
          taskDueTime: null,
          processApplyUserName: "蔡胜文",
          processApplyUserId: "caishengwen",
          processDefinitionId: "process1653545944517:3:1580017",
          processDefinitionName: "迟到抵扣",
          processInstanceId: "1737545",
          bpmBizTitle: "迟到抵扣【蔡胜文】",
          bpmStatus: null,
          taskTimeoutWarn: null,
          taskUrge: false,
          taskUrgeRemark: null,
          remarks: null,
          durationStr: null,
        },
      ];

      arr.sort(function(a, b) {
        return a.taskBeginTime < b.taskBeginTime ? 1 : -1;
      });
      console.log("arr", arr);
    },

    cssClick() {
      console.log("测试点击事件");
    },

    // 递归函数
    treeTraverse(node) {
      console.log(node.name);
      if (node.children && node.children.length > 0) {
        node.children.forEach((item) => {
          this.treeTraverse(item);
        });
      }
    },
  },
};
</script>

<style scoped>
.bgColor {
  background-color: #0084ff;
}
.title {
  font-family: Source Han Sans Old Style;
  font-weight: bold;
  color: #007aff;
  line-height: 14px;
}
.loginTitle {
  font-size: 29px;
  font-family: PingFang SC;
  font-weight: 600;
  color: #1b2431;
  line-height: 21px;
}
.jinghe {
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #1b2431;
  line-height: 14px;
  opacity: 0.97;
}
.copyright {
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #656566;
  line-height: 14px;
  opacity: 0.97;
}
.login {
  font-family: PingFang SC;
}
</style>

<style scoped>
/* 使用css  做节流 */
#cssClick {
  animation: throul 2s step-end forwards;
}

#cssClick:active {
  animation: none;
}
/* 定义一个动画 */
@keyframes throul {
  from {
    color: red;
    pointer-events: none;
  }
  to {
    color: blue;
    pointer-events: all;
  }
}
</style>
<style>
* {
  padding: 0;
  margin: 0;
}
</style>
