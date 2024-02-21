<template>
  <div class="p-10">
    <div class="h-240 mainWidth">
      <!-- 循环出 7组数据 作为Y轴 -->
      <div class="h-100pre position-relative">
        <div class="table" v-for="(item, index) in date" :key="item">
          <div class="yAxiser">
            <div class="ytext">
              {{ item }}
            </div>
          </div>
          <div class="cell align-center w-440 mx-10">
            <div
              class="border_wid"
              :class="initem % 2 != 0 ? 'border_bg' : ''"
              v-for="initem in 24"
              :key="initem"
            ></div>
          </div>
          <div v-if="index == 6" class="cell text-center w-440 mx-10 test">
            <div class="border_wid" v-for="initem in 24" :key="initem">
              {{ initem }}
            </div>
          </div>
          <div v-if="index == 6" class="xDanwei">时间</div>
          <div v-if="index == 6" class="leftxDanwei"></div>
        </div>
        <!-- <div class="w-460 xAxiser">
          <div class="xAxiseritem" v-for="initem in 24" :key="initem">
            <div class="font-10">{{ initem }}</div>
          </div>
          <div class="xDanwei">时间</div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: ["2/1", "2/2", "2/3", "2/4", "2/5", "2/6", "2/7"],
    };
  },
};
</script>

<style lang='scss'>
.mainWidth {
  width: max-content;
}
.yAxiser {
  border-right: 1px solid #999999;
  padding-right: 10px;
}
.xAxiser {
  padding: 0 10px;
  border-top: 1px solid #999999;
  position: absolute;
  left: 29px;
  display: flex;
}
.ytext {
  padding-top: 6px;
}
.xAxiseritem {
  // text-align: center;
  width: 200px;
  margin-left: 6px;
  /* height: 50px; */
}

.table {
  height: 14.28%;
  /* border: #0096ff 1px solid; */
  display: flex;
  // /* position: relative; */
}
.cell {
  height: 100%;
  display: flex;
}
.border_wid {
  width: 4.16766666%;
  height: 14px;
  /* border: 1px solid red; */
}
.test {
  position: absolute;
  left: 32px;
  font-size: 10px;
  bottom: 0;
  height: 10px;
  border-top: #999999 1px solid;
}
.xDanwei {
  position: absolute;
  bottom: -9px;
  right: -25px;
  padding-left: 10px;
  font-size: 10px;
  border-top: #999999 1px solid;
}
.leftxDanwei {
  position: absolute;
  left: 30px;
  bottom: 9px;
  padding-left: 20px;
  border-top: #999999 1px solid;
}
.border_bg {
  /* width: 10%;
  height: 80%; */
  background-color: #0096ff;
}
</style>