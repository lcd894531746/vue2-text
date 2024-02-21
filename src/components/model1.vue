<template>
  <div>
    <table>
      <tbody>
        <tr>
          <td colspan="4" class="text-center">
            <h1>雅袭江流域水电开发有限公司收文处理笔</h1>
          </td>
        </tr>
        <tr>
          <td>来文：</td>
          <td colspan="3">孟底沟(交) 设-[2023] -297</td>
        </tr>
        <tr>
          <td>来文机关：</td>
          <td colspan="3">成都院孟底沟项目部</td>
        </tr>
        <tr>
          <td>标题：</td>
          <td colspan="3">
            关于报送雅袭江孟底沟水电站前期工程现场数字化指挥平台技术登记表的函
          </td>
        </tr>
        <tr>
          <td rowspan="5" class="liucheng">流程记录</td>
          <td>
            <h5>处理记录</h5>
          </td>
          <td>
            <h5>处理意见</h5>
          </td>
          <td><h5>处理人</h5></td>
        </tr>
        <tr v-for="(item, index) in 4" :key="index">
          <td>[施菊] 创建了此流程事项!</td>
          <td>已阅</td>
          <td>施菊2023-12-23</td>
        </tr>
        <tr>
          <td>附件：</td>
          <td colspan="3">
            <div>我是发起流程时上传的附件名称</div>
            <div>我是多份附件展示样式名称</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      sender: "",
      date: "",
      name: "",
      action: "",
      time: "",
    };
  },
  computed: {
    senders() {
      // 这里假设有一个获取发送者列表的方法或者从服务器请求的数据。
      // 返回的是一个包含 label-value 对象数组的对象。
      // 在这里我们只是返回了一个空对象数组模拟一下。
      return [{ label: "选项A", value: "" }, { label: "选项B", value: "" }];
    },
  },
};
</script>
<style>
/* Add border properties to the table, th, and td */
table {
  border: 1px solid #ddd;
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>
