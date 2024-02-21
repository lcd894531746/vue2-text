<template>
  <div class="main">
    <div class="bg-000 text-fff w-200 h-100 font-50">json</div>
    <a-table :columns="columns" :data-source="data" :pagination="false">
    </a-table>
  </div>
</template>
<script>
// import JSONtext from "./jsontext.json";
export default {
  data() {
    return {
      pagination: {
        pageSizeOptions: ["10", "20", "30", "40"],
      },
      columns: [
        {
          title: "title",
          dataIndex: "title",
        },
        {
          title: "path",
          dataIndex: "path",
        },
        {
          title: "component",
          dataIndex: "component",
        },
      ],
      data: [],
    };
  },
  mounted() {
    // 项目级
    // const a = require("./jsontext.json");
    // 企业级
    const a = require("./_menus.json");
    console.table("原数据", a);
    let dataArr = [];
    a.forEach((element) => {
      if (element.children.length == 0) {
        dataArr.push({
          title: element.title,
          path: element.path,
          component: "/modules" + element.component,
        });
      } else {
        element.children.forEach((item) => {
          if (item.children.length == 0) {
            dataArr.push({
              title: element.title +'-'+item.title,
              path: element.path + "/" + item.path,
              component: "/modules" + item.component,
            });
          }
        });
      }
    });
    this.data = Object.freeze(dataArr);
    console.table(dataArr);
  },
 
};
</script>

<style>
.main {
  height: 100vh;
  overflow: auto;
}
</style>