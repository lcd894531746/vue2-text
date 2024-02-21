<template>
  <div
    class="dialog w-100pre h-100pre top-0 left-0 index-9999 text-fff position-fixed flex"
  >
    <div class="content w-1028">
      <div
        class="videoTitle pl-50 pr-30 h-51 flex justify-between align-center"
      >
        <div class="font-30 title">视频监控</div>
        <img src="../assets/svg/close.png" class="w-23" alt="" @click="close" />
      </div>
      <div class="mt-10 video-content pl-12 pr-40 h-530 py-24">
        <div class="h-100pre w-100pre flex">
          <div class="h-100pre tree-border mr-20">
            <!-- 抽成组件 -->
            <div class="px-10 py-10">
              <div
                class="text-fff"
                v-for="item in progreetestList"
                :key="item.id"
                @click="clickParent(item)"
              >
                <div
                  class="flex align-center px-5 accordion"
                  :class="
                    item.id == radio ? 'father-bg text-fff' : 'text-color'
                  "
                >
                  <div class="mr-10">
                    <el-radio v-model="radio" :label="item.id"></el-radio>
                  </div>
                  <div class="h-35 line-35 font-18">
                    {{ item.name }}
                  </div>
                </div>
                <div class="panel" v-if="item.children">
                  <div
                    class="h-25 line-25 flex pointer"
                    :class="
                      initem.id == current ? 'father-bg text-fff' : 'text-color'
                    "
                    v-for="(initem, inindex) in item.children"
                    :key="initem.id"
                    @click.stop="clickChild(initem)"
                  >
                    <div class="flex align-center px-5">
                      <div
                        class="mr-10 h-100pre w-10 flex flex-column align-center"
                      >
                        <div class="w-1 h-11 line"></div>
                        <div
                          class="w-3 h-3"
                          :class="initem.id == current ? 'bg-fff' : 'notChoose'"
                        ></div>
                        <div
                          class="w-1 h-11"
                          :class="
                            inindex == item.children.length - 1 ? '' : 'line'
                          "
                        ></div>
                      </div>
                      <div class="h-35 line-35 font-12">
                        {{ initem.name }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-column justify-end">
            <div>
              <div class="mb-10 text-color font-21">视频看板</div>
              <div class="flex flex-wrap justify-between">
                <div
                  class="w-355 h-200 border mb-14"
                  v-for="(item, index) in 4"
                  :key="index"
                ></div>
              </div>
              <div class="h-20 mt-10 w-100pre border text-fff text-right">
                分页
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: 1,
      current: "",
      progreetestList: [
        {
          name: "中海船工",
          id: 1,
          pid: 0,
          children: [
            { name: "中海101", id: 101, pid: 1 },
            { name: "中海102", id: 102, pid: 1 },
            { name: "中海103", id: 103, pid: 1 },
            { name: "中海104", id: 104, pid: 1 },
          ],
        },
        {
          name: "中配船工",
          id: 2,
          pid: 0,
          children: [
            { name: "中配船工201", id: 201, pid: 2 },
            { name: "中配船工202", id: 202, pid: 2 },
            { name: "中配船工203", id: 203, pid: 2 },
            { name: "中配船工204", id: 204, pid: 2 },
          ],
        },
      ],
      classList: [],
    };
  },

  mounted() {
    this.toggleAccordion();
  },
  methods: {
    close() {
      this.$emit("close");
    },
    clickParent(item) {
      console.log("一级节点点击", item);
      this.radio = item.id;
      // 开始展开收起
    },
    clickChild(item) {
      this.current = item.id;
      console.log("二级节点点击", item);
    },
    toggleAccordion() {
      var acc = document.getElementsByClassName("accordion");
      var panel = document.getElementsByClassName("panel");

      for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          var isActive = this.classList.contains("active");

          for (var j = 0; j < acc.length; j++) {
            acc[j].classList.remove("active");
            panel[j].style.maxHeight = null;
          }

          if (!isActive) {
            this.classList.toggle("active");
            var currentPanel = this.nextElementSibling;
            currentPanel.style.maxHeight = currentPanel.scrollHeight + "px";
          }
        });
      }
    },
  },
};
</script>
<style lang='scss' scoped>
.dialog {
  background-color: #010c20;
  opacity: 0.9;
  .content {
    margin: auto;
    .videoTitle {
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
    .video-content {
      background-image: url("../assets/svg/videoContent.png");
      background-size: 100% 100%;
      .tree-border {
        min-width: 222px !important;
        background-image: url("../assets/svg/videoTreeBorder.png");
        background-size: 100% 100%;
      }
    }
  }
}

.text-color {
  color: #9bdbff;
}
.father-bg {
  background-image: url("../assets/svg/progressChoose.png");
  background-size: 100% 100%;
}

.notChoose {
  background-color: #9bdbff;
}

.line {
  background-color: #9bdbff;
  opacity: 0.3;
}
// 选择框 修改
/deep/.el-radio__label {
  display: none;
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

.accordion {
  cursor: pointer;
  transition: 0.4s;
}
.panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
</style>