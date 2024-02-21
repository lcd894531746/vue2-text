<template>
  <div>
    <div id="gantt_here" style="width: 100%; height: 100vh"></div>
  </div>
</template>

<script>
import { gantt } from "dhtmlx-gantt";
import ganttData from "./json.js";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";

export default {
  data() {
    return {
      items: [],
      index: 1,
      taskId: "",
    };
  },
  mounted() {
   

    window.clickGridButton = this.clickGridButton;
    window.inputChoose = this.inputChoose;
    // console.log("ganttData", ganttData);
    this.items = [];
    this.ganttChange(ganttData, 0); //只处理数据
    console.log("this.items", this.items);
    this.getGanttAA();
  },
  methods: {
    clickGridButton(id, task) {
      console.log("操作按钮", id, task);
      console.log("window", window.clientX);
    },
    inputChoose(id) {
      console.log("选择", id);
      let doms = document.getElementsByClassName("inputCheckbox");
      if (this.taskId == id) {
        for (const iterator of doms) {
          iterator.checked = false;
          this.taskId = "";
        }
      } else {
        this.taskId = id;
      }
    },
    ganttChange(data, NEWid) {
      // 数据展开成为一维度   递归
      data.forEach((item) => {
        const a = item.startDate;
        let b = a.split("-");
        let c = b[2] + "-" + b[1] + "-" + b[0];
        let d = item.endDate;
        let e = d.split("-");
        let f = e[2] + "-" + e[1] + "-" + e[0];
        item.parent = NEWid;
        item.open = true;
        item.progress = 0.6;
        item.start_date = c;
        item.end_date = f;

        //处理序号

        item.index = this.index;
        this.index++;
        this.items.push(item);
        item.projectWbsSub.length > 0 &&
          this.ganttChange(item.projectWbsSub, item.id);
      });
    },
    //所有配置选项都在 gantt.config 对象中声明。
    // 要设置所需的选项，只需按照本文档中的说明编写即可。
    // 请注意，配置选项应该在带有 dhtmlxGantt 初始化的代码行之前。

    getGanttAA() {
      gantt.config["scales"] = [
        {
          unit: "day",
          step: 1,
          format: "%d %M",
        },
        // { unit: "year", step: 1, format: "%Y" },
        { unit: "month", step: 1, format: "%M" },
        //{unit: "month", step: 3, format: monthScaleTemplate},
      ];
      gantt.config.scale_height = 50;
      // 模板可用于更改日期和标签的显示。
      gantt.templates.task_text = function (start, end, task) {
        return (
          "<b>模板自定义:</b> " + task.text + ",<b> Holders:</b> " + task.users
        );
      };
      gantt.i18n.setLocale("cn");
      // 初始化甘特图
      gantt.init("gantt_here");
      // 布局
      // 布局是通过gantt.config.layout配置选项设置的。布局的默认配置如下：

      gantt.config.layout = {
        css: "gantt_container",
        rows: [
          {
            cols: [
              {
                // the default grid view
                view: "grid",
                scrollX: "scrollHor",
                scrollY: "scrollVer",
              },
              { resizer: true, width: 1 },
              {
                // the default timeline view
                view: "timeline",
                scrollX: "scrollHor",
                scrollY: "scrollVer",
              },
              {
                view: "scrollbar",
                id: "scrollVer",
              },
            ],
          },
          {
            view: "scrollbar",
            id: "scrollHor",
          },
        ],
      };
      var colContent = function (task) {
        return (
          '<i class="fa gantt_button_grid gantt_grid_edit fa-pencil"' +
          'onclick="clickGridButton(' +
          task.id +
          ", 'edit')\">编辑</i>" +
          '<i class="fa gantt_button_grid gantt_grid_add fa-plus"' +
          'onclick="clickGridButton(' +
          task.id +
          ", 'add')\">删除</i>" +
          '<i class="fa gantt_button_grid gantt_grid_delete fa-times"' +
          'onclick="clickGridButton(' +
          task.id +
          ", 'delete')\"></i>"
        );
      };
      gantt.config.columns = [
        {
          name: "checked",
          label: "选择",
          min_width: 30,
          template: function (task, e) {
            //判断是否有权限显示多选框
            if (!task.readonly) {
              return `<input  class="gantt-checkbox-column inputCheckbox" name="checked" onclick="inputChoose(${task.id})" type="radio" />`;
            }
            return "";
          },
        },

        { name: "index", label: "序号", min_width: 30, align: "center" },
        {
          name: "name",
          tree: true,
          label: "名称",
          min_width: 200,
          align: "left",
        },
        { name: "pbsType", label: "类型", min_width: 100, align: "center" },
        {
          name: "startDate",
          label: "计划开始日期",
          min_width: 100,
          align: "center",
        },
        {
          name: "endDate",
          label: "计划完成日期",
          min_width: 100,
          align: "center",
        },
        {
          name: "duration",
          label: "计划工期(天)",
          min_width: 100,
          align: "center",
        },

        {
          name: "completeNum",
          label: "计划完成数量",
          min_width: 100,
          align: "center",
        },
        { name: "weight", label: "相对权重", min_width: 100, align: "center" },
        // { name: "text", label: "操作", min_width: 200, align: "center" },
        { name: "buttons", label: "操作", width: 75, template: colContent },
        // { name: "add", label: "" }, // ➕icon列显示 点击弹出添加框 隐藏没有
      ];

      gantt.parse({
        // data里面的部分属性的key是不能更改的，比如id，parent，start_date、end_date、progress、open
        data: this.items,
        // 这个是配置的
        // links里面的全部属性的key是不能更改的id source target type
        links: [
          // { id: 1, source: 2, target: 1, type: "0" },
          // { id: 2, source: 2, target: 3, type: "0" }
        ],
      });
    },
  },
};
</script>

<style lang='scss'scoped >
// /deep/ .gantt_grid_head_cell {
//   font-size: 14px;
//   color: aqua !important;
//   width: 200px !important;
// }
</style>

<!-- 1、data里面的部分属性的key是不能更改的，比如id，parent，start_date、end_date、progress、open
links里面的全部属性的key是不能更改的id source target type
2、data如果type是project，那么这条数据的开始时间会取其里面所有数据的最早开始时间，结束时间会取里面所有数据的最晚开始时间，如果这条数据里面的所有数据都是空数据，那么start_date会甘特图渲染的最早时间，end_date是start_date的后一天，这样数据就会不准确？
解决方案： data里加个unscheduled属性来控制是否渲染这条数据，需要注意的是在所有涉及到日期的地方都要加，如tooltips_text 、columns、 拖拽等等
3、 dhtmlx-gantt都是下划线分割，而且api中都是这样,但在layout中min_width、max_width不生效，要用minWidth、maxWidth替换才生效。
4、排序后的数据默认从页面获取的row元素可能是不准确的，需要从dataStroe中获取。
5、甘特图在不占全屏的情况下， order_branch = true，拖拽会有限制？

作者：ygunoil
链接：https://juejin.cn/post/6930900493602390024
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 -->