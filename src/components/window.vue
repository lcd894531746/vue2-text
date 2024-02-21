<template>
  <div class="w-550">
    <div class="wind-title pl-50 pr-21 h-51 flex justify-between align-center">
      <div class="font-30 title">华能博强0111</div>
      <img src="../assets/svg/close.png" class="w-23" alt="" @click="close" />
    </div>
    <div class="mt-10 wind-content px-21 h-294 py-24">
      <div class="container">
        <div class="flex">
          <div
            class="element w-115 flex align-center justify-center"
            @click="slider(item)"
            v-for="item in sliderList"
            :key="item.id"
          >
            <el-radio v-model="sliderTransform" :label="item.id"></el-radio>
            <div>{{ item.name }}</div>
          </div>
        </div>
        <div
          class="slider"
          :class="sliderTransform == 1 ? '' : 'sliderTransform'"
        ></div>
        <div class="line w-100pre h-2 mt-5 mb-10"></div>
        <div class="text-fff ">
          <components :is="component" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AisInfo from "./AisInfo";
import OnShipPerson from "./onShipPerson";
export default {
  components: { AisInfo, OnShipPerson },
  data() {
    return {
      sliderTransform: 1,
      sliderList: [
        {
          name: "AIS信息",
          id: 1,
          component: "AisInfo",
        },
        {
          name: "在船人员",
          id: 2,
          component: "OnShipPerson",
        },
      ],
      component: "AisInfo",
    };
  },
  mounted() {
  },
  methods: {
    close() {
      this.$emit("close");
    },
    slider(item) {
      this.sliderTransform = item.id;
      this.component = item.component;
    },
  },
};
</script>
<style lang='scss' scoped>
.wind-title {
  background-image: url("../assets/svg/videoTitle.png");
  background-size: 100% 100%;
  .title {
    font-family: "优设标题黑";
    background: linear-gradient(
      180deg,
      #ffffff 43.115234375%,
      #67cfff 99.0478515625%
    );
    padding-top: 5px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.wind-content {
  background-image: url("../assets/svg/videoContent.png");
  background-size: 100% 100%;
}
// 滑快
.element {
  text-align: center;
  height: 18px;
  color: #ffffff;
  margin-bottom: 7px;
  cursor: pointer;
}

.slider {
  position: absolute;
  width: 115px;
  height: 3px;
  background-color: #45a1f9;
  transition: transform 0.3s ease-in-out;
}
.sliderTransform {
  transform: translateX(100%);
}

// 选择框 修改
/deep/.el-radio__label {
  display: none;
}
/deep/ .el-radio {
  margin-right: 12px !important;
}
/deep/.is-checked {
  .el-radio__inner {
    border-radius: 0%;
    border: 2px solid #9bdbff;
    background-color: #ffffff;
    width: 9px;
    height: 9px;
  }
}
/deep/ .el-radio__inner {
  border-radius: 0%;
  border: 2px solid #9bdbff;
  background-color: transparent;
  width: 9px;
  height: 9px;
}

.line {
  background: #72b1ff;
}
</style>
