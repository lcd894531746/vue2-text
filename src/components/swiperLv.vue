<template>
  <div class="rounded-left-11 h-700 rounded-left-11 position-relative">
    <!-- autoplaySpeed="{500}" -->
    <div class="position-absolute bottom-0 index-99 flex">
      <div class="film mr-10" v-for="(item, index) in imgs" :key="item">
        <div class="filmPlayLR" :id="`dot-${index}`"></div>
      </div>
    </div>
    <a-carousel
      :beforeChange="beforeChange"
      :afterChange="afterChange"
      autoplay
      class="rounded-left-11 h-700 rounded-left-11"
    >
      <div v-for="item in imgs" :key="item" class="h-700 rounded-left-11">
        <img
          class="w-100pre h-700 img_block rounded-left-11"
          :src="item"
          alt=""
        />
      </div>
    </a-carousel>
  </div>
</template>

<script>
// 引入插件
export default {
  data() {
    return {
      imgs: [
        require("../assets/test1.jpg"),
        require("../assets/test2.jpg"),
        require("../assets/test3.jpg"),
        require("../assets/test4.png"),
      ],
    };
  },
  mounted() {},
  computed: {},
  methods: {
    beforeChange(from, to, c) {
      if (to == 0) {
        // 获取所有的filmPlayLR 元素  设置宽度为0
        let doms = document.getElementsByClassName("filmPlayLR");
        console.log("去除宽度", doms);
        for (let i = 0; i < doms.length; i++) {
          let element = doms[i];
          if (element) {
            element.style.transitionDuration = "0s";
            element.style.width = "";
          }
        }
      }

      console.log("beforeChange:", to);
      let dom = document.getElementById(`dot-${to}`);
      dom.style.width = "100%";
      dom.style.transitionDuration = "3.5s";
      console.log("dom", dom);
    },
    afterChange(from, to, c) {
      console.log("afterChange:", from);
    },
  },
};
</script>

<style lang='scss' scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}

.ant-carousel >>> .slick-dots-bottom {
  bottom: 7%;
  left: -39%;
}
.ant-input-affix-wrapper >>> .ant-input-suffix {
  top: 33% !important;
}

/deep/ .ant-input-suffix {
  top: 33% !important;
}
</style>
<style scoped>
.film {
  width: 76px;
  border: 0px solid green; /*5像素粗，绿色边框*/
  background: green;
  height: 10px;
}
.filmPlayLR {
  z-index: 999;
  background-color: red;
  height: 100%;
  width: 0%;
  transition: 3.5s;
}

/*这里使用后代选择器，
并且.film类组合伪类hover
意思是当含有fiml类的标签被鼠标悬浮时，其子标签样式做出以下改变*/
.filmPlayLR {
  /* width: 100%; */
}
.filmPlayRL {
  width: 100%;
  left: 0;
}
</style>