<template>
    <div id="home">
        <div class="wrap">
            <div class="inWrap">
                <div class="inWrapTop clearfix">
                    <div class="search fl">
                        <el-input placeholder="提交人/编号查询" title="提交人/编号查询" v-model="searchInput">
                            <el-button slot="append" icon="search" title="点击搜索" @click="search"></el-button>
                        </el-input>
                        <!--<input type="text" id="searchInput" class="searchInput fl" placeholder="提交人/编号查询" title="提交人/编号查询" />-->
                        <!--<input type="button" id="searchBtn" class="searchBtn fl" value="搜索" title="点击搜索" />-->
                    </div>
                    <div class="toExcel fr">
                        <el-button type="warning" title="导出Excel" @click.stop.prevent="toExcel">导出Excel</el-button>
                        <!--<input type="button" id="toExcelBtn" class="toExcelBtn" value="导出Excel" title="导出Excel" />-->
                        <!-- <a href="" id="toExcelBtn" class="toExcelBtn" title="导出Excel">导出Excel</a> -->
                    </div>
                </div>
                <div class="inWrapBottom">
                    <div class="bgWrap">
                        <div class="clearfix">
                            <div class="fl">
                                <span>审批状态:</span>
                                <el-button :plain="true" type="info" data-type="0" @click.native="change($event)" :class="{activeClick:activeArr[0]}">不限</el-button>
                                <el-button :plain="true" type="info" data-type="1" @click.native="change($event)" :class="{activeClick:activeArr[1]}">完成</el-button>
                                <el-button :plain="true" type="info" data-type="2" @click.native="change($event)" :class="{activeClick:activeArr[2]}">待出款</el-button>
                                <el-button :plain="true" type="info" data-type="3" @click.native="change($event)" :class="{activeClick:activeArr[3]}">驳回</el-button>
                            </div>
                            <div class="fr">
                                <span>提交时间:</span>
                                <el-date-picker
                                        v-model="startdate"
                                        type="date"
                                        placeholder="开始日期"
                                        :editable="false"
                                        @change="changestartData">
                                </el-date-picker>
                                <el-date-picker
                                        v-model="enddate"
                                        type="date"
                                        placeholder="结束日期"
                                        :editable="false"
                                        @change="changeendData">
                                </el-date-picker>
                            </div>
                        </div>
                        <div class="tableWrap">
                            <el-table
                                    :data="tableData3"
                                    border
                                    max-height="500"
                                    style="width: 100%;"
                                    @row-dblclick="dbclick">
                                <el-table-column
                                    prop="expenseNo"
                                    label="审批单号"
                                    width="180"
                                    align="center">
                                </el-table-column>
                                <el-table-column
                                    prop="expenseUserName"
                                    label="发起人"
                                    width="100"
                                    align="center">
                                </el-table-column>
                                <el-table-column
                                    prop="departName"
                                    label="报销部门"
                                    width="130"
                                    align="center"
                                    :show-overflow-tooltip="true">
                                </el-table-column>
                                <el-table-column
                                    prop="accountName"
                                    label="开户人姓名"
                                    width="110"
                                    align="center"
                                    :show-overflow-tooltip="true">
                                </el-table-column>
                                <el-table-column
                                    prop="BankAccount"
                                    label="开户行"
                                    width="200"
                                    align="center"
                                    :show-overflow-tooltip="true">
                                </el-table-column>
                                <el-table-column
                                    prop="accounNumber"
                                    label="银行账号"
                                    width="150"
                                    align="center"
                                    :show-overflow-tooltip="true">
                                </el-table-column>
                                <el-table-column
                                    prop="itemAlltotal"
                                    label="报销金额"
                                    width="150"
                                    align="center"
                                    :formatter="formatterItemAlltotal"
                                    :show-overflow-tooltip="true">
                                </el-table-column>
                                <el-table-column
                                    prop="productTypeName"
                                    label="报销类型"
                                    width="150"
                                    align="center"
                                    :formatter="formatterProductTypeName"
                                    :show-overflow-tooltip="true">
                                </el-table-column>
                                <el-table-column
                                    prop="remark"
                                    label="费用明细"
                                    width="150"
                                    align="center"
                                    :show-overflow-tooltip="true"
                                    :formatter="formatterRemark">
                                </el-table-column>
                                <el-table-column
                                    prop="expenseTotal"
                                    label="总报销金额"
                                    width="130"
                                    align="center"
                                    :formatter="formatterTotal">
                                </el-table-column>
                                <el-table-column
                                    prop="expenseState"
                                    label="审批状态"
                                    width="100"
                                    align="center"
                                    :formatter="formatterExpenseState">
                                </el-table-column>
                                <el-table-column
                                    prop="userName"
                                    label="历史审批人"
                                    width="130"
                                    align="center"
                                    :formatter="formatterUsername"
                                    :show-overflow-tooltip="true">
                                </el-table-column>
                                <el-table-column
                                    label="操作"
                                    width="240"
                                    fixed="right"
                                    align="center">
                                    <template scope="scope">
                                        <slot>
                                            <router-link :to="{path:'statement',query:{expenseID:scope.row.expenseID}}" :class="{hide:false}">
                                                <el-button
                                                    size="small"
                                                    :plain="true"
                                                    type="info"
                                                    icon="document">
                                                    报表
                                                </el-button>
                                            </router-link>
                                        </slot>
                                        <slot>
                                            <router-link :to="{path:'audit',query:{id:2,expenseID:scope.row.expenseID,expenseReviewID:scope.row.expenseReviewID}}" :class='{hide:false}'>
                                                <el-button
                                                    size="small"
                                                    :plain="true"
                                                    type="danger"
                                                    icon="circle-cross">
                                                    驳回
                                                </el-button>
                                            </router-link>
                                        </slot>
                                        <slot>
                                            <router-link :to="{path:'audit',query:{id:1,expenseID:scope.row.expenseID,expenseReviewID:scope.row.expenseReviewID}}" :class="{hide:false}">
                                                <el-button
                                                    size="small"
                                                    :plain="true"
                                                    type="success"
                                                    icon="circle-check">
                                                    通过
                                                </el-button>
                                            </router-link>
                                        </slot>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div class="pageTool">
                            <el-pagination
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page="currentPage4"
                                    :page-sizes="[10, 20, 30, 40]"
                                    :page-size="PageSize"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="dataCount">
                            </el-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'home',
        data() {
            return {
                dataCount: 0,
                PageSize: 10,
                pageNum:0,
                activeArr:[true,false,false,false],
                activeNum:0,
                searchInput: '',
                startdate: '',
                enddate: '',
                currentPage4: 1,
                tableData3: [],
                fullscreenLoading: false,
                expenseIDarr:[],
                expenseReviewIDarr:[]
            }
        },
        methods: {
            getTableData(params){
                let self =this;
                this.$http.post('/ddExpenses/pc_expense/financeExpenseList.do',params).then(data => {
                    console.log(data)
                        let myData = data.data;
                        if (JSON.stringify(myData) !== "{}") {
                            let status = myData.status;
                            switch (status) {
                                case "true":
                                    let info = myData.info;
                                    self.dataCount = parseInt(info.dataCount)
                                    if (JSON.stringify(info) !== "{}") {
                                        let dataArr = info.data;
                                        if (dataArr.length) {
                                            let arr = [];

                                            for (let i = 0,len = dataArr.length; i < len; i++){
                                                let expenseInfoArr = null;
                                                expenseInfoArr = dataArr[i].expenseInfo;
                                                arr.push({
                                                    expenseNo: dataArr[i].expenseNo,
                                                    expenseUserName: dataArr[i].expenseUserName,
                                                    departName: dataArr[i].departName,
                                                    accountName: dataArr[i].accountName,
                                                    BankAccount: dataArr[i].BankAccount,
                                                    accounNumber: dataArr[i].accounNumber,
                                                    itemAlltotal: expenseInfoArr,
                                                    productTypeName:expenseInfoArr,
                                                    remark: expenseInfoArr,
                                                    expenseTotal:dataArr[i].expenseTotal,
                                                    expenseState: dataArr[i].expenseState,
                                                    userName: dataArr[i].userList,
                                                    expenseID: dataArr[i].id,
                                                    expenseReviewID: dataArr[i].reviewID
                                                })
                                                self.expenseIDarr.push(dataArr[i].id)
                                                self.expenseReviewIDarr.push(dataArr[i].reviewID)
                                            }
                                            this.tableData3 = arr;
                                        } else {
                                            this.tableData3 = [];
                                            this.$message({
                                                showClose: true,
                                                message: '暂无信息',
                                                type: 'warning'
                                            });
                                            return;
                                        };
                                    } else {
                                        this.tableData3 = [];
                                        this.$message({
                                            showClose: true,
                                            message: '返回数据为空',
                                            type: 'warning'
                                        });
                                        return;
                                    };
                                    break;
                                case "failure":
                                    this.$message({
                                        showClose: true,
                                        message: '查询错误',
                                        type: 'error'
                                    });
                                    break;
                                default:
                                    break;
                            }
                        } else {
                            this.tableData3 = [];
                            this.$message({
                                showClose: true,
                                message: '暂无数据',
                                type: 'warning'
                            });
                            return;
                        };

                }).catch(err => {
                    this.tableData3 = [];
                    this.$message({
                        showClose: true,
                        message: "服务错误",
                        type: 'error'
                    });
                })
            },
            handleSizeChange(val) {
                this.PageSize = val;
                let params = new URLSearchParams();
                params.append('userID', 2);
                params.append('pageNum', this.pageNum);
                params.append('pageSize', val);
                params.append('search', this.searchInput);
                params.append('type', this.activeNum);
                params.append('startTime', this.startdate);
                params.append('endTime',this.enddate);
                this.getTableData(params);
            },
            handleCurrentChange(val) {
//                this.pageNum = val -1;
                let params = new URLSearchParams();
                params.append('userID', 2);
                params.append('pageNum', val-1);
                params.append('pageSize', this.PageSize);
                params.append('search', this.searchInput);
                params.append('type', this.activeNum);
                params.append('startTime', this.startdate);
                params.append('endTime', this.enddate);
                this.getTableData(params);
            },
            formatterExpenseState(row, column, cellValue){ //格式化审批状态
               switch(cellValue){
                   case 2:
                       return "待出款"
                       break;
                   case 3:
                       return "完成"
                       break;
                   case 9:
                       return "驳回"
                       break;
                   default:
                       return "--"
                       break;
               }
            },
            formatterTotal(row, column, cellValue){ //格式化金额
                let Num = parseInt(cellValue);
                cellValue = cellValue + '';
                if (cellValue.length >= 9) {
                    return (Num / 100000000) + "亿"
                } else if (cellValue.length <= 4) {
                    return Num + "元"
                } else {
                    return (Num / 10000) + "万"
                }
            },
            formatterUsername(row, column, cellValue){ //格式化历史审批人
                let str = '';
                for(let i = 0,len = cellValue.length; i < len; i++){
                    str += cellValue[i].userName + ' ';
                }
                return str;
            },
            formatterProductTypeName(row, column, cellValue){ //格式化报销类型
                let str = '';
                for(let i = 0,len = cellValue.length; i < len; i++){
                    str += cellValue[i].productTypeName + '　';
                }
                return str;
            },
            formatterItemAlltotal(row, column, cellValue){ //格式化报销金额
                let str = '';
                for(let i = 0,len = cellValue.length; i < len; i++){
                    let Num = parseInt(cellValue[i].itemAlltotal);
                    cellValue[i].itemAlltotal = cellValue[i].itemAlltotal + '';
                    if (cellValue[i].itemAlltotal.length >= 9) {
                        str += (Num / 100000000) + "亿" + '　'
                    } else if (cellValue[i].itemAlltotal.length <= 4) {
                        str += Num + "元" + '　'
                    } else {
                        str += (Num / 10000) + "万" + '　'
                    }
                }
                return str;
            },
            formatterRemark(row, column, cellValue){ //格式化费用明细
                let str = '';
                for(let i = 0,len = cellValue.length; i < len; i++){
                    str += cellValue[i].remark + '　';
                }
                return str;
            },
            change(event){
                let type = event.currentTarget.dataset["type"];
                console.log(type)
                switch(type){
                    case "0":
                        this.activeArr = [true,false,false,false];
                        this.activeNum = 0;
                        break;
                    case "1":
                        this.activeArr = [false,true,false,false];
                        this.activeNum = 1;
                        break;
                    case "2":
                        this.activeArr = [false,false,true,false];
                        this.activeNum = 2;
                        break;
                    case "3":
                        this.activeArr = [false,false,false,true];
                        this.activeNum = 3;
                        break;
                    default:
                        break;
                }

                let params = new URLSearchParams();
                params.append('userID', 2);
                params.append('pageNum', this.pageNum);
                params.append('pageSize', this.PageSize);
                params.append('search', "");
                params.append('type', type);
                params.append('startTime', this.startdate);
                params.append('endTime', this.enddate);
                this.getTableData(params);
            },
            changestartData(e){
                this.startdate = e;
                this.compaireFn();
            },
            changeendData(e){
                this.enddate = e;
                this.compaireFn();
            },
            compaireFn(){
                let reg = /^\d+$/;
                if(this.startdate && this.enddate){
                    let num = '';
                    let startval = this.startdate.split("-").join('');
                    let endval = this.enddate.split("-").join('');
                        num = endval - startval;

                    if(reg.test(num)){
                        let params = new URLSearchParams();
                        params.append('userID', 2);
                        params.append('pageNum', 0);
                        params.append('pageSize', this.PageSize);
                        params.append('search', this.searchInput);
                        params.append('type', this.activeNum);
                        params.append('startTime', this.startdate);
                        params.append('endTime', this.enddate);
                        this.getTableData(params);
                    }else{
                        this.$message({
                            showClose: true,
                            message: "日期选择不合法",
                            type: 'warning'
                        });
                        this.startdate = "";
                        this.enddate = "";
                    }
                }
            },
            search(){
                let params = new URLSearchParams();
                params.append('userID', 2);
                params.append('pageNum', this.pageNum);
                params.append('pageSize', this.PageSize);
                params.append('search', this.searchInput);
                params.append('type', this.activeNum);
                params.append('startTime', this.startdate);
                params.append('endTime', this.enddate);
                this.getTableData(params);

//                this.searchInput = '';
            },
            dbclick(row, event){
                event.preventDefault();
                event.stopPropagation();
                this.$router.push({path:'/statement'}); //路由跳转
            },
            toExcel(){
                const self = this;
                let form = document.createElement("form");
                let input = document.createElement("input");
                $(input).attr('type', 'hidden');
                form.style.display = "none";
                form.setAttribute("method", "post");
                // 测试
                // form.setAttribute("action", "www.ehaofangwang.com/ddExpenses/pc_expense/exportExpense.do?userID="+2+'&search='+val+'&type='+typeid+'&startTime='+startTime+'&endTime='+endTime);
                // 本地
                form.setAttribute("action", "http://192.168.1.30:8080/ddExpenses/pc_expense/exportExpense.do?userID=2&search=" + self.searchInput + '&type=' +  self.activeNum + '&startTime=' + self.startdate + '&endTime=' + self.enddate);

                document.body.appendChild(form);
                form.appendChild(input);
                form.submit();
                form.parentNode.removeChild(form);
//                this.$http({
//                    url: '/ddExpenses/pc_expense/exportExpense.do',
//                    method: 'post',
//                    data: {
//                        userID: 2,
//                        search: this.searchInput,
//                        type:this.activeNum,
//                        startTime:this.startdate,
//                        endTime:this.enddate
//                    },
//                    transformRequest: [function (data) {
//                        // Do whatever you want to transform the data
//                        let ret = ''
//                        for (let it in data) {
//                            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//                        }
//                        return ret
//                    }],
//                    headers: {
//                        'Content-Type': 'application/x-www-form-urlencoded'
//                    }
//                })
            }
        },
        mounted(){
            let params = new URLSearchParams();
            params.append('userID', 2);
            params.append('pageNum', this.pageNum);
            params.append('pageSize', this.PageSize);
            params.append('search', "");
            params.append('type', this.activeNum);
            params.append('startTime', this.startdate);
            params.append('endTime', this.enddate);
            this.getTableData(params); //默认获取数据
        }
    }
</script>

<style lang="less">
    .wrap {
        width: 100%;
    > .inWrap {
    > .inWrapTop {
          width: 1000px;
          margin: 0 auto;
          padding: 14px 0;
          height: 42px;
      }
    > .inWrapBottom{
          width: 100%;
          background-color: #fff;
    > .bgWrap{
          width: 1000px;
          padding: 40px 0;
          margin: 0 auto;
    > .tableWrap{
          margin-top: 40px;
      }
    > .pageTool{
          margin-top: 40px;
          text-align: center;
      }
    }
    }
    }
    }
    .activeClick{
        border-color: #48ace6 !important;
        color: #48ace6 !important;
    }
</style>