
<template>
  <div class="px-20 h-vh" style="background-color: #f8f8f8">
    <!-- 顶部一个item -->
    <div class="flex justify-bewtten">
      <div class="flex-1 bg-fff p-10">
        <div class="mb-5 title pl-10">项目概况</div>
        <div class="line"></div>
        <div class="pt-13 pb-23">
          <div class="flex-around">
            <div class="text-center">
              <div>已开工</div>
              <div>XX天</div>
            </div>
            <div class="text-center">
              <div>计划工期</div>
              <div>XX天</div>
            </div>
            <div class="text-center">
              <div>计划完工</div>
              <div>2023.04</div>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="w-300 pr-23">{{ content }}</div>
          <div class="flex-1">
            <img class="w-162 h-115" src="./andriod.png" alt="" />
          </div>
        </div>
      </div>
      <div class="flex-1 mx-10 bg-fff p-10">
        <div class="mb-5 title pl-10">施工窗口期</div>
        <div class="line"></div>
        <div id="main" class="w-100pre" style="height: calc(100% - 30px)"></div>
      </div>
      <div class="flex-1 h-109 bg-fff p-10" v-if="windInfo">
        <div class="mb-5 title pl-10">海洋气象</div>
        <div class="line"></div>
        <div class="flex flex-between px-20 py-14">
          <div class="h-108 flex">
            <div class="w-108 h-100pre">
              <img
                class="w-108 img_block"
                :src="
                  require(`../assets/wetherIcon/${windInfo.skyconIcon}.png`)
                "
                alt=""
              />
            </div>
            <div style="color: #4faefc" class="pl-15 mt-20">
              <div class="font-49">
                <span>{{ windInfo.temperature }}℃</span>
              </div>
              <div class="font-21" style="color: #9fa0a0; margin-top: -20px">
                {{ windInfo.skycon }}
              </div>
            </div>
          </div>
          <div class="mr-20">
            <div>
              <span class="color0 mr-23">风　向：</span>
              <span class="color1 mr-23">{{ windInfo.direction }}</span>
            </div>
            <div>
              <span class="color0 mr-23">风　速：</span>
              <span class="color1">{{ windInfo.speed }}mm</span>
            </div>
            <div>
              <span class="color0 mr-23">降水量：</span>
              <span class="color1">{{ windInfo.intensity }}mm</span>
            </div>
            <div>
              <span class="color0 mr-23">能见度：</span>
              <span class="color1">{{ windInfo.visibility }}m</span>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="py-15 px-20 flex scroll">
          <div
            class="mr-45 text-center flex flex-column justify-center align-center"
            v-for="(item, index) in hourly24"
            :key="index"
          >
            <div class="color2">{{ item.datetime }}时</div>
            <div class="my-12">
              <img
                class="w-28 h-28 img_block"
                :src="require(`../assets/wetherIcon/${item.skyconCode}.png`)"
                alt=""
              />
            </div>

            <div class="color2">{{ item.value }}°C</div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-20"></div>
    <!-- 下面两个item -->
    <div class="flex justify-bewtten">
      <div class="flex-6 bg-fff">1</div>
      <div class="ml-18 bg-fff p-10" style="flex: 22%">
        <div class="mb-5 title pl-10">主要工程进度</div>
        <div class="line"></div>
        <div class="py-22 flex justify-bewtten">
          <div class="flex">
            <div>风机</div>
            <div>
              <div>风机</div>
              <div>60%</div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
const request = axios.create({
  method: "get",
  baseURL: "https://api.foreocean.com",
  timeout: 10000,
});
// 海洋天气
const weatherIcon = {
  CLEAR_DAY: "晴（白天）",
  CLEAR_NIGHT: "晴（夜间）",
  PARTLY_CLOUDY_DAY: "多云（白）",
  PARTLY_CLOUDY_NIGHT: "多云（夜）",
  CLOUDY: "阴",
  LIGHT_HAZE: "轻度雾霾",
  MODERATE_HAZE: "中度雾霾",
  HEAVY_HAZE: "重度雾霾",
  LIGHT_RAIN: "小雨",
  MODERATE_RAIN: "中雨",
  HEAVY_RAIN: "大雨",
  STORM_RAIN: "暴雨",
  FOG: "雾",
  LIGHT_SNOW: "小雪",
  MODERATE_SNOW: "中雪",
  HEAVY_SNOW: "大雪",
  STORM_SNOW: "暴雪",
  DUST: "浮尘",
  SAND: "沙尘",
  WIND: "大风", //暂无图标
};

