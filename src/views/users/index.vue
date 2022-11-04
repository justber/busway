<template>

  <div class="app-container">
	<el-container>
		<el-header>  
			<el-menu
				:default-active="activeIndex2"
				class="el-menu-demo"
				mode="horizontal"
				router
				@select="handleSelect"
				background-color="#545c64"
				text-color="#fff"
				active-text-color="#ffd04b">
				
				<el-menu-item index="login" style="float: right;">

						<el-row class="demo-avatar demo-basic">
							<el-col :span="12">
									
									<div class="demo-basic--circle">
										<div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
										<div class="block" v-for="size in sizeList" :key="size">
										<el-avatar :size="size" :src="circleUrl"></el-avatar>
										</div>
									</div>
    						</el-col> 
						</el-row>

				</el-menu-item>
			</el-menu>
		</el-header>
		<el-main> 
			   <!-- 表格 -->
			<el-table
				:data="tableData"
				style="width: 100%"
				:row-class-name="tableRowClassName">
				<el-table-column
				prop="date"
				label="日期"
				width="180">
				</el-table-column>
				<el-table-column
				prop="name"
				label="姓名"
				width="180">
				</el-table-column>
				<el-table-column
				prop="address"
				label="地址">
				</el-table-column>

				<el-table-column
					fixed="right"
					label="操作"
					width="100">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
						<el-button type="text" size="small">编辑</el-button>
					</template>
    			</el-table-column>

  			</el-table>

		</el-main>
	</el-container>
 

    <!-- 分页 -->
    <el-pagination
      :current-page="page" 
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: center;"
      layout="total, prev, pager, next, jumper"
      @current-change="getList"/>


  </div>
</template>

<script>

//引入dockerlist.js

export default {
    //写核心代码
   data(){  //定义变量和初始值
     return{
       tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],

		 circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
       
      
     }
   },
   created(){//页面渲染之前执行，一般调用methods定义的方法
      
   },
   methods:{//创建具体的方法，调用teacher.js定义的方法

         tableRowClassName({row, rowIndex}) {
				if (rowIndex === 1) {
				return 'warning-row';
				} else if (rowIndex === 3) {
				return 'success-row';
				}
				return '';
    	  },

		   handleClick(row) {
       			 console.log(row);
      		}

   }
}
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
