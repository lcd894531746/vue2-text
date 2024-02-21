<template>
  <div class=" ">
    <!-- <div ref="video" id="player"></div> -->
    <!-- <EasyPlayer
      :decodeWasm="true"
      :videoUrl="source"
      fluent
      autoplay
      live
      stretch
    ></EasyPlayer> -->
    <div class="box">
      <div id="Player"></div>
    </div>
  </div>
</template>

<script>
import Player from "xgplayer";
import HlsJsPlayer from "xgplayer-hls.js";
import { Events } from "xgplayer";
import EasyPlayer from "easy-player";
export default {
  components: { EasyPlayer },
  props: {
    source: {
      type: String,
      default:
        "http://10.185.245.52:8091/live/cameraid/1000019%240/substream/1.m3u8",
      // required: true,
    },
    config: {
      height: 600, //600px
      width: 337.5,
    },
  },
  data() {
    return {
      player: "",
      url:
        "http://10.185.245.52:8091/live/cameraid/1000019%240/substream/1.m3u8",
      videoPlayer: null,
      // baseUrl: window.location.hostname,
      // hls: [],
    };
  },
  mounted() {
    // this.getVideo();
    // 实例化播放器
    this.player = new WasmPlayer(null, "Player", this.callbackfun);
    // 调用播放
    this.player.play(this.url, 1);
  },

  methods: {
     //播放事件回调
     callbackfun(e) {
      console.log('callbackfun', e);
    },
    // 配置项地址
    // https://v3.h5player.bytedance.com/api/events.html#%E4%BD%BF%E7%94%A8
    getVideo() {
      let player;
      if (
        document
          .createElement("video")
          .canPlayType("application/vnd.apple.mpegurl")
      ) {
        // 原生支持 hls 播放
        player = new Player({
          el: document.querySelector("#player"),
          url: this.source,
        });
      } else if (HlsJsPlayer.isSupported()) {
        // 第一步
        player = new Player({
          el: document.querySelector("#player"),
          isLive: true,
          url: this.source,
          plugins: [HlsJsPlayer], // 第二步
          playsinline: true,
          hls: {
            targetLatency: 10, // 直播目标延迟，默认 10 秒
            maxLatency: 20, // 直播允许的最大延迟，默认 20 秒
            disconnectTime: 0, // 直播断流时间，默认 0 秒，（独立使用时等于 maxLatency）
            retryCount: 3, // 重试 3 次，默认值
            retryDelay: 1000, // 每次重试间隔 1 秒，默认值
            loadTimeout: 10000, // 请求超时时间为 10 秒，默认值
            autoplay: true,
            lang: "zh-cn",
            defaultPlaybackRate: 1,
            preload: "auto",
            showMuteBtn: true,
            showBarTime: false,
            fetchOptions: {
              // 该参数会透传给 fetch，默认值为 undefined
              mode: "cors",
            },
          },
          height: "100%",
          width: "100%",
          volume: 0, // 初始音量
          autoplay: true, // 自动播放
          cors: true,
        });
      }
      //视频准备就绪
      player.on(Events.READY, () => {
        // TODO
        console.log("视频准备就绪");
      });
      //播放
      player.on(Events.PLAY, () => {
        // TODO
        console.log("播放");
      });

      //播放错误
      player.on(Events.ERROR, (Error) => {
        // xgplayer 中的 Errors 对象
        console.log("播放错误", Error);
      });
      player.on("error", (error) => {
        // TODO
        console.log("播放错误", error);
      });
      //播放器销毁
      player.on(Events.DESTROY, () => {
        console.log("播放器销毁");
      });
      //播放器重试
      player.on(Events.RETRY, () => {
        console.log("播放器重试");
      });
      this.$once("hook:beforeDestroy", () => {
        console.log("播放器销毁");
        player.destroy();
      });
      this.videoPlayer = player;
    },
  },
};
</script>

<style scoped lang="scss">
// 西瓜视频 的默认控制条 不知道为什么没去掉 先用css 去掉
/deep/ .xgplayer-loading {
  display: none;
}
/deep/ .xg-mini-layer {
  display: none;
}
/deep/ .xgplayer-start {
  display: none;
}
/deep/ .xgplayer-controls {
  display: none;
}
/deep/ .xgplayer-replay {
  display: none;
}

/deep/ .xg-mini-layer {
  display: none;
}
</style>
