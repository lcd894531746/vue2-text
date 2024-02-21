<template>
  <div>
    <el-button @click="getData">模拟请求</el-button>

    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-success="handelUploadSuccess"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "模拟请求",
      fileList: [],
    };
  },
  methods: {
    handelUploadSuccess() {
      console.log("上传成功", this.fileList);
    },
    // 模拟异步请求函数
    simulateAsyncRequest() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // 模拟请求成功，返回一个假的响应
          const fakeResponse = {
            data: "这是模拟的请求结果",
            status: 200,
            statusText: "OK",
          };
          resolve(fakeResponse);

          // 模拟请求失败，可以使用 reject 方法
          // reject(new Error('请求失败'));
        }, 1000); // 模拟1秒延迟
      });
    },
    async getData() {
      let a = await this.fetchData(); // 使用 await 等待结果
      console.log("moni", a);
    },

    // 使用模拟请求函数
    async fetchData() {
      try {
        const response = await this.simulateAsyncRequest();
        return response.data;
      } catch (error) {
        console.error("请求出错", error);
      }
    },
  },
  created() {},
};
</script>
