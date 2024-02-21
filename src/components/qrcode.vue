<template>
  <div style="margin-left: 200px">
    <div>
      <button @click="getapp()">生成二维码</button>
      <button @click="convertToImage()">下载二维码</button>
      <!-- <canvas id="canvas"></canvas> -->
    </div>
    <div ref="myDom" id="myDom" class="text-center downImg border w-400 pt-30">
      <div class="flex justify-center">
        <div class=""><img class="w-200" src="./log.png" alt="" /></div>
      </div>
      <div style="margin-bottom: -30px; color: #0169b6" class="font-40 bolder pt-20">
        人员登船码
      </div>
      <div class="text-center position-relative bg pb-20">
        <div class="range position-absolute"></div>
        <div class="flex pt-80 mb-20">
          <div
            class="p-20 bg-fff rounded-8"
            id="QRname"
            style="margin: 0 auto"
          ></div>
        </div>
        <div class="bolder font-24 mb-5 text-fff">设备名称：春天号</div>
        <div class="bolder font-24 text-fff">船舶MMSI：BL-50a8</div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
import html2canvas from "html2canvas";

export default {
  data() {
    return {
      src: "",
    };
  },
  mounted() {},
  methods: {
    getapp(QRname) {
      var qrcode = new QRCode(`QRname`, {
        text: "{mmis: 412021010, shipName: '德浮3600', ImportCode: 'bs15522', ImportName: '进口'}",
        width: 220,
        height: 230,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
      //  qrcode.clear(); // 清除代码
    },

    convertToImage() {
      const domElement = this.$refs.myDom;
      html2canvas(domElement).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "dom_image.png";
        link.click();
      });
    },
  },
};
</script>
<style scoped>
.downImg {
  overflow: hidden;
}
.bg {
  background-color: #0069b7;
  border: none !important;
  z-index: -1;
  /* overflow: hidden; */
}
.range {
  z-index: 0;
  width: 440px;
  height: 45px;
  top: -0px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  background-color: #fff;
  /* border: 1px solid red; */
  left: -20px;
}
</style>
