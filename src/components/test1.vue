<!-- 
    
    
    task1： 通过点击button 按钮的改变value的值  并且呈现在页面id='value'的span 标签中
    task2： 使用v-for 循环   循环出10个 <span class="value"></span>  这个标签
    task3： 点击 点我隐藏 按钮 使用v-if / v-show 隐藏 我是内容区域 这个标签 
    task4： 点击 点我显示 按钮 使用v-if / v-show 显示 我是内容区域 这个标签 
    task5： 点击  点我三元运算 使用三元运算 判断 当前点击的按钮的值 如果是 1 则 当前的value 值加1 如果是 2 则 当前的value 值减1


-->
<template>
  <!-- vue2  必须有一个根标签包裹，可就是这个 div 标签的    所有的关于界面的  都在这个标签里面写 -->
  <div>
    <button type="submit" @click="ChannelMergerNode">$data</button>
    <div>{{ boolTt }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      boolTt: false,
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          children: [
            {
              id: 31,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄",
            },
            {
              id: 32,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄",
            },
          ],
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    ChannelMergerNode() {
      this.boolTt = !this.boolTt;
      console.log(this.$options);
    },
  },
};
</script>
