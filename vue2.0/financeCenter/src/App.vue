<template>
    <div id="app">
        <HeaderVue></HeaderVue>

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
                                        width="110"
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
                                        align="center">
                                </el-table-column>
                                <el-table-column
                                        prop="bankAccount"
                                        label="开户行"
                                        width="200"
                                        align="center">
                                </el-table-column>
                                <el-table-column
                                        prop="accounNumber"
                                        label="银行账号"
                                        width="100"
                                        align="center">
                                </el-table-column>
                                <el-table-column
                                        prop="itemAlltotal"
                                        label="报销金额"
                                        width="100"
                                        align="center">
                                </el-table-column>
                                <el-table-column
                                        prop="productTypeName"
                                        label="报销类型"
                                        width="100"
                                        align="center">
                                </el-table-column>
                                <el-table-column
                                        prop="remark"
                                        label="费用明细"
                                        width="100"
                                        align="center">
                                </el-table-column>
                                <el-table-column
                                        prop="expenseTotal"
                                        label="总报销金额"
                                        width="130"
                                        align="center">
                                </el-table-column>
                                <el-table-column
                                        prop="expenseState"
                                        label="审批状态"
                                        width="100"
                                        align="center">
                                </el-table-column>
                                <el-table-column
                                        prop="userName"
                                        label="历史审批人"
                                        width="130"
                                        align="center">
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
    import HeaderVue from './components/HeaderVue.vue'
    export default {
        name: 'app',
        components: {
            HeaderVue
        },
        data() {
            return {
                input5: '',
                value1: '',
                value2: '',
                currentPage4: 4,
                tableData3: [{
                    expenseNo: '21939921',
                    expenseUserName: '王小虎',
                    departName: '开发部',
                    accountName: '张三',
                    bankAccount: '中国银行浦东银行支行浦东银行支行',
                    accounNumber: '2353543332243',
                    itemAlltotal: '123244',
                    productTypeName: '住宿费',
                    remark: '4月份渠道踩盘',
                    expenseTotal: '78967867869',
                    expenseState: '完成',
                    userName: '周一涵'
                },{
                    expenseNo: '21939921',
                    expenseUserName: '王小虎',
                    departName: '开发部',
                    accountName: '张三',
                    bankAccount: '中国银行浦东银行支行浦东银行支行',
                    accounNumber: '2353543332243',
                    itemAlltotal: '123244',
                    productTypeName: '住宿费',
                    remark: '4月份渠道踩盘',
                    expenseTotal: '78967867869',
                    expenseState: '完成',
                    userName: '周一涵'
                },{
                    expenseNo: '21939921',
                    expenseUserName: '王小虎',
                    departName: '开发部',
                    accountName: '张三',
                    bankAccount: '中国银行浦东银行支行浦东银行支行',
                    accounNumber: '2353543332243',
                    itemAlltotal: '123244',
                    productTypeName: '住宿费',
                    remark: '4月份渠道踩盘',
                    expenseTotal: '78967867869',
                    expenseState: '完成',
                    userName: '周一涵'
                }]
            }
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style lang="less">
    @import "./assets/less/common.less";
    @import "./assets/less/public.less";

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
