import { } from './test.scss'
let zoomStyleMapping = {
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};
function $marks1(map, LngLat, config, exData) {
  let marker = new AMap.ElasticMarker({
    position: LngLat,
    zooms: [3, 6],
    styles: [{
      icon: {
        img: require('../../assets/img/Enterprise/mark1.png'),
        size: [22, 70],//可见区域的大小
        // size: [19, 60],//可见区域的大小
        imageSize: [22, 70],
        ancher: [10, 58],//锚点 图标原始大小下锚点所处的位置，相对左上角
        fitZoom: 10,//最合适的级别
        scaleFactor: 2,//地图放大一级的缩放比例系数
        maxScale: 2,//最大放大比例
        minScale: 1//最小放大比例
      },
      label: {
        content: `
        <div class="layer1">
        <div class="label-position sub-color">升压站</div>
        <div class="label-progress flex justify-around">
          <div>
            <span class="mr-5 sub-color SourceHanSansCN-Medium">完工</span>
            <span class='Montserrat-Ace-SemiBold'>4</span>
          </div>

          <div>
            <span class="mr-5 sub-color SourceHanSansCN-Medium">在建</span>
            <span class='Montserrat-Ace-SemiBold'>4</span>
          </div>
          <div>
            <span class="mr-5 sub-color ourceHanSansCN-Medium">供应商</span>
            <span class='Montserrat-Ace-SemiBold'>4</span>
          </div>
        </div>
      </div>
      `,
        offset: [0, 0],
        position: "TR",
        minZoom: 4,
      },
    },
    ],
    zoomStyleMapping: zoomStyleMapping
  })
  map.add(marker)
}


let zoomStyleMapping2 = {
  7: 0,
  8: 0,
  9: 0,
};
function $marks2(map, LngLat, config, exData) {
  let marker = new AMap.ElasticMarker({
    position: LngLat,
    zooms: [7, 9],
    styles: [{
      icon: {
        img: require('../../assets/img/Enterprise/mark2.png'),
        size: [22, 70],//可见区域的大小
        // size: [19, 60],//可见区域的大小
        imageSize: [22, 70],
        ancher: [10, 58],//锚点 图标原始大小下锚点所处的位置，相对左上角
        fitZoom: 10,//最合适的级别
        scaleFactor: 2,//地图放大一级的缩放比例系数
        maxScale: 2,//最大放大比例
        minScale: 1//最小放大比例
      },
      label: {
        content: `
        <div class="layer2">
              <div class="label-position sub-color">济南</div>
              <div class="cpmName">天津旺达缆线公司</div>
            </div>
      
      `,
        offset: [0, 0],
        position: "TR",
        minZoom: 6,
      },
    },
    ],
    zoomStyleMapping: zoomStyleMapping2
  })
  map.add(marker)
}
export default {
  $marks1,
  $marks2
}
