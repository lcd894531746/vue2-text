<template>
  <div class="w-1920 h-1080 position-relative over-h">
    <div
      class="map w-100pre h-100pre position-absolute over-h index-1"
      id="map"
    ></div>
    <div
      class="main-bg w-100pre h-100pre main-color position-absolute index-10 pointer-none"
    >
      <div
        class="main-color position-absolute top-50 left-69 font-w-500 line-9 font-16"
      >
        {{ getCurrentDateString() }}
      </div>
      <div
        class="project-title w-100pre position-absolute top-18 text-center font-50"
      >
        华东咨询海上风电项目管理平台
      </div>
      <div class="position-absolute top-57 right-41 flex pointer-initial">
        <div
          class="Overview w-141 h-17 flex align-center justify-center"
          @click="allPriview"
        >
          <img
            src="../assets/svg/obviewicon.png"
            class="h-13 mr-5 margin-top"
            alt=""
          />
          <span class="margin-top">总览</span>
        </div>
        <div class="sea-breeze w-141 h-17 flex align-center justify-center">
          <img
            src="../assets/img/Enterprise/perjectBig.png"
            class="h-13 mr-5 margin-top"
            alt=""
          />
          <span class="margin-top">项目级大屏</span>
        </div>
      </div>

      <div class="position-absolute top-114 left-68 right-66 bottom-33">
        <!-- 第一部部分 -->
        <div class="flex justify-between">
          <div
            :class="showOrhide ? 'show-left' : 'hide-left'"
            class="w-414 h-287 flex flex-column pointer-initial transformShow"
          >
            <div class="w-100pre text-fff h-100pre">
              <div
                class="title-bg h-49 pl-11 font-24 font-family"
                @click="windowShow = true"
              >
                <div class="flex align-center pt-6">
                  <div class="border-title-bg w-20 h-19 mr-10 text-center">
                    <img
                      src="../assets/img/Enterprise/sign_icon.png"
                      class="img_block img_scale w-100pre h-100pre"
                      alt=""
                    />
                  </div>
                  <div>累计签约项目情况</div>
                </div>
              </div>
              <div class="content-bg h-238">
                <div class="flex justify-around mt-8">
                  <div
                    class="w-120 h-140 leiji text-center"
                    v-for="item in qianyueList"
                    :key="item.id"
                  >
                    <div class="mt-13">
                      <img
                        :src="
                          require(`../assets/img/Enterprise/${item.icon}.png`)
                        "
                        class="w-71 h-58"
                        alt=""
                      />
                    </div>
                    <div
                      class="mt-8 mb-10 font-14 sub-color Source-Han-Sans-CN-Bold"
                    >
                      {{ item.type }}
                    </div>
                    <div>
                      <span
                        class="font-24 mr-5 heightLight"
                        style="font-family: Montserrat-Ace-SemiBold"
                        >{{ item.value }}</span
                      >
                      <span class="font-12 sub-color">{{ item.unit }}</span>
                    </div>
                  </div>
                </div>
                <div class="line mt-11 mb-14"></div>
                <div class="flex justify-center align-center">
                  <img
                    src="../assets/img/Enterprise/moneyicon.png"
                    class="w-24 h-22 img_block"
                    alt=""
                  />
                  <div class="ml-9 mr-33 sub-color Source-Han-Sans-CN-Bold">
                    签约金额
                  </div>
                  <div class="huanbi w-110 h-50 mr-12 text-center">
                    <div class="mt-7 font-14 sub-color Source-Han-Sans-CN-Bold">
                      环比
                    </div>
                    <div>
                      <img
                        src="../assets/img/Enterprise/up.png"
                        class="w-14"
                        alt=""
                      />
                      <span
                        class="font-w-600 font-20"
                        style="
                          color: rgba(213, 76, 90, 1);
                          font-family: Montserrat-Ace-SemiBold;
                        "
                        >5%</span
                      >
                    </div>
                  </div>
                  <div class="huanbi w-110 h-50 text-center">
                    <div class="mt-7 font-14 sub-color Source-Han-Sans-CN-Bold">
                      同比
                    </div>
                    <div>
                      <img
                        src="../assets/img/Enterprise/down.png"
                        class="w-14"
                        alt=""
                      />
                      <span
                        class="font-w-600 font-20"
                        style="
                          color: #4cd5a3;
                          font-family: Montserrat-Ace-SemiBold;
                        "
                        >5%</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex-1 flex pt-20 justify-center pointer-none">
            <div
              v-for="(item, index) in allProgress"
              :key="item.id"
              class="w-108 h-61 progress-bg mx-13"
            >
              <div class="flex justify-center pt-3">
                <img
                  class="w-20 mr-7"
                  :src="require(`../assets/img/Enterprise/${item.icon}.png`)"
                  alt=""
                />
                <div style="color: #9bdbff">{{ item.name }}</div>
              </div>
              <div
                v-if="index === 0"
                style="color: #b4b4b4"
                class="font-w-600 pt-7 font-15 text-center"
              >
                暂无数据
              </div>
              <div v-else class="font-w-600 pt-7 font-27 pl-17">
                {{ item.value }}
              </div>
            </div>
          </div>

          <div
            :class="showOrhide ? 'show-right' : 'hide-right'"
            class="w-414 h-287 flex flex-column pointer-initial transformShow"
          >
            <div class="w-100pre text-fff">
              <div
                class="title-bg h-49 pl-11 font-24 font-family"
                @click="windowShow = true"
              >
                <div class="flex align-center pt-6">
                  <div class="border-title-bg w-20 h-19 mr-10">
                    <img
                      src="../assets/img/Enterprise/sign_icon.png"
                      class="img_block img_scale w-100pre h-100pre"
                      alt=""
                    />
                  </div>
                  <div>年度签约项目情况</div>
                </div>
              </div>
              <div class="content-bg h-238">
                <div class="flex justify-around mt-8">
                  <div
                    class="w-120 h-140 leiji text-center"
                    v-for="item in qianyueList"
                    :key="item.id"
                  >
                    <div class="mt-13">
                      <img
                        :src="
                          require(`../assets/img/Enterprise/${item.icon}.png`)
                        "
                        class="w-71 h-58"
                        alt=""
                      />
                    </div>
                    <div
                      class="mt-8 mb-10 font-14 sub-color Source-Han-Sans-CN-Bold"
                    >
                      {{ item.type }}
                    </div>
                    <div>
                      <span
                        class="font-24 mr-5 heightLight"
                        style="font-family: Montserrat-Ace-SemiBold"
                        >{{ item.value }}</span
                      >
                      <span class="font-12 sub-color">{{ item.unit }}</span>
                    </div>
                  </div>
                </div>
                <div class="line mt-11 mb-14"></div>
                <div class="flex justify-center align-center">
                  <img
                    src="../assets/img/Enterprise/moneyicon.png"
                    class="w-24 h-22 img_block"
                    alt=""
                  />
                  <div class="ml-9 mr-33 sub-color Source-Han-Sans-CN-Bold">
                    签约金额
                  </div>
                  <div class="huanbi w-110 h-50 mr-12 text-center">
                    <div class="mt-7 font-14 sub-color Source-Han-Sans-CN-Bold">
                      环比
                    </div>
                    <div>
                      <img
                        src="../assets/img/Enterprise/up.png"
                        class="w-14"
                        alt=""
                      />
                      <span
                        class="font-w-600 font-20"
                        style="
                          color: rgba(213, 76, 90, 1);
                          font-family: Montserrat-Ace-SemiBold;
                        "
                        >5%</span
                      >
                    </div>
                  </div>
                  <div class="huanbi w-110 h-50 text-center">
                    <div class="mt-7 font-14 sub-color Source-Han-Sans-CN-Bold">
                      同比
                    </div>
                    <div>
                      <img
                        src="../assets/img/Enterprise/down.png"
                        class="w-14"
                        alt=""
                      />
                      <span
                        class="font-w-600 font-20"
                        style="
                          color: #4cd5a3;
                          font-family: Montserrat-Ace-SemiBold;
                        "
                        >5%</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 第二部部分 -->
        <div class="flex justify-between my-30">
          <div
            :class="showOrhide ? 'show-left' : 'hide-left'"
            class="w-414 h-337 flex flex-column pointer-initial transformShow"
          >
            <div class="w-100pre text-fff h-100pre">
              <div class="title-bg h-49 pl-11" @click="windowShow = true">
                <div class="flex align-center pt-6">
                  <div class="border-title-bg w-20 h-19 mr-10">
                    <img
                      src="../assets/img/Enterprise/jiankong_icon.png"
                      class="img_block w-100pre h-100pre"
                      alt=""
                    />
                  </div>
                  <div class="font-24 font-family">项目海域分布</div>
                  <div class="mr-left mr-25 font-14 sub-color">MORE>></div>
                </div>
              </div>
              <div class="content-bg h-288">
                <div class="text-center pt-17 mb-27">
                  <img
                    src="../assets/img/Enterprise/huan.png"
                    class="w-306 h-152"
                    alt=""
                  />
                </div>
                <div class="flex justify-between flex-wrap px-20">
                  <div
                    class="flex justify-between align-center w-139 h-25 px-17 mb-12 seaBorder"
                    style="background-color: rgba(155, 219, 255, 0.1)"
                    v-for="item in projectSea"
                    :key="item.id"
                  >
                    <div class="flex align-center">
                      <div
                        class="w-8 h-8 mr-5"
                        :style="{ backgroundColor: item.color }"
                      ></div>
                      <div class="font-14 Source-Han-Sans-CN-Bold sub-color">
                        {{ item.type }}
                      </div>
                    </div>
                    <div class="Montserrat-Ace-SemiBold">{{ item.value }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            :class="showOrhide ? 'show-right' : 'hide-right'"
            class="w-414 h-337 flex flex-column pointer-initial transformShow"
          >
            <div class="w-100pre text-fff">
              <div class="title-bg h-49 pl-11" @click="windowShow = true">
                <div class="flex align-center pt-6">
                  <div class="border-title-bg w-20 h-19 mr-10">
                    <img
                      src="../assets/img/Enterprise/cangshang_icon.png"
                      class="img_block img_scale w-100pre h-100pre"
                      alt=""
                    />
                  </div>
                  <div class="font-24 font-family">关键设备厂商统计</div>
                  <div class="mr-left mr-25 font-14 sub-color">MORE>></div>
                </div>
              </div>
              <div class="content-bg h-288">
                <div id="echarts" class="w-100pre h-100pre"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- 第三部部分 -->
        <div class="flex justify-between">
          <div
            :class="showOrhide ? 'show-bottom' : 'hide-bottom'"
            class="w-414 h-248 flex flex-column pointer-initial transformShow"
          >
            <div class="w-100pre text-fff h-100pre">
              <div
                class="title-bg h-49 pl-11 font-24 font-family"
                @click="windowShow = true"
              >
                <div class="flex align-center pt-6">
                  <div class="border-title-bg w-20 h-19 mr-10">
                    <img
                      src="../assets/img/Enterprise/yuanli.png"
                      class="img_block img_scale w-100pre h-100pre"
                      alt=""
                    />
                  </div>
                  <div>海风施工原理片</div>
                </div>
              </div>
              <div class="content-bg h-199 flex">
                <div class="auto">
                  <video
                    src="./test2.mp4"
                    class="w-320 h-180"
                    controls
                    autoplay
                  ></video>
                </div>
              </div>
            </div>
          </div>
          <div
            :class="showOrhide ? 'show-bottom' : 'hide-bottom'"
            class="flex-1 mx-37 h-248 flex flex-column pointer-initial transformShow"
          >
            <div class="w-100pre text-fff">
              <div class="title-bg h-49 pl-11" @click="windowShow = true">
                <div class="flex align-center pt-6">
                  <div class="border-title-bg w-20 h-19 mr-10">
                    <img
                      src="../assets/img/Enterprise/ship.png"
                      class="img_block img_scale w-100pre h-100pre"
                      alt=""
                    />
                  </div>
                  <div class="font-24 font-family">项目在场船舶情况</div>
                  <div class="mr-left mr-25 font-14 sub-color">MORE>></div>
                </div>
              </div>
              <div class="content-bg h-199 flex align-center justify-around">
                <div
                  class="text-center"
                  v-for="item in onShipInfo"
                  :key="item.id"
                >
                  <img
                    :src="require(`../assets/img/Enterprise/${item.icon}.png`)"
                    class="w-87 h-87"
                    alt=""
                  />
                  <div class="font-14 sub-color SourceHanSansCN-Medium mt-10">
                    {{ item.type }}
                  </div>
                  <div class="MYRIADPRO-REGULAR">{{ item.value }}</div>
                </div>
              </div>
            </div>
          </div>

          <div
            :class="showOrhide ? 'show-bottom' : 'hide-bottom'"
            class="w-414 h-248 flex flex-column pointer-initial transformShow"
          >
            <div class="w-100pre text-fff">
              <div
                class="title-bg h-49 pl-11 font-24 font-family"
                @click="windowShow = true"
              >
                <div class="flex align-center pt-6">
                  <div class="border-title-bg w-20 h-19 mr-10">
                    <img
                      src="../assets/img/Enterprise/qianyue.png"
                      class="img_block w-100pre h-100pre"
                      alt=""
                    />
                  </div>
                  <div>主要客户签约项目</div>
                </div>
              </div>
              <div class="content-bg h-199">
                <div class="px-10 pt-27 pb-20 main-project">
                  <div
                    class="Source-Han-Sans-CN-Bold flex justify-between mb-20 pb-5 main-project-bottom"
                    style="color: #00fff6"
                    v-for="item in mainProject"
                    :key="item.id"
                  >
                    <div class="flex align-center">
                      <div class="mr-3">
                        <img
                          src="../assets/img/Enterprise/fangkuai.png"
                          class="img_block w-11 h-11"
                          alt=""
                        />
                      </div>
                      <div class="font-14">{{ item.name }}</div>
                    </div>
                    <div class="font-14">{{ item.value }}个</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <dialog-lv v-show="dialogShow" @close="close"></dialog-lv>
    <window-lv
      class="window"
      v-show="windowShow"
      @close="windowShow = false"
    ></window-lv>
  </div>
</template>
<script>
import dialogLv from "./dialog";
import windowLv from "./window";

import * as echarts from "echarts/core";
import { TooltipComponent, GridComponent } from "echarts/components";
import { BarChart, PictorialBarChart } from "echarts/charts";
import { SVGRenderer } from "echarts/renderers";
echarts.use([
  TooltipComponent,
  GridComponent,
  BarChart,
  PictorialBarChart,
  SVGRenderer,
]);
export default {
  components: { dialogLv, windowLv },
  data() {
    return {
      windowShow: false,
      allProgress: [
        {
          name: "施工准备",
          id: 1,
          icon: "0",
          value: "4",
        },
        {
          name: "在建",
          id: 2,
          icon: "1",
          value: "3",
        },
        {
          name: "停工",
          id: 3,
          icon: "2",
          value: "3",
        },
        {
          name: "完工",
          icon: "3",
          id: 4,
          value: "1",
        },
        {
          name: "收尾",
          icon: "4",
          id: 5,
          value: "1",
        },
        {
          name: "已竣工",
          icon: "5",
          id: 6,
          value: "1",
        },
      ],
      showOrhide: false,
      dialogShow: false,

      //累计签约
      qianyueList: [
        {
          icon: "projectTotal",
          type: "项目数量",
          value: "40",
          unit: "个",
          id: 1,
        },
        {
          icon: "qianyuejine",
          type: "签约金额",
          value: "40",
          unit: "亿",
          id: 2,
        },
        {
          icon: "pinjunjine",
          type: "平均签约",
          value: "40",
          unit: "亿",
          id: 3,
        },
      ],
      projectSea: [
        {
          color: "#80C2FF",
          type: "黄海",
          value: "7",
          id: 1,
        },
        {
          color: "#6FF1F1",
          type: "渤海",
          value: "2",
          id: 2,
        },
        {
          color: "#FFCD7C",
          type: "东海",
          value: "5",
          id: 3,
        },
        {
          color: "#718DFF",
          type: "南海",
          value: "3",
          id: 4,
        },
      ],

      onShipInfo: [
        {
          icon: "fanship",
          type: "风机安装船",
          value: "40",
          id: 1,
        },
        {
          icon: "fushiship",
          type: "浮式起重船",
          value: "40",
          id: 2,
        },
        {
          icon: "dazhuangship",
          type: "专业打桩船",
          value: "40",
          id: 3,
        },
        {
          icon: "yunshuship",
          type: "运输船",
          value: "40",
          id: 4,
        },
        {
          icon: "jiaotongship",
          type: "交通船",
          value: "40",
          id: 5,
        },
      ],
      mainProject: [
        {
          name: "山东新能源集团",
          value: "40",
          id: 1,
        },
        {
          name: "中国华能集团",
          value: "40",
          id: 2,
        },
        {
          name: "中国三峡集团",
          value: "40",
          id: 3,
        },
        {
          name: "中国大唐集团",
          value: "40",
          id: 4,
        },
      ],
      myChart: "",
      option: "",
    };
  },
  mounted() {
    this.initMap();
    this.initEcharts();
  },
  methods: {
    initMap() {
      //地图加载
      this.map = new AMap.Map("map", {
        resizeEnable: true,
        viewMode: "2D", //是否为3D地图模式
        zoom: 14, //初始化地图级别
        center: [116.403322, 39.920255],
        // pitch: 30, // 地图俯仰角度，有效范围 0 度- 83 度
        mapStyle: "amap://styles/darkblue",
      });
      this.allPriview();
      this.setMark();
      this.map.on("zoomchange", () => {
        console.log("当前级别", this.map.getZoom());
      });

      var path = [
        [116.403322, 39.920255],
        [116.410703, 39.897555],
        [116.402292, 39.892353],
        [116.389846, 39.891365],
      ];
      // 创建渐变对象
      let maek = new AMap.Marker({
        position: [116.403322, 39.920255],
      });
      this.map.add(maek);
      var polygon = new AMap.Polygon({
        path: path,
        strokeColor: "#FF33FF",
        strokeWeight: 6,
        strokeOpacity: 0.2,
        zIndex: 50,
      });

      this.map.add(polygon);
    },
    setMark() {
      this.$marks1(this.map, [116.402292, 39.892353]);
      this.$marks2(this.map, [114.8, 31.9]);
    },
    allPriview() {
      this.showOrhide = !this.showOrhide;
    },
    showMoreVideos() {
      this.dialogShow = true;
    },
    close() {
      this.dialogShow = false;
    },
    getCurrentDateString() {
      const date = new Date();
      const days = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      console.log("date.getDay()", date.getDay());
      const weekDay = days[date.getDay()];
      return `${date.getFullYear()}年${
        date.getMonth() + 1
      }月${date.getDate()}日 ${weekDay} ${date.getHours()}:${date.getMinutes()}`;
    },

    initEcharts() {
      var chartDom = document.getElementById("echarts");
      this.myChart = echarts.init(chartDom, null, {
        renderer: "svg",
      });
      // Generate data
      this.option = {
        // backgroundColor: "#0f375f",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: "3%",
          left: "3%",
          right: "5%",
          bottom: "5%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          splitLine: { show: false },
          axisLine: {
            show: true,
            // onZero: false,
            // symbol: ['none', 'arrow'],
            // symbolSize: [5, 10],
            lineStyle: {
              color: "#9BDBFF",
              opacity: 0.4,
            },
          },
        },
        yAxis: {
          type: "category",
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: "#9BDBFF",
              opacity: 0.4,
            },
          },
          axisLabel: {
            color: "#9BDBFF",
            fontWeight: 800,
            fontSize: 15,
          },
          axisTick: {
            show: false,
          },
          data: ["风机厂商", "桩基厂商", "海缆厂商", "叶片厂商"],
        },
        series: [
          {
            name: "bar0",
            type: "bar",
            barGap: "-100%",
            barWidth: 10,
            itemStyle: {
              color: "#ccc",
            },
            z: -12,
            data: [],
            markPoint: {},
          },

          {
            name: "bar1",
            type: "bar",
            barGap: "-100%",
            barWidth: 10,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#5BDEFF" },
                { offset: 1, color: "#9BDBFF" },
              ]),
            },
            z: -12,
            data: [],
          },
          {
            name: "dotted",
            type: "pictorialBar",
            symbol: "",
            itemStyle: {
              color: "#000001",
            },
            symbolRepeat: true,
            symbolSize: [4, 12],
            symbolMargin: 1,
            z: -10,
            data: [],
          },
        ],
      };

      this.option && this.myChart.setOption(this.option);
      this.setMarkP();
    },
    setMarkP() {
      this.option.series[0].data = [1, 1, 1, 1];
      this.option.series[1].data = [0, 0, 1, 1];
      this.option.series[2].data = [1, 1, 1, 1];
      this.test();
    },

    test() {
      this.option.series[0].markPoint = {
        // 标记的图形
        symbol:
          "image://data:image/png;base64,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",
        symbolSize: 30,
        itemStyle: {
          borderWidth: 1,
        },
        symbolOffset: [0, -10],
        label: {
          color: "#0096ff",
          show: false,
        },
        data: [
          {
            itemStyle: {
              borderColor: "#0ea8ff",
              color: "#fff",
            },
            coord: [0, 0],
          },
          {
            itemStyle: {
              borderColor: "#0ea8ff",
              color: "#fff",
            },
            coord: [0, 1],
          },
          {
            itemStyle: {
              borderColor: "#0ea8ff",
              color: "#fff",
            },
            coord: [0.7, 2],
          },
          {
            itemStyle: {
              borderColor: "#0ea8ff",
              color: "#fff",
            },
            coord: [0.5, 3],
          },
        ],
      };
      this.myChart.setOption(this.option);
    },
  },
};
</script>
<style lang='scss' scoped>
.font-family {
  font-family: "优设标题黑" !important;
}
.main-color {
  color: #e6eeff;
}
.sub-color {
  color: #9bdbff;
}
.main-bg {
  background-image: url("../assets/svg/border.png");
  // background-image: url("../assets/svg/border.png"), url("../assets/svg/bg.png");
  // background-color: #081429;
  background-size: 100% 100%;
}
.Overview {
  background-image: url("../assets/svg/Overview.png");
  background-size: 100% 100%;
}
.sea-breeze {
  background-image: url("../assets/svg/Overview.png");
  background-size: 100% 100%;
}
.progress-bg {
  // background-image: url("../assets/svg/nodataLine.png");
  background-image: url("../assets/svg/progressBorder.png");
  background-size: 100% 100%;
}
.title-bg {
  background-image: url("../assets/img/Enterprise/progressTitle.png");
  background-size: 100% 100%;
}
.content-bg {
  background-image: url("../assets/svg/progressContent.png");
  background-size: 100% 100%;
}

