<template>
  <div
    class="content"
    :style="{
      width: bSize + 'px',
      height: bSize + 'px',
      borderColor: waveColor,
    }"
  >
    <canvas :id="canvasId"></canvas>
    <p class="value" :style="{ color: fontColor, fontSize: fontSize + 'px' }">
      {{ rate * 100 }}%
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    canvasId: {
      type: String, // 进度 比例 min=0 max=1
      default: "",
    },
    rate: {
      type: Number, // 进度 比例 min=0 max=1
      default: 0.6,
    },
    bSize: {
      type: Number, // 球的宽高
      default: 100,
    },
    waveColor: {
      type: String, // 波浪颜色 只能是16进制
      default: "#D8BFD8",
    },
    fontColor: {
      type: String, // 字体颜色
      default: "#8B008B",
    },
    speed: {
      type: Number, // 波浪速度 min=1 max=12
      default: 3,
    },
    flat: {
      type: Number, // 波浪平滑度 min=200 max=600
      default: 400,
    },
    distance: {
      type: Number, // 波浪偏移量 min=0 max=200
      default: 150,
    },
    wave: {
      type: Number, // 波浪起伏度 min=5 max=60
      default: 10,
    },
    opacity: {
      type: Number, // 波浪起伏透明度 min=5 max=60
      default: 0.5,
    },
    fontSize: {
      type: Number, // 字体大小
      default: 26,
    },
  },

  methods: {
    // 曲线函数
    drawSin(ctx, mW, color1, color2, wav, dY) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, mW);
      ctx.lineTo(0, dY);
      ctx.quadraticCurveTo(mW / 4, dY - wav, mW / 2, dY);
      ctx.lineTo(mW / 2, dY);
      ctx.quadraticCurveTo((mW * 3) / 4, dY + wav, mW, dY);
      ctx.lineTo(mW, mW);
      ctx.lineTo(0, mW);
      ctx.fillStyle = color1;
      ctx.fill();
      ctx.restore();
    },
    init() {
      let dom = this.canvasId;
      var canvas1 = document.getElementById(dom);
      var mW = canvas1.clientWidth;
      // 设置Canvas元素的高
      canvas1.style.height = mW;
      // 设置Canvas画布的宽高
      canvas1.width = canvas1.height = mW;

      var canvas2 = document.createElement("canvas"),
        ctx2 = canvas2.getContext("2d");
      canvas2.width = mW;
      canvas2.height = mW;

      var canvas3 = document.createElement("canvas"),
        ctx3 = canvas3.getContext("2d");
      canvas3.width = mW;
      canvas3.height = mW;

      var canvas4 = document.createElement("canvas"),
        ctx4 = canvas4.getContext("2d");
      canvas4.width = mW;
      canvas4.height = mW;

      var { flat, speed, rate, distance, wave, waveColor, opacity } = this;
      var x = 0;
      var ctx1 = canvas1.getContext("2d");
      this.drawSin(ctx2, mW, waveColor, waveColor, wave, mW - mW * rate);
      setTimeout(() => {
        this.drawSin(
          ctx3,
          mW,
          `${this.sixteenToRgba(waveColor, opacity)}`,
          null,
          wave,
          mW - mW * rate
        );
      }, 1000);
      this.drawSin(
        ctx4,
        mW,
        `${this.sixteenToRgba(waveColor, opacity)}`,
        null,
        wave,
        mW - mW * rate
      );
      var rate1 = rate,
        wave1 = wave;

      function animation() {
        if (rate !== rate1 || wave1 !== wave) {
          ctx2.clearRect(0, 0, mW, mW);
          ctx3.clearRect(0, 0, mW, mW);
          rate1 = rate;
          wave1 = wave;
          this.drawSin(ctx2, mW, waveColor, waveColor, wave, mW - mW * rate);
          this.drawSin(
            ctx3,
            mW,
            `${this.sixteenToRgba(waveColor, opacity)}`,
            null,
            wave,
            mW - mW * rate
          );
        }
        ctx1.clearRect(0, 0, mW, mW);
        ctx1.drawImage(canvas2, x, 0, mW + flat, mW);
        ctx1.drawImage(canvas2, x - mW - flat, 0, mW + flat, mW);
        ctx1.drawImage(canvas3, x + distance, 0, mW + flat, mW);
        ctx1.drawImage(canvas3, x - mW + distance - flat, 0, mW + flat, mW);

        ctx1.drawImage(canvas4, x + distance, 0, mW + flat, mW);
        ctx1.drawImage(canvas4, x - mW + distance - flat, 0, mW + flat, mW);
        x >= mW - speed + flat ? (x = 0) : (x += speed);
        requestAnimationFrame(animation);
      }
      animation();
    },

    // 十六进制颜色转成 rgba 透明度
    sixteenToRgba(sixteen, opacity) {
      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      var sColor = sixteen;
      if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
          var sColorNew = "#";
          for (var i = 1; i < 4; i += 1) {
            sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
          }
          sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
          sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return "rgba(" + sColorChange.join(",") + `,${opacity})`;
      } else {
        return sColor;
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style lang='scss' scoped>
.content {
  position: relative;
  border-radius: 50%;
  border: 4px solid #1c86d1;
  overflow: hidden;
  box-sizing: border-box;
  .value {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    // font-weight: bold;
  }

  canvas {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>