<template>
  <div class="app-container">
    <!-- 统计表格区域 -->
    <div>
      <!-- 页面分做为左右  左右各占满50% 间隔 20像素  总高度  使用 弹性布局   计算出去除form的高度-->
      <el-row :gutter="20">
        <el-col
          :span="24"
          class="mb-20"
          v-for="(item, index) in dataList"
          :key="index"
        >
          <div class="flex h-400 border ">
            <!-- 柱状图 -->
            <div class="h-100pre flex-6 border" :id="`Bar_Chart_${index}`">
              1
            </div>
            <!-- 饼图 -->
            <div class="h-100pre flex-4" :id="`Pie_Chart_${index}`">2</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// import {
//   channelAnalysis,
//   dataComparison,
//   getUserInfo,
//   groupAll,
// } from "@/api/report";
import * as echarts from "echarts";

export default {
  name: "Role",
  components: {
    // baobiaoCharts
  },
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 日期范围
      dateRange: [],
      // 查询参数
      queryParams: {
        statisticsFrequency: 0,
        tenantId: undefined,
        startTime: undefined,
        endTime: undefined,
        rechargeType: undefined,
      },
      // 表单参数
      form: {},
      statusList: [{ id: 0, name: "生效中" }, { id: 1, name: "已失效" }],
      tenantList: [],
      groupList: [],
      // 统计频率列表
      statisticsList: [{ id: 0, name: "年" }, { id: 1, name: "月" }],
      userInfo: {},
      dataList: [],

      myChart: null,
      myChart1: null,
    };
  },
  created() {
    // this.getUserInfo();
    this.queryDuibi();
  },
  methods: {
    // getUserInfo() {
    //   getUserInfo({}).then((res) => {
    //     this.tenantList = res.data.tbUserTenants;
    //     this.groupList = res.data.tbUserGroups;
    //     this.queryParams.tenantId = res.data.tbUserGroups[0].id;
    //   });
    // },
    async queryDuibi() {
      let jsonData = {
        code: 200,
        msg: "success",
        data: [
          {
            channelAnalysisTime: [
              {
                timeStr: "2023",
                channelList: [
                  {
                    channelName: "渠道1",
                    infoVO: {
                      replyNum: 2,
                      joinGroupNum: 2,
                      registerNum: 2,
                      replyUnit: 0.5,
                      joinGroupUnit: 0.5,
                      registerUnit: 0.5,
                      rechargeNum: 8,
                      rechargeUnit: 2833333.25,
                      firstChargeNum: 5,
                      firstChargeUnit: 111111.0,
                    },
                  },
                ],
              },
              {
                timeStr: "2024",
                channelList: [
                  {
                    channelName: "渠道1",
                    infoVO: {
                      replyNum: 2,
                      joinGroupNum: 2,
                      registerNum: 2,
                      replyUnit: 0.5,
                      joinGroupUnit: 0.5,
                      registerUnit: 0.5,
                      rechargeNum: 8,
                      rechargeUnit: 2833333.25,
                      firstChargeNum: 5,
                      firstChargeUnit: 111111.0,
                    },
                  },
                ],
              },
            ],
            tenantCostList: [
              { chanelName: "渠道1", cost: 1.0, rate: "100.00%" },
            ],
          },
        ],
      };
      const { data, code } = jsonData;
      //   const { data, code } = await dataComparison(this.queryParams);
      if (code != 200) {
        this.$message.error("获取对比数据错误");
        return;
      }
      if (data && Array.isArray(data)) {
        this.dataList = data;
        // data 是一个数组 每个元素里面包含一个对象  对象里面有两个key 一个是的柱状图数据  一个是饼状图数据
        // 所以这里设置页面上的id
        // Bar Chart_ Pie_Chart_
        this.$nextTick(() => {
          data.forEach((item, index) => {
            this.initChartBar_Chart(
              `Bar_Chart_${index}`,
              item.channelAnalysisTime || []
            );
            this.initChartPieChart(
              `Pie_Chart_${index}`,
              item.tenantCostList || []
            );
          });
        });
      }
    },
    initChartPieChart(id, dataSouce) {
      let chartDom = document.getElementById(id);
      let myChart = echarts.init(chartDom);
      let option;

      let data = dataSouce.map((x) => {
        return {
          value: x.cost,
          name: x.chanelName,
        };
      });
      option = {
        title: {
          text: "总成本",
          subtext: "单位：万元",
          left: "center", // 将标题水平居中
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "60%",
            data: data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      option && myChart.setOption(option);
    },
    initChartBar_Chart(id, dataSouce) {
      let chartDom = document.getElementById(id);
      let myChart = echarts.init(chartDom);
      let option;
      let xAxisData = dataSouce.map((x) => x.timeStr);
      // 进群人数  进分人数 进粉单价 进群单价 注册单价 充值单价
      let name = [
        "进群人数",
        "进分人数",
        "进粉单价",
        "进群单价",
        "注册单价",
        "充值单价",
      ];
      let arr = [];
      for (let i = 0; i < 6; i++) {
        let data = {
          type: "bar",
          barWidth: 30, // 设置柱子的宽度
          yAxisIndex: i,
          data: [],
          name: name[i],
        };
        dataSouce.forEach((x) => {
          x.channelList.forEach((y) => {
            if (i == 0) {
              data.data.push(y.infoVO.joinGroupNum || 0);
            } else if (i == 1) {
              data.data.push(y.infoVO.replyNum || 0);
            } else if (i == 2) {
              data.data.push(y.infoVO.replyUnit || 0);
            } else if (i == 3) {
              data.data.push(y.infoVO.joinGroupUnit || 0);
            } else if (i == 4) {
              data.data.push(y.infoVO.registerUnit || 0);
            } else if (i == 5) {
              data.data.push(y.infoVO.rechargeUnit || 0);
            }
          });
        });
        arr.push(data);
      }
      console.log("arr", arr);
      const colors = [
        "#5470C6",
        "#91CC75",
        "#14dbd0",
        "#d8e65b",
        "#e65bc4",
        "#0096ff",
      ];
      option = {
        color: colors,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        grid: {
          right: "40%",
          left: "10%",
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          // data: ['Evaporation', 'Precipitation', 'Temperature']
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            data: xAxisData,
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "进群人数",
            position: "left",
            alignTicks: true,
            offset: 50,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0],
              },
            },
            axisLabel: {
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "进粉人数",
            position: "left",
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[1],
              },
            },
            // offset: ,
            axisLabel: {
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "进粉单价",
            position: "right",
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[2],
              },
            },
            // offset: ,
            axisLabel: {
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "进群单价",
            position: "right",
            alignTicks: true,
            offset: 50,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[3],
              },
            },
            axisLabel: {
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "注册单价",
            position: "right",
            alignTicks: true,
            offset: 100,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[4],
              },
            },
            axisLabel: {
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "充值单价",
            position: "right",
            alignTicks: true,
            offset: 150,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[5],
              },
            },
            axisLabel: {
              formatter: "{value}",
            },
          },
        ],
        series: arr,
      };
      option && myChart.setOption(option);
    },

    /** 查询角色列表 */
    getList() {
      this.loading = true;
      channelAnalysis(this.queryParams).then((response) => {});
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        statisticsFrequency: 0,
        tenantId: undefined,
        startTime: undefined,
        endTime: undefined,
        rechargeType: undefined,
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
  },

  beforeDestroy() {},
};
</script>