const windDirection = {
  11.25: "北",
  33.75: "北东北",
  56.25: "东北",
  78.75: "东东北",
  101.25: "东",
  123.75: "东东南",
  146.25: "东南",
  168.75: "南东南",
  191.25: "南",
  213.75: "南西南",
  236.25: "西南",
  258.75: "西西南",
  281.25: "西",
  326.25: "西西北",
  348.75: "北西北	",
  360: "北",
};
import * as echarts from "echarts";
export default {
  data() {
    return {
      hourly24: [],
      windInfo: "",
      content:
        "山东能源渤中海上风电 B 场址工程项目位于山东省东营市北部海域，装机容量为 399.5MW，场址面积 38.5km2，拟布置 47 台 8.5-230型风力发电机组。风电场场区水深 17m-19m，场址中心离岸距离 19km 左右，拟配套建设一座 220kV 海上升压站。风电机组发出电能通过 35kV 集电海底电缆接入海上升压站，升压后通过 2 回 220kV 海底...",
    };
  },
  created() {
    this.getWeather();
    this.getRealtime();
  },
  mounted() {
    this.echarts();
  },
  methods: {
    // 转换 风向
    getWinddirection(directionCode) {
      let direction;
      for (const key in windDirection) {
        // 特殊处理 11.25
        if (direction < 11.25) {
          direction = "北";
          return;
        } else {
          if (
            Number(key) <= directionCode &&
            directionCode < Number(key) + 22.5
          ) {
            direction = windDirection[Number(key) + 22.5];
            return direction;
          }
        }
      }
    },
    // 请求预海天气

    getWeather() {
      let params = {
        location: "120.398207,36.070148",
      };
      request({
        url: "/weather/hourly/168h",
        params: params,
        headers: {
          Token: "c5d21f82b53257dca600fa8525599728",
        },
      })
        .then((res) => {
          let data = res.data;
          if (data.success) {
            let resp = data.data;
            let hourly168 = resp.hourly.temperature;
            let hourly24 = hourly168.splice(0, 24);
            let skycon168 = resp.hourly.skycon;
            let skycon24 = skycon168.splice(0, 24);
            hourly24.forEach((element, index) => {
              element.datetime = new Date(element.datetime).getHours();
              element.skyconCode = skycon24[index].value;
            });
            // console.log("请求预海天气24小时", hourly24);
            this.hourly24 = hourly24;
          }
        })
        .catch((err) => {
          console.log("请求错误", err);
        });
    },
    // https://api.foreocean.com/weather/realtime?location=119.316895,39.597702
    getRealtime() {
      let params = {
        location: "119.316895,39.597702",
      };
      request({
        url: "/weather/realtime",
        params: params,
        headers: {
          Token: "ae15849aaa12e304a600fa8525599728",
        },
      })
        .then((res) => {
          let data = res.data;
          if (data.success) {
            let resp = data.data;
            // console.log("海洋天气实况resp", resp);
            let windInfo = {};
            windInfo.direction = this.getWinddirection(resp.wind.direction); //风向
            windInfo.speed = resp.wind.speed; //风速
            windInfo.intensity = resp.precipitation.local.intensity; //降水量
            windInfo.visibility = resp.visibility;
            windInfo.temperature = resp.temperature;
            windInfo.skycon = weatherIcon[resp.skycon];
            windInfo.skyconIcon = resp.skycon;

            this.windInfo = windInfo;
            // console.log("海洋天气实况", windInfo);
          }
        })
        .catch((err) => {
          console.log("请求错误", err);
        });
    },
    // 初始化echarts
    echarts() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        title: {
          text: "Waterfall Chart",
          subtext: "Living Expenses in Shenzhen",
          show: false,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: function (params) {
            var tar = params[1];
            return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "8%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          splitLine: { show: false },
          data: ["1", "2", "3", "4", "5", "6"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Placeholder",
            type: "bar",
            stack: "Total",
            itemStyle: {
              borderColor: "transparent",
              color: "transparent",
            },
            emphasis: {
              itemStyle: {
                borderColor: "transparent",
                color: "transparent",
              },
            },
            data: [0, 0, 1, 1, 0, 0],
          },

          {
            name: "Life Cost",
            type: "bar",
            stack: "Total",
            label: {
              show: true,
              position: "inside",
            },
            data: [0, 0, 0, 1, 0, 1],
          },

          {
            name: "Placeholder",
            type: "bar",
            stack: "Total",
            itemStyle: {
              borderColor: "transparent",
              color: "transparent",
            },
            emphasis: {
              itemStyle: {
                borderColor: "transparent",
                color: "transparent",
              },
            },
            data: [2, 1, 0, 0, 1, 0],
          },

          {
            name: "Life Cost",
            type: "bar",
            stack: "Total",
            label: {
              show: true,
              position: "inside",
            },
            data: [1, 1, 0, 1, 1, 0],
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>
<style>
.line {
  width: 100%;
  height: 1px;
  background-color: #efefef;
}
.title {
  font-family: pingFang-SC-Heavy;
  font-weight: 800;
  color: #595757;
}
.color0 {
  color: #9fa0a0;
}
.color1 {
  color: #3e3a39;
}
.color2 {
  color: #9fa0a0;
  width: min-content;
  width: 30px;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  width: 28px;
  height: 28px;
}

.scroll {
  width: 487px;
  overflow-x: auto;
}
</style>