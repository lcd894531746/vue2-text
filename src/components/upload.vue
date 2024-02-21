<template>
  <div class="">
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
      :limit="3"
      :file-list="uploadFileList"
      :on-progress="progress"
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
      uploadFileList: [],
      /**存储刚刚上传的图片json字符串 */
    };
  },
  watch: {},
  created() {
    //接收控件页面的值
  },
  mounted() {},
  methods: {
    /**     文件正在上传时的钩子    **/
    progress(event, file) {
      console.log("event, file", event.percent, file);
    },
    // 上传成功
    handelUploadSuccess(res, file, fileList) {},
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-upload-list--text.el-upload-list {
//   display: none;
}


</style>