.fanborder {
  background-image: url("../assets/svg/fanborder.png");
  background-size: 100% 100%;
  text-shadow: 5px 5px 20px rgba(95, 7, 96, 01);
}
.project-title {
  font-family: "优设标题黑";
  background: -webkit-linear-gradient(
    top,
    #fff,
    #c1ebff
  ); /* 使用webkit前缀适配浏览器 */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.pointer-none {
  pointer-events: none;
}
.pointer-initial {
  pointer-events: initial;
}

.border-title-bg {
  background-image: url("../assets/img/Enterprise/border.png"),
    url("../assets/img/Enterprise/x.png");
  background-size: 100% 100%;
}
.seaBorder {
  background-image: url("../assets/img/Enterprise/seaBorder.png");
  background-size: 100% 100%;
}

.img_scale {
  transform: scale(1.8);
}

.leiji {
  background: rgba(14, 42, 88, 0.3);
}

.heightLight {
  text-shadow: 0 0 7px #00ffff;
}
.line {
  width: 100%;
  height: 2px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(155, 219, 255, 0.3),
    transparent
  );
}

.huanbi {
  background-image: url("../assets/img/Enterprise/huanbi.png");
  background-size: 100% 100%;
}
.main-project {
  overflow: auto;
}
.main-project-bottom {
  border-bottom: #9bdbff 1px solid;
}
</style>

<style lang='scss' scoped>
/deep/ .amap-marker-label {
  border: 0;
  background-color: transparent;
}
.transformShow {
  transition: transform 1s ease;
}
.show-left,
.show-right,
.show-bottom {
  transform: translateX(0);
}
.hide-left {
  transform: translateX(-130%);
}
.hide-right {
  transform: translateX(130%);
}
.hide-bottom {
  transform: translateY(120%);
}
.Source-Han-Sans-CN-Bold {
  font-family: "Source-Han-Sans-CN-Bold";
}
.Montserrat-Ace-SemiBold {
  font-family: "Montserrat-Ace-SemiBold";
}
.SourceHanSansCN-Medium {
  font-family: "SourceHanSansCN-Medium";
}
.MYRIADPRO-REGULAR {
  font-family: "MYRIADPRO-REGULAR";
}
</style>