<template>
  <div class="w-100pre h-100pre">
    <div class="echarts" id="echarts"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      var chartDom = document.getElementById("echarts");
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Direct",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220],
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.echarts{
  width: 100%;
  height: 100%;
  border: 1px solid #0096ff;
}
</style>
