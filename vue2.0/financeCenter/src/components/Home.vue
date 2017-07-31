<template>
    <div id="home">
        <div class="wrap">
            <div class="inWrap">
                <div class="inWrapTop clearfix">
                    <div class="search fl">
                        <el-input placeholder="提交人/编号查询" title="提交人/编号查询" v-model="input5">
                            <el-button slot="append" icon="search" title="点击搜索"></el-button>
                        </el-input>
                        <!--<input type="text" id="searchInput" class="searchInput fl" placeholder="提交人/编号查询" title="提交人/编号查询" />-->
                        <!--<input type="button" id="searchBtn" class="searchBtn fl" value="搜索" title="点击搜索" />-->
                    </div>
                    <div class="toExcel fr">
                        <el-button type="warning" title="导出Excel">导出Excel</el-button>
                        <!--<input type="button" id="toExcelBtn" class="toExcelBtn" value="导出Excel" title="导出Excel" />-->
                        <!-- <a href="" id="toExcelBtn" class="toExcelBtn" title="导出Excel">导出Excel</a> -->
                    </div>
                </div>
                <div class="inWrapBottom">
                    <div class="bgWrap">
                        <div class="clearfix">
                            <div class="fl">
                                <span>审批状态:</span>
                                <el-button :plain="true" type="info">不限</el-button>
                                <el-button :plain="true" type="info">完成</el-button>
                                <el-button :plain="true" type="info">进行中</el-button>
                                <el-button :plain="true" type="info">驳回</el-button>
                            </div>
                            <div class="fr">
                                <span>提交时间:</span>
                                <el-date-picker
                                        v-model="value1"
                                        type="date"
                                        placeholder="开始日期">
                                </el-date-picker>
                                <el-date-picker
                                        v-model="value2"
                                        type="date"
                                        placeholder="结束日期">
                                </el-date-picker>
                            </div>
                        </div>
                        <div class="tableWrap">
                            <el-table
                                    :data="tableData3"
                                    border
                                    max-height="500"
                                    style="width: 100%;">
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
                                        align="center">
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
                                        align="center">
                                </el-table-column>
                                <el-table-column
                                        prop="accounNumber"
                                        label="银行账号"
                                        width="150"
                                        align="center">
                                </el-table-column>
                                <el-table-column
                                        prop="itemAlltotal"
                                        label="报销金额"
                                        width="150"
                                        align="center"
                                        :formatter="formatterItemAlltotal">
                                </el-table-column>
                                <el-table-column
                                        prop="productTypeName"
                                        label="报销类型"
                                        width="150"
                                        align="center">
                                </el-table-column>
                                <el-table-column
                                        prop="remark"
                                        label="费用明细"
                                        width="150"
                                        align="center"
                                        :show-overflow-tooltip="true">
                                </el-table-column>
                                <el-table-column
                                        prop="expenseTotal"
                                        label="总报销金额"
                                        width="130"
                                        align="center"
                                        :formatter="formatterItemAlltotal">
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
                                        :formatter="formatterUsername">
                                </el-table-column>
                                <el-table-column label="操作" width="200" fixed="right" align="center">
                                    <template scope="scope">
                                        <el-button size="small">报表</el-button>
                                        <el-button size="small" :plain="true" type="danger">驳回</el-button>
                                        <el-button size="small" :plain="true" type="success">通过</el-button>
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
                                    :page-size="10"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="400">
                            </el-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'home',
        data() {
            return {
                input5: '',
                value1: '',
                value2: '',
                currentPage4: 4,
                tableData3: []
            }
        },
        methods: {
            getTableData(){
                let params = new URLSearchParams();
                params.append('userID', 2);
                params.append('pageNum', 0);
                params.append('pageSize', "10");
                params.append('search', "");
                params.append('type', 0);
                params.append('startTime', "");
                params.append('endTime', "");

                this.$http.post('/ddExpenses/pc_expense/financeExpenseList.do',params, {
                    headers:{
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(data => {
                    let myData = data.data;
                    if (JSON.stringify(myData) !== "{}") {
                    let status = myData.status;
                    switch (status) {
                        case "true":
                            let info = myData.info;
                            if (JSON.stringify(info) !== "{}") {
                                let dataArr = info.data;
                                if (dataArr.length) {
                                    console.log(dataArr)
                                    let arr = [];

                                    for (let i = 0,len = dataArr.length; i < len; i++){
                                        let expenseInfoArr = null;
                                        expenseInfoArr = dataArr[i].expenseInfo[0];
                                        arr.push({
                                            expenseNo: dataArr[i].expenseNo,
                                            expenseUserName: dataArr[i].expenseUserName,
                                            departName: dataArr[i].departName,
                                            accountName: dataArr[i].accountName,
                                            BankAccount: dataArr[i].BankAccount,
                                            accounNumber: dataArr[i].accounNumber,
                                            itemAlltotal: expenseInfoArr.itemAlltotal,
                                            productTypeName:expenseInfoArr.productTypeName,
                                            remark: expenseInfoArr.remark,
                                            expenseTotal:dataArr[i].expenseTotal,
                                            expenseState: dataArr[i].expenseState,
                                            userName: dataArr[i].userList
                                        })
                                    }
                                    this.tableData3 = arr;
                                } else {
                                    this.$message({
                                        showClose: true,
                                        message: '暂无信息',
                                        type: 'warning'
                                    });
                                    return;
                                };
                            } else {
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
                    this.$message({
                            showClose: true,
                            message: '暂无数据',
                            type: 'warning'
                        });
                    return;
                };
                }).catch(err => {
                    this.$message({
                        showClose: true,
                        message: "服务错误",
                        type: 'error'
                    });
                })
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
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
            formatterItemAlltotal(row, column, cellValue){ //格式化单项金额
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
            }
        },
        mounted(){
            this.getTableData();
            this.formatterExpenseState();
            this.formatterItemAlltotal();
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
</style>