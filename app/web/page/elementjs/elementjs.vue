<template>
  <Layout description="vue server side render" keywords="egg, vue, webpack, server side render">
    <el-upload
      class="upload-demo"
      drag
      action="/upload?_csrf=M71t0GAmIYPUEn0D7_HdHIwE"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <!-- <el-alert
            title="el-table有bug, 服务器渲染出来数据是空的,用简单的模板结果是可以出来"
            type="info">
    </el-alert> -->
    <!-- <p></p>
    <el-table :data="list " border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column
              prop="id"
              label="ID"
              width="100">
      </el-table-column>
      <el-table-column
              prop="title"
              label="标题"
              width="180">
      </el-table-column>
      <el-table-column
              prop="summary"
              label="简介">
      </el-table-column>
    </el-table>
    <div class="block" style="text-align: right; margin-top: 16px">
      <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageIndex"
              :page-sizes="[10, 15, 20, 50]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
      </el-pagination>
    </div> -->
  </Layout>
</template>
<style>
</style>
<script type="text/babel">
  import Vue from 'vue';
  import ElementUI from 'element-ui';
  Vue.use(ElementUI);
  export default {
    components: {},
    data() {
      return {
        pageIndex: 1,
        pageSize: 10
      };
    },
    methods: {
      fetch() {
        this.$http.get(`/pager?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`).then(res => {
          this.total = res.data.total;
          this.list = res.data.list;
        });
      },
      handleSelectionChange(val) {
        console.log('handleSelectionChange', val);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize = val;
        this.fetch();
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.pageIndex = val;
        this.fetch();
      },
      handleEdit(index, row) {
        this.$message(`你点击了编辑操作 index:${index}, id:${row.id}`);
      },
      handleDelete(index, row) {
        this.$message(`你点击了删除操作 index:${index}, id:${row.id}`);
      }
    },
    mounted() {
      console.log(this.$data);
    }
  };
</script>

