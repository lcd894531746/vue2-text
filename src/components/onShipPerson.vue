<template>
  <div>
    <!-- 管理人员 -->
    <div>
      <div class="manergerBg w-183 h-30 line-30 mb-9">
        <span class="mr-17 ml-13 font-15">管理人员</span>
        <span class="font-18 font-w-600">4</span><span class="font-16">人</span>
      </div>
      <el-carousel class="manerger" arrow="never" indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <div class="flex justify-between">
            <div class="flex h-55" v-for="inItem in 3" :key="inItem">
              <div class="mr-4">
                <img
                  src="../assets/svg/雷阵雨.png"
                  class="w-45 h-100pre"
                  alt=""
                />
              </div>
              <div class="h-100pre flex flex-column justify-between font-12">
                <div class="">
                  <span class="text-color mr-5">岗位:</span>
                  <span>岗位-</span>
                </div>
                <div class="">
                  <span class="text-color mr-5">姓名:</span>
                  <span>彭于晏</span>
                </div>
                <div class="">
                  <span class="text-color mr-5">电话:</span>
                  <span>19945102317</span>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 施工人员 -->
    <div>
      <div class="manergerBg w-183 h-30 line-30 mb-9">
        <span class="mr-17 ml-13 font-15">施工人员</span>
        <span class="font-18 font-w-600">10</span
        ><span class="font-16">人</span>
      </div>
      <el-carousel class="build" arrow="never" indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <div class="flex justify-between">
            <div class="" v-for="inItem in 10" :key="inItem">
              <div class="">
                <img
                  src="../assets/svg/雷阵雨.png"
                  class="w-36 h-44 img_block"
                  alt=""
                />
              </div>
              <div class="font-12 text-center mt-5">陈虎</div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang='scss' scoped>
.manergerBg {
  background-image: url("../assets/svg/manergerBg.png");
  background-size: 100% 100%;
}
/deep/.manerger {
  .el-carousel__container {
    height: 60px;
  }
}

/deep/.build {
  .el-carousel__container {
    height: 65px;
  }
}
.text-color {
  color: #9bdbff;
}
/deep/ .el-carousel__button {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid #36c4ff;
}

/deep/ .is-active {
  .el-carousel__button {
    background-color: #fff;
    border: 1px solid #36c4ff;
  }
}
</style>