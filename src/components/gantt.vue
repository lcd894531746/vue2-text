<template>
  <div>
    <!-- <div v-if="tasksShow">
      <gantt-elastic
        :options="options"
        :tasks="tasks"
        @tasks-changed="tasksUpdate"
        @options-changed="optionsUpdate"
        @dynamic-style-changed="styleUpdate"
      >
        <gantt-header slot="header"></gantt-header>
      </gantt-elastic>
    </div> -->
  </div>
</template>

<style>
</style>

<script>
import GanttElastic from "gantt-elastic";
import GanttHeader from "gantt-elastic-header";
import dayjs from "dayjs";

// just helper to get current dates
function getDate(hours) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const timeStamp = new Date(
    currentYear,
    currentMonth,
    currentDay,
    0,
    0,
    0
  ).getTime();
  return new Date(timeStamp + hours * 60 * 60 * 1000).getTime();
}

export default {
  name: "Gantt",
  components: {
    GanttElastic,
    GanttHeader,
  },
  data() {
    return {
      test: {
        a: 1,
      },

      tasksShow: false,
      dynamicStyle: {},
      lastId: 16,
      tasks: [],

      options: {
        taskMapping: {
          progress: "percent",
        },

        maxRows: 100,
        maxHeight: 500,
        title: {
          label: "Your project title as html (link or whatever...)",
          html: false,
        },
        row: {
          height: 24,
        },
        calendar: {
          hour: {
            display: true,
          },
        },
        chart: {
          progress: {
            bar: false,
          },
          expander: {
            display: true,
          },
        },
        taskList: {
          expander: {
            straight: false,
          },
          columns: [
            {
              id: 1,
              label: "序号",
              value: "id",
              width: 60,
              style: this.getStyle(),
            },
            {
              id: 2,
              label: "状态",
              value: "id",
              width: 60,
              style: this.getStyle(),
            },
            {
              id: 3,
              label: "名称",
              value: "name",
              width: 200,
              expander: true,
              html: true,
              events: {
                // click({ data, column }) {
                //   alert("description clicked!\n" + data.label);
                // },
              },
            },
            {
              id: 4,
              label: "层级",
              value: "wbsClassify",
              width: 60,
              html: true,
              style: this.getStyle(),
            },
            {
              id: 5,
              label: "类型",
              value: "wbsType",
              width: 60,
              style: this.getStyle(),
            },
            {
              id: 6,
              label: "计划开始日期",
              value: (task) => dayjs(task.start).format("YYYY-MM-DD"),
              width: 100,
              style: this.getStyle(),
            },
            {
              id: 7,
              label: "计划完成日期",
              value: "endTime",
              width: 100,
              style: this.getStyle(),
            },
            {
              id: 8,
              label: "计划工期(天)",
              value: "days",
              width: 90,
              style: this.getStyle(),
            },
            {
              id: 9,
              label: "计划完成数量",
              value: "planComplite",
              width: 100,
              style: this.getStyle(),
            },
            {
              id: 10,
              label: "相对权重",
              value: "weight",
              width: 100,
              style: this.getStyle(),
            },
            {
              id: 11,
              label: "操作",
              value: "opration",
              html: true,
              width: 100,
              style: this.getStyle(),
            },
          ],
        },
        locale: {
          name: "en",
          Now: "现在",
          "X-Scale": "Zoom-X",
          "Y-Scale": "Zoom-Y",
          "Task list width": "Task list",
          "Before/After": "Expand",
          "Display task list": "Task list",
          weekdays: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
          months: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
          ],
        },
      },
    };
  },
  created() {
    // console.log(this.test);
  },
  mounted() {
    this.test1();
    // this.getList();
  },

  methods: {
    test1() {
      const object1 = {};

      Object.defineProperty(object1, "property1", {
        value: 42,
        writable: true,
        configurable: true,
      });
      object1.property1 = 77;
      // Throws an error in strict mode
      console.log(object1.property1);
      // Expected output: 42
    },

    getStyle() {
      let style = {
        "task-list-header-label": {
          "text-align": "center",
          width: "100%",
        },
        "task-list-item-value-container": {
          "text-align": "center",
          width: "100%",
        },
      };
      return style;
    },
    tasksUpdate(tasks) {
      this.tasks = tasks;
    },
    optionsUpdate(options) {
      this.options = options;
    },
    styleUpdate(style) {
      this.dynamicStyle = style;
    },
    getList() {
      let list = [
        {
          id: 1,
          label: "ganter",
          start: getDate(-24 * 5),
          duration: 0,
          endTime: "2022-12-12 10:33:42",
          percent: 10,
          type: "project",
          wbsState: "0",
          wbsType: 1,
          wbsClassify: 1,
          name: "设计",
          days: 3,
          planComplite: 47,
          weight: 100,
          style: {
            base: {
              fill: "#0287D0",
              stroke: "#0077C0",
            },
          },
        },
        {
          id: 2,
          label: "ganter",
          start: "2022-12-12 10:33:42",
          duration: 2 * 24 * 60 * 60 * 1000,
          endTime: "2022-12-12 10:33:42",
          percent: 50,
          parentId: 1,
          type: "project",
          wbsState: "0",
          wbsType: 1,
          wbsClassify: 1,
          name: "设计",
          days: 3,
          planComplite: 47,
          weight: 100,
          opration: "<button>编辑</button><button>删除</button>",
        },
        // {
        //   id: 2,
        //   label: "With great power comes great responsibility",
        //   user: '<a href="https://www.google.com/search?q=Peter+Parker" target="_blank" style="color:#0077c0;">Peter Parker</a>',
        //   parentId: 1,
        //   start: getDate(-24 * 4),
        //   duration: 4 * 24 * 60 * 60 * 1000,
        //   percent: 50,
        //   type: "milestone",
        //   collapsed: true,
        //   style: {
        //     base: {
        //       fill: "#1EBC61",
        //       stroke: "#0EAC51",
        //     },
        //   },
        // },
        // {
        //   id: 3,
        //   label: "Courage is being scared to death, but saddling up anyway.",
        //   user: '<a href="https://www.google.com/search?q=John+Wayne" target="_blank" style="color:#0077c0;">John Wayne</a>',
        //   parentId: 2,
        //   start: getDate(-24 * 3),
        //   duration: 2 * 24 * 60 * 60 * 1000,
        //   percent: 100,
        //   type: "task",
        // },
        // {
        //   id: 4,
        //   label: "Put that toy AWAY!",
        //   user: '<a href="https://www.google.com/search?q=Clark+Kent" target="_blank" style="color:#0077c0;">Clark Kent</a>',
        //   start: getDate(-24 * 2),
        //   duration: 2 * 24 * 60 * 60 * 1000,
        //   percent: 50,
        //   type: "task",
        //   dependentOn: [3],
        // },
        // {
        //   id: 5,
        //   label:
        //     "One billion, gajillion, fafillion... shabadylu...mil...shabady......uh, Yen.",
        //   user: '<a href="https://www.google.com/search?q=Austin+Powers" target="_blank" style="color:#0077c0;">Austin Powers</a>',
        //   parentId: 4,
        //   start: getDate(0),
        //   duration: 2 * 24 * 60 * 60 * 1000,
        //   percent: 10,
        //   type: "milestone",
        //   style: {
        //     base: {
        //       fill: "#0287D0",
        //       stroke: "#0077C0",
        //     },
        //   },
        // },
        // {
        //   id: 6,
        //   label: "Butch Mario and the Luigi Kid",
        //   user: '<a href="https://www.google.com/search?q=Mario+Bros" target="_blank" style="color:#0077c0;">Mario Bros</a>',
        //   parentId: 5,
        //   start: getDate(24),
        //   duration: 1 * 24 * 60 * 60 * 1000,
        //   percent: 50,
        //   type: "task",
        //   collapsed: true,
        //   style: {
        //     base: {
        //       fill: "#8E44AD",
        //       stroke: "#7E349D",
        //     },
        //   },
        // },
        // {
        //   id: 7,
        //   label: "Devon, the old man wanted me, it was his dying request",
        //   user: '<a href="https://www.google.com/search?q=Knight+Rider" target="_blank" style="color:#0077c0;">Knight Rider</a>',
        //   parentId: 2,
        //   dependentOn: [6],
        //   start: getDate(24 * 2),
        //   duration: 4 * 60 * 60 * 1000,
        //   percent: 20,
        //   type: "task",
        //   collapsed: true,
        // },
        // {
        //   id: 8,
        //   label: "Hey, Baby! Anybody ever tell you I have beautiful eyes?",
        //   user: '<a href="https://www.google.com/search?q=Johhny+Bravo" target="_blank" style="color:#0077c0;">Johhny Bravo</a>',
        //   parentId: 7,
        //   dependentOn: [7],
        //   start: getDate(24 * 3),
        //   duration: 1 * 24 * 60 * 60 * 1000,
        //   percent: 0,
        //   type: "task",
        // },
        // {
        //   id: 9,
        //   label:
        //     "This better be important, woman. You are interrupting my very delicate calculations.",
        //   user: '<a href="https://www.google.com/search?q=Dexter\'s+Laboratory" target="_blank" style="color:#0077c0;">Dexter\'s Laboratory</a>',
        //   parentId: 8,
        //   dependentOn: [8, 7],
        //   start: getDate(24 * 4),
        //   duration: 4 * 60 * 60 * 1000,
        //   percent: 20,
        //   type: "task",
        //   style: {
        //     base: {
        //       fill: "#8E44AD",
        //       stroke: "#7E349D",
        //     },
        //   },
        // },
        // {
        //   id: 10,
        //   label: "current task",
        //   user: '<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
        //   start: getDate(24 * 5),
        //   duration: 24 * 60 * 60 * 1000,
        //   percent: 0,
        //   type: "task",
        // },
      ];
      this.tasks = list;
      this.$nextTick(() => {
        this.tasksShow = true;
      });
    },
  },
};
</script>

