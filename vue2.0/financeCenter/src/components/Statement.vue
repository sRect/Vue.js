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
                                    <td id="departName" class="center" colspan="2"></td>
                                    <td>收款人工号</td>
                                    <td id="loginName" class="center" colspan="3"></td>
                                </tr>
                                <tr>
                                    <td>项目</td>
                                    <td id="projectName" class="center" colspan="2"></td>
                                    <td>收款人</td>
                                    <td id="accountName" class="center" colspan="3"></td>
                                </tr>
                                <tr>
                                    <td>申请人</td>
                                    <td id="expenseUserName" class="center" colspan="2"></td>
                                    <td>开户行</td>
                                    <td id="BankAccount" class="center" colspan="3"></td>
                                </tr>
                                <tr>
                                    <td>申请日期</td>
                                    <td id="creatTime" class="center" colspan="2"></td>
                                    <td>收款账户</td>
                                    <td id="accounNumber" class="center" colspan="3"></td>
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

                                 <tr>
                                    <td>交通费</td>
                                    <td>过路费</td>
                                    <td class="right">1200</td>
                                    <td class="center" colspan="4">运动</td>
                                </tr>
                                <tr>
                                    <td>交通费</td>
                                    <td>过路费</td>
                                    <td class="right">1200</td>
                                    <td class="center" colspan="4">运动</td>
                                </tr>

                                <tr>
                                    <td>合计</td>
                                    <td id="expenseTotal" class="center" colspan="2">1600</td>
                                    <td>金额(大写)</td>
                                    <td id="expenseTotalBig" class="center" colspan="3"></td>
                                </tr>
                                <tr>
                                    <td id="usenameInsert">审核过程</td>
                                     <td class="center">张三</td>
                                    <td class="center">李四</td>
                                    <td class="center">王五</td>
                                    <td class="center">张三</td>
                                    <td class="center">李四</td>
                                    <td class="center">王五</td>
                                </tr>
                                <tr>
                                    <td id="updateTimeInsert">日期</td>
                                     <td class="center">2017/10/01</td>
                                    <td class="center">2017/10/01</td>
                                    <td class="center">2017/10/01</td>
                                    <td class="center">2017/10/01</td>
                                    <td class="center">2017/10/01</td>
                                    <td class="center">2017/10/01</td>
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

<script>
    export default {
        name:'statement',
        data() {
            return {}
        },
        methods: {}
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