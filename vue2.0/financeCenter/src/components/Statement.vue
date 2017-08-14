<template>
    <div id="statement">
        <div class="wrap">
            <div class="inWrap">
                <div class="inWrapTop clearfix">
                    <div class="crumbs fl clearfix">
                        <span>轩天实业 > 财务中心 > 报销</span>
                    </div>
                    <div class="btnWrap fr clearfix">
                        <input id="printBtn" type="button" class="printBtn" value="打印" title="打印表格" />
                        <!-- <input type="button" class="downloadBtn" value="下载" title="下载表格" /> -->
                        <a id="downloadBtn" class="downloadBtn fr" download="付款申请单.xls" href="#" onclick="return ExcellentExport.excel(this, 'datatable', 'Sheet Name Here');" title="下载表格">下载</a>
                    </div>
                </div>
                <!-- 主体结构开始 -->
                <div class="inWrapBottom">
                    <div class="bgWrap">
                        <div id="printContent" class="tableWrap">
                            <!--<style>-->
                                <!--.center {-->
                                    <!--text-align: center;-->
                                <!--}-->
                                <!--.right {-->
                                    <!--text-align: right;-->
                                <!--}-->
                                <!--table{-->
                                    <!--width: 100%;-->
                                    <!--border: 1px solid #020202;-->
                                    <!--border-collapse: collapse;-->
                                     <!-- -webkit-box-sizing: border-box;-->
                                     <!-- -moz-box-sizing: border-box;-->
                                     <!-- -ms-box-sizing: border-box;-->
                                     <!-- -o-box-sizing: border-box;-->
                                    <!--box-sizing: border-box;-->
                                <!--}-->
                                <!--tr{-->
                                    <!--height: 46px;-->
                                <!--}-->
                                <!--td{-->
                                    <!--font-size: 14px;-->
                                    <!--border: 1px solid #020202;-->
                                    <!--padding: 5px;-->
                                    <!--min-width: 70px;-->
                                <!--}-->
                                <!--.checkbox{-->
                                    <!--position: relative;-->
                                    <!--top: 2px;-->
                                <!--}-->
                            <!--</style>-->
                            <table id="datatable" class="table" cellspacing="0" border="1px solid #020202">
                                <tbody>
                                <tr>
                                    <td class="center" colspan="7">付款申请单</td>
                                </tr>
                                <tr>
                                    <td>部门</td>
                                    <td v-text="departName" id="departName" class="center" colspan="2"></td>
                                    <td>收款人工号</td>
                                    <td v-text="loginName" id="loginName" class="center" colspan="3"></td>
                                </tr>
                                <tr>
                                    <td>项目</td>
                                    <td v-text="projectName" id="projectName" class="center" colspan="2"></td>
                                    <td>收款人</td>
                                    <td v-text="accountName" id="accountName" class="center" colspan="3"></td>
                                </tr>
                                <tr>
                                    <td>申请人</td>
                                    <td v-text="expenseUserName" id="expenseUserName" class="center" colspan="2"></td>
                                    <td>开户行</td>
                                    <td v-text="bankAccount" id="BankAccount" class="center" colspan="3"></td>
                                </tr>
                                <tr>
                                    <td>申请日期</td>
                                    <td v-text="creatTime" id="creatTime" class="center" colspan="2"></td>
                                    <td>收款账户</td>
                                    <td v-text="accounNumber" id="accounNumber" class="center" colspan="3"></td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td>付款方式</td>
                                    <td class="center">
                                        <span>报销</span>
                                        <input class="checkbox" type="checkbox" disabled="disabled" />
                                    </td>
                                    <td class="center">
                                        <span>备用金</span>
                                        <input class="checkbox" type="checkbox" disabled="disabled" />
                                    </td>
                                    <td class="center">
                                        <span>借款</span>
                                        <input class="checkbox" type="checkbox" disabled="disabled" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="center" colspan="2">付款项目</td>
                                    <td class="center">金额</td>
                                    <td class="center" colspan="4">说明</td>
                                </tr>
                                <tr id="expenseInfoAfter">
                                    <td>一级科目</td>
                                    <td>二级科目</td>
                                    <td colspan="5"></td>
                                </tr>

                                <tr v-for="(val,index) in expenseInfo" :key="index">
                                    <td v-text="val.productTypeParent"></td>
                                    <td v-text="val.productTypeName"></td>
                                    <td v-text="val.itemAlltotal" class="right"></td>
                                    <td v-text="val.remark" class="center" colspan="4"></td>
                                </tr>

                                <tr>
                                    <td>合计</td>
                                    <td v-text="expenseTotal" id="expenseTotal" class="center" colspan="2"></td>
                                    <td>金额(大写)</td>
                                    <td v-text="expenseTotalBig" id="expenseTotalBig" class="center" colspan="3"></td>
                                </tr>
                                <tr id="userList">
                                    <td class="center" colspan="7">审核过程</td>
                                </tr>
                                <tr v-for="(val,index) in userList" :key="index">
                                    <td>
                                        <p>{{val.userName}}</p>
                                        <p>{{val.updateTime}}</p>
                                    </td>
                                    <td colspan="6">{{val.remark}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- 主体结构结束 -->
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name:'statement',
        data() {
            return {
                id:'',
                bankAccount:'',
                loginName:'',
                projectName:'' || '--',
                accountName:'',
                expenseUserName:'',
                creatTime:'',
                accounNumber:'',
                expenseTotal:'',
                expenseTotalBig:'',
                departName:'',
                userList:null, //历史审批人集合
                expenseInfo:null //报销集合
            }
        },
        methods: {
            getParams(){
                this.id = this.$route.query.expenseID;
            },
            getData(){
                const self = this;
                let params = new URLSearchParams();
                params.append('id', parseInt(this.id));

                this.$http({
                    url: '/ddExpenses/pc_expense/expenseDetails.do',
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    params,
                }).then(data => {
                    console.log(data)
                    let myData = data.data;
                    if (JSON.stringify(myData) !== "{}") {
                        let status = myData.status;
                        switch (status) {
                            case "true":
                                let info = myData.info;
                                if (JSON.stringify(info) !== "{}") {
                                    let dataArr = info.data;
                                    console.log(dataArr);

                                    self.bankAccount = dataArr.BankAccount;
                                    self.loginName = dataArr.loginName;
                                    self.accountName = dataArr.accountName;
                                    self.expenseUserName = dataArr.expenseUserName;
                                    self.departName = dataArr.departName;
                                    self.creatTime = dataArr.creatTime;
                                    self.accounNumber = dataArr.accounNumber;
                                    self.expenseTotal = dataArr.expenseTotal;
                                    self.expenseTotalBig = dataArr.expenseTotalBig;
                                    self.expenseInfo = dataArr.expenseInfo;
                                    self.userList = dataArr.userList;
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
                    console.log(err)
                    this.$message({
                        showClose: true,
                        message: "服务错误",
                        type: 'error'
                    });
                })
            }
        },
        beforeMount(){
            this.getParams();
        },
        mounted(){
            this.getData();
        }
    }
</script>

<style scoped  lang="less" rel="stylesheet/less">
    @import '../assets/less/public.less';

    .center{
        text-align: center;
    }
    .right{
        text-align: right;
    }
    .wrap{
        padding-top: 14px;
        >.inWrap{
            >.inWrapTop{
                 width: 1000px;
                 margin: 0 auto;
            >.crumbs{
                 font-size: 14px;
                 line-height: 2;
             }
            >.btnWrap{
            >.downloadBtn,>.printBtn{
                   font-size: 16px;
                   width: 86px;
                   height: 40px;
                   border: 1px solid @bdColor;
                    background-color: #fff;
                   -webkit-border-radius: 4px;
                   -moz-border-radius: 4px;
                   -ms-border-radius: 4px;
                   -o-border-radius: 4px;
                   border-radius: 4px;
                   cursor: pointer;
               }
            >.downloadBtn{
                 color: #fff;
                 text-decoration: none;
                 text-align: center;
                 line-height: 40px;
                 display: block;
                 background-color: #ed9127;
                 border: 0;
                 margin-left: 10px;
             }
            }
            }
            >.inWrapBottom{
                 width: 100%;
                 margin-top: 14px;
                 background-color: #fff;
            >.bgWrap{
                 width: 1000px;
                 margin: 0 auto;
                 padding: 50px 0;
            >.tableWrap{
                 width: 100%;
            >.table{
                 width: 100%;
                 border: 1px solid #020202;
                border-collapse:collapse;
            >tbody{
            >tr{
                 height: 46px;
            >td{
                 font-size: 14px;
                 /*border: 1px solid #020202;*/
                 padding: 5px;
                 min-width: 70px;
            >.checkbox{
                 position: relative;
                 top: 2px;
             }
             >p{
                margin:5px 0;
              }
            }
            }
            }
            }
            }
            }
            }
        }
    }
</style>