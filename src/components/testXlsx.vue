<template>
  <div class="fa">
    <button @click="down">下载</button>
  </div>
</template>

<script>
// import XLSX from "xlsx";
const XLSX = require("xlsx");
import XLSXS from "xlsx-style";
import FileSaver from "file-saver";

export default {
  name: "fa",
  data() {
    return {};
  },
  methods: {
    /**
     * 工具方法
     */
    s2ab(s) {
      var buf = new ArrayBuffer(s.length);
      var view = new Uint8Array(buf);
      for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
      return buf;
    },

    down() {
      // 添加一个工作表
      const data = [
        ["船名", "MMSI码", "经度", "维度", "更新时间"],
        ["张三", 25, "男", "ces", "eee"],
      ];
      const filename = "幼儿园课程表.xlsx"; // 导出的excel文件名
      const ws_name = "Sheet1"; //Excel第一个sheet的名称
      const workbook = XLSX.utils.book_new(); // 创建一个新的工作簿
      const worksheet = XLSX.utils.aoa_to_sheet(data);
      XLSX.utils.book_append_sheet(workbook, worksheet, ws_name); // 将数据添加到工作薄

      // 设置表格样式，!cols为列宽
      const options = {
        "!cols": [
          { wpx: 300 },
          { wpx: 150 },
          { wpx: 150 },
          { wpx: 150 },
          { wpx: 200 },
        ],
      };
      worksheet["!cols"] = options["!cols"]; // 设置每列的列宽，10代表10个字符，注意中文占2个字符
      console.log("worksheet", worksheet);
      for (let i in worksheet) {
        if (
          i === "A1" ||
          i === "B1" ||
          i === "C1" ||
          i === "D1" ||
          i === "E1"
        ) {
          worksheet[i].s = {
            fill: {
              fgColor: { rgb: "2d6ebe" }, // 添加背景色
            },
            font: {
              sz: 18, //18号字体
              bold: true, //加粗
              color: {
                rgb: "ffffff", //字体颜色
              },
            },
            alignment: {
              horizontal: "center", //水平居中
              vertical: "center", //垂直居中
            },
          };
        }
      }

      let wbout = XLSXS.write(workbook, {
        bookType: "xlsx",
        bookSST: false,
        type: "binary",
      });
      FileSaver.saveAs(
        new Blob([this.s2ab(wbout)], {
          type: "application/octet-stream",
        }),
        filename
      );
    },
  },
};
</script>
