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
        2023.07.07 星期五 18：00
      </div>
      <div
        class="project-title w-100pre position-absolute top-5 text-center font-50"
      >
        山东新能源渤中B海上风电厂址项目
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
            src="../assets/svg/videoicon2.png"
            class="h-13 mr-5 margin-top"
            alt=""
          />
          <span class="margin-top">海风原理片</span>
        </div>
      </div>
      <div class="content position-absolute top-114 left-68 right-66 bottom-33">
        <!-- 内容去的上半部分 -->
        <div class="top-content mb-17 flex justify-between">
          <!-- 上把那部分左边部分 -->
          <div
            :class="showOrhide ? 'show-left' : 'hide-left'"
            class="w-420 h-100pre flex flex-column pointer-initial top-left"
          >
            <div class="w-100pre text-fff mb-17">
              <div
                class="title-bg h-42 line-40 pl-35 font-24 font-family"
                @click="windowShow = true"
              >
                工程概况
              </div>
              <div class="content-bg h-321 pl-28 pr-13 pt-7">
                <div class="flex h-204 mb-5">
                  <img
                    src="../assets/svg/windche.png"
                    class="w-180 h-204"
                    alt=""
                  />
                  <div
                    class="h-100pre flex flex-column justify-center align-center"
                  >
                    <div
                      class="fanborder w-183 h-45 pl-24 my-6"
                      style="color: #9bdbff"
                      v-for="item in detalis"
                      :key="item.id"
                    >
                      <div class="font-12 line-25">{{ item.name }}</div>
                      <div class="text-margin">
                        <span class="font-18 font-w-600 heightLight mr-10">{{
                          item.value
                        }}</span>
                        <span class="font-12">{{ item.unit }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex mb-18">
                  <div class="w-180 h-32 flex">
                    <div class="w-25 planDate flex mr-5">
                      <img
                        src="../assets/svg/planDate.png"
                        class="nodata"
                        alt=""
                      />
                    </div>
                    <div>
                      <div class="sub-color font-12 line-14">计划竣工日期</div>
                      <div class="font-w-600 font-18 line-22">2023-08-23</div>
                    </div>
                  </div>
                  <div class="w-180 h-32 flex align-center">
                    <div class="line mr-25"></div>
                    <div class="w-25 h-100pre planDate flex mr-5">
                      <img
                        src="../assets/svg/allDate.png"
                        class="nodata"
                        alt=""
                      />
                    </div>
                    <div>
                      <div class="sub-color font-12 line-14">计划总工日期</div>
                      <div class="font-w-600 font-18 line-22">90天</div>
                    </div>
                  </div>
                </div>

                <div class="flex">
                  <div class="w-180 h-32 flex">
                    <div class="w-25 h-100pre planDate flex mr-5">
                      <img
                        src="../assets/svg/planDate.png"
                        class="nodata"
                        alt=""
                      />
                    </div>
                    <div>
                      <div class="sub-color font-12 line-14">风场位置</div>
                      <div
                        class="font-w-500 font-16 w-150 line-22 text-ellipsis"
                      >
                        山东省东营市北部海域
                      </div>
                    </div>
                  </div>
                  <div class="w-180 h-32 flex align-center">
                    <div class="line mr-25"></div>
                    <div class="w-25 h-100pre planDate flex mr-5">
                      <img
                        src="../assets/svg/allDate.png"
                        class="nodata"
                        alt=""
                      />
                    </div>
                    <div>
                      <div class="sub-color font-12 line-14">所属海域</div>
                      <div class="font-w-500 font-16 line-22">渤海</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-1">
              <div
                class="title-bg h-42 pl-35 pr-20 flex align-center justify-between"
              >
                <div class="font-family font-24 line-40">视频监控</div>
                <div
                  class="font-12"
                  style="color: #9bdbff"
                  @click="showMoreVideos"
                >
                  <span class="mr-10">MORE</span><span>>></span>
                </div>
              </div>
              <div class="content-bg h-214 pl-15 pr-27 py-10">
                <div
                  class="video-content w-100pre h-100pre flex align-center justify-center"
                >
                  <div class="mr-10">
                    <img src="../assets/svg/offline.png" class="mr-10" alt="" />
                  </div>
                  <div class="">离线中...</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 上把那部分中间部分 -->
          <div class="pt-10 flex-1 flex px-106 justify-between pointer-none">
            <div
              v-for="(item, index) in allProgress"
              :key="item.id"
              class="w-151 h-61 progress-bg"
            >
              <div class="flex justify-center pt-3">
                <img
                  class="w-20 mr-7"
                  :src="require(`../assets/svg/${item.icon}.png`)"
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
              <div v-else class="font-w-600 font-27 pl-17">
                {{ item.value }}
              </div>
            </div>
          </div>

          <!-- 上把那部分右边部分 -->
          <div
            :class="showOrhide ? 'show-right' : 'hide-right'"
            class="w-414 h-100pre flex flex-column pointer-initial top-right"
          >
            <div class="w-100pre mb-17">
              <div class="title-bg font-family h-42 line-40 font-24 pl-35">
                天气情况
              </div>
              <div class="content-bg pb-14 px-30">
                <div class="flex justify-between">
                  <div class="pt-10">
                    <div class="flex align-end">
                      <div class="font-45 h-50 mr-10">23°C</div>
                      <div
                        class="weather-bg w-91 h-26 line-26 text-center text-fff"
                      >
                        多云（白）
                      </div>
                    </div>
                    <div class="pt-11 pb-17 font-16" style="color: #9bdbff">
                      7月7日 17：00
                    </div>
                  </div>
                  <div class="pt-15">
                    <img
                      src="../assets/svg/hailan.png"
                      class="w-80 h-80"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  class="weatherBorder w-100pre h-90 flex justify-around align-center"
                >
                  <div
                    v-for="item in weatherType"
                    :key="item.id"
                    class="text-center"
                  >
                    <img
                      :src="require(`../assets/svg/${item.icon}.png`)"
                      alt=""
                    />
                    <div style="color: #9bdbff">{{ item.name }}</div>
                    <div class="font-w-600 py-7">{{ item.value }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-100pre flex-1">
              <div class="title-bg font-family h-42 line-40 font-24 pl-35">
                未来24小时天气
              </div>
              <div class="dataVheight content-bg px-10 pt-10">
                <!-- <div id="dataV" class="w-100pre h-100pre"></div> -->
                <dv-scroll-board
                  class="w-100pre h-100pre"
                  :config="config"
                  ref="scrollBoard"
                />
                <!-- <dv-scroll-board :config="config" style="width: 100%" /> -->
              </div>
            </div>
          </div>
        </div>
        <!-- 内容去的下半部分 -->
        <div
          :class="showOrhide ? 'show-bottom' : 'hide-bottom'"
          class="w-100pre h-246 borde flex justify-between pointer-initial bottom"
        >
          <div
            class="w-420 h-100pre"
            v-for="(item, index) in pbsTypes"
            :key="item.id"
          >
            <div
              class="font-family title-bg main-color h-42 line-40 pl-35 w-100pre font-24"
            >
              {{ item.name }}
            </div>
            <div class="bottom-content-item-content w-100pre flex pl-34 pr-16">
              <div class="w-100pre h-100pre flex align-center">
                <div class="mr-30">
                  <img
                    :src="require(`../assets/svg/${item.icon}.png`)"
                    class="w-111 h-122"
                    alt=""
                  />
                </div>
                <div
                  class="font-18 w-223 text-center"
                  v-if="index == 0"
                  style="color: #9bdbff"
                >
                  暂无数据
                </div>
                <div v-else class="w-223 ranking">
                  <!-- <dv-scroll-ranking-board
                    :config="progressConfig"
                    class="ranking"
                  /> -->
                  <div class="flex justify-between mb-5">
                    <div class="font-12 sub-color flex align-center">
                      <div class="que mr-4 mt-2"></div>
                      <div>基础施工</div>
                    </div>
                    <div class="font-15">100%</div>
                  </div>
                  <div class="position-relative out-border">
                    <div class="position-absolute h-4 w-100pre inBg"></div>
                    <div class="position-absolute progerskjkl h-4">
                      <div class="position-relative w-100pre h-100pre"></div>
                      <div class="position-absolute point">
                        <img
                          src="../assets/svg/point.png"
                          class="img_block w-15"
                          alt=""
                        />
                      </div>
                    </div>
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

export default {
  components: { dialogLv, windowLv },
  data() {
    return {
      windowShow: false,
      detalis: [
        {
          name: "风机数量",
          id: 1,
          value: "47",
          unit: "台",
        },
        {
          name: "装机容量",
          id: 2,
          value: "399.5",
          unit: "km",
        },
        {
          name: "投资金额",
          id: 3,
          value: "321",
          unit: "亿",
        },
      ],
      allProgress: [
        {
          name: "风机安装进度",
          id: 1,
          icon: "fan",
          value: "80%",
        },
        {
          name: "海缆敷设进度",
          id: 2,
          icon: "submarineCable",
          value: "80%",
        },
        {
          name: "升压站进度",
          id: 3,
          icon: "boosterStation",
          value: "80%",
        },
        {
          name: "集控中心进度",
          icon: "centralized",
          id: 4,
          value: "80%",
        },
      ],
      config: {
        header: ["时间", "风速m/s", "浪高m", "能见度km", "降雨mm"],
        data: [
          ["8:00", "1.2", "1.2", "50", "00"],
          ["9:00", "1.2", "1.2", "50", "00"],
          ["10:00", "1.2", "1.2", "50", "00"],
          ["11:00", "1.2", "1.2", "50", "00"],
          ["12:00", "1.2", "1.2", "50", "00"],
          ["13:00", "1.2", "1.2", "50", "00"],
          ["14:00", "1.2", "1.2", "50", "00"],
          ["15:00", "1.2", "1.2", "50", "00"],
          ["16:00", "1.2", "1.2", "50", "00"],
          ["17:00", "1.2", "1.2", "50", "00"],
          ["18:00", "1.2", "1.2", "50", "00"],
          ["19:00", "1.2", "1.2", "50", "00"],
          ["20:00", "1.2", "1.2", "50", "00"],
          ["21:00", "1.2", "1.2", "50", "00"],
          ["22:00", "1.2", "1.2", "50", "00"],
          ["23:00", "1.2", "1.2", "50", "00"],
          ["24:00", "1.2", "1.2", "50", "00"],
          ["25:00", "1.2", "1.2", "50", "00"],
          ["26:00", "1.2", "1.2", "50", "00"],
          ["27:00", "1.2", "1.2", "50", "00"],
          ["28:00", "1.2", "1.2", "50", "00"],
          ["29:00", "1.2", "1.2", "50", "00"],
          ["30:00", "1.2", "1.2", "50", "00"],
          ["31:00", "1.2", "1.2", "50", "00"],
          ["32:00", "1.2", "1.2", "50", "00"],
          ["33:00", "1.2", "1.2", "50", "00"],
          ["34:00", "1.2", "1.2", "50", "00"],
          ["35:00", "1.2", "1.2", "50", "00"],
          ["36:00", "1.2", "1.2", "50", "00"],
          ["37:00", "1.2", "1.2", "50", "00"],
        ],
        rowNum: 1, //表格行数
        index: true,
      },
      progressConfig: {
        data: [
          {
            name: "周口",
            value: 55,
          },
          {
            name: "南阳",
            value: 120,
          },
          {
            name: "西峡",
            value: 78,
          },
          {
            name: "驻马店",
            value: 66,
          },
          {
            name: "新乡",
            value: 80,
          },
          {
            name: "信阳",
            value: 45,
          },
          {
            name: "漯河",
            value: 29,
          },
        ],
        waitTime: 1000,
      },

      pbsTypes: [
        {
          name: "风机施工进度",
          id: 1,
          icon: "fanProgress",
        },
        {
          name: "海缆施工进度",
          id: 2,
          icon: "hailan",
        },
        {
          name: "海上升压站施工进度",
          id: 3,
          icon: "boosterIcon",
        },
        {
          name: "陆上集控中心施工进度",
          id: 4,
          icon: "controlCenterIcon",
        },
      ],
      weatherType: [
        {
          name: "风速",
          id: 1,
          icon: "windSeed",
          value: "4.6m/s",
        },
        {
          name: "风向",
          id: 2,
          icon: "windDirection",
          value: "西南风",
        },
        {
          name: "浪高",
          id: 3,
          icon: "wave",
          value: "0.2m",
        },
        {
          name: "能见度",
          icon: "visibility",
          id: 4,
          value: "2.47km",
        },
      ],
      showOrhide: false,
      dialogShow: false,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      //地图加载
      this.map = new AMap.Map("map", {
        resizeEnable: true,
        viewMode: "2D", //是否为3D地图模式
        zoom: 13, //初始化地图级别
        center: [109.919730180333, 19.4268904131667],
        // pitch: 30, // 地图俯仰角度，有效范围 0 度- 83 度
        mapStyle: "amap://styles/darkblue",
      });
      this.allPriview();
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
  },
};
</script>
<style lang='scss' scoped>
.dataVheight {
  /deep/ .header {
    background-image: url("../assets/svg/dataVhead.png");
    background-size: 100% 100%;
    background-color: transparent !important;
  }
  /deep/ .row-item {
    line-height: 25px !important;
    height: 25px !important;
  }
  /deep/ .header-item {
    height: 38px !important;
    line-height: 38px !important;
    font-size: 14px;
    text-overflow: initial !important;
  }
}
.ranking {
  /deep/ .row-item {
    // line-height: 25px !important;
    height: auto !important;
    margin-bottom: 10px;
  }
  height: 130px !important;
}

.font-family {
  font-family: "优设标题黑";
}
.main-color {
  color: #e6eeff;
}
.sub-color {
  color: #9bdbff;
}
.main-bg {
  // background-image: url("../assets/svg/border.png");
  background-image: url("../assets/svg/border.png"), url("../assets/svg/bg.png");
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
.page-border {
  // background-image: url("../assets/svg/border.png");

  background-size: 100% 100%;
}
.progress-bg {
  // background-image: url("../assets/svg/nodataLine.png");
  background-image: url("../assets/svg/progressBorder.png");
  background-size: 100% 100%;
}
.title-bg {
  background-image: url("../assets/svg/progressTitle.png");
  background-size: 100% 100%;
}
.content-bg {
  background-image: url("../assets/svg/progressContent.png");
  background-size: 100% 100%;
}
.weather-bg {
  background-image: url("../assets/svg/weatherBg.png");
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
.contet {
  height: calc(100% - 114px - 33px);
}
.top-content {
  height: 664px;
}
.bottom-content-item-content {
  height: calc(100% - 42px);
  background-image: url("../assets/svg/progressContent.png");
  // url("../assets/svg/crossLine.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.weatherBorder {
  background-image: url("../assets/svg/weatherBorder.png");
  background-size: 100% 100%;
}
.dataVheight {
  height: calc(100% - 42px - 10px) !important;
}
/deep/.rows {
  height: 290px !important;
}

.video-content {
  // background-image: url("../assets/svg/crossLine.png");
  background-size: 100% 100%;
  border: 1px solid #1ca0f2;
}
.planDate {
  background-image: url("../assets/svg/iconBorder.png");
  background-size: 100% 100%;
}
.nodata {
  margin: auto;
}
.margin-top {
  margin-top: -15px;
}
.heightLight {
  text-shadow: 0 0 7px #00ffff;
}
.text-margin {
  margin-top: -5px;
}
.line {
  width: 1px;
  height: 23px;
  border: 1px solid #3f9aef;
  opacity: 0.4;
}
.pointer-none {
  pointer-events: none;
}
.pointer-initial {
  pointer-events: initial;
}
</style>

<style scoped>
.top-left,
.top-right,
.bottom {
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

/* 窗体 */
.window {
  position: fixed;
  top: 30%;
  left: 30%;
  z-index: 99999;
}
.inBg {
  background: #5ea7ff;
  opacity: 0.3;
}
.progerskjkl {
  border-radius: 5px;
  background: linear-gradient(90deg, #1c7498 0%, rgba(0, 246, 255, 0.85) 20%);
  /* border-radius: 1px; */
  width: 20%;
}
.out-border {
  border: 1px solid #1c7498;
  height: 5px;
  padding: 2px 0px;
}
.point {
  right: -5px;
  top: -6px;
}
.que {
  width: 4px;
  height: 4px;
  background-color: #fffddb;
  border: 2px solid #8e7a40;
}
</style>