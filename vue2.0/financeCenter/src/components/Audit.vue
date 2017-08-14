<template>
    <div id="audit">
        <div class="wrap">
            <div class="inWrap">
                <div class="content">

                    <p class="title">通过</p>
                    <div class="textArea">
                        <textarea id="textArea" v-model="textarea" maxlength="500" placeholder="请输入说明"></textarea>
                        <span class="tip">500</span>
                    </div>
                    <ul id="uploadWrap" class="imgUpload clearfix">
                        <el-upload
                                action="http://www.ehaofangwang.com/publicshow/qiniuUtil/fileToQiniu"

                                :multiple="true"
                                :auto-upload="false"
                                list-type="picture-card"
                                accept="image/png,image/jpeg,image/jpg"
                                :on-change="imgChange"
                                :before-upload="beforeAvatarUpload"
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog v-model="dialogVisible" size="tiny">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                        <!-- <li><img src="../image/秋天.jpg" alt="" /></li> -->
                        <!--<li id="addBtn" class="addBtn" title="点击添加图片">-->
                            <!--&lt;!&ndash; <form enctype="multipart/form-data" id="form1" class="myForm"> &ndash;&gt;-->
                            <!--<input type="file" id="myFile" class="myFile" name="files" accept="image/png,image/jpeg,image/jpg" multiple/>-->
                            <!--&lt;!&ndash; </form> &ndash;&gt;-->
                            <!--<p class="tipDes">-->
                                <!--<span>点击添加图片</span>-->
                                <!--<span>(最高上限5张)</span>-->
                            <!--</p>-->
                        <!--</li>-->
                    </ul>
                    <div class="submitWrap">
                        <el-button
                            :type="type"
                            size="large"
                            :class="{subBtn:true}"
                            :disabled="istrue"
                            title="点击提交"
                            @click="submitFn">
                            提交
                        </el-button>
                        <!--<input type="button" disabled="istrue" @click="submitFn" id="submitBtn" data-reviewtype="1" :class="{submitBtn:submit,refusedBtn:refused}" value="提交" title="点击提交" />-->
                    </div>
                </div>
                <div id="dialog" class="dialog">
                    <div class="progress">
                        <progress id="progress" value="0" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name:"audit",
        data() {
            return {
                textarea:'',
                controlid: this.$route.query.controlid,
                flagid: this.$route.query.flagid,
                dialogImageUrl: '',
                dialogVisible: false,
                istrue: true,
                type: "primary"
            }
        },
        methods: {
            getParams(){
                switch(Number.parseInt(this.controlid)){
                    case 2:
                        this.istrue = false;
                        break;
                    default:
                        this.istrue = true;
                        break;
                }

                switch(Number.parseInt(this.flagid)) {
                    case 1:
                        this.type = "primary";
                        break;
                    case 2:
                        this.type = "danger";
                        break;
                    default:
                        break;
                }
            },
            imgChange(file, fileList){
//                let len = fileList.length;
//                if(len > 5){
//                    this.$message({
//                        showClose: true,
//                        message: "单次图片最多上传5张",
//                        type: 'error'
//                    });
//                    return false;
//                }
            },
            beforeAvatarUpload(file) {
                console.log(file)
//                const isJPG = file.type === 'image/jpeg';
                const isLt5M = file.size / 1024 / 1024 < 5;

                let type = file.type;
                if(type !== "image/jpg" && type !== "image/jpeg" && type !== "image/png"){
                    this.$message({
                        showClose: true,
                        message: "请选择扩展名.jpg/.jpeg/.png图片",
                        type: 'error'
                    });
                }

                if (!isLt5M) {
                    this.$message.error('上传头像图片大小不能超过 5MB!');
                }
                return type && isLt5M;
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            submitFn(){
                if(this.textarea == ""){
                    this.$message({
                        showClose: true,
                        message: "请完善审核说明",
                        type: 'error'
                    });
                    return;
                }

                let params = new URLSearchParams();
                params.append('expenseID', this.$route.query.expenseID);
                params.append('expenseReviewID', this.$route.query.expenseReviewID);
                params.append('reviewType', this.a);
                params.append('expenselog', this.textarea);
                params.append('expenseImageName', '');
                params.append('expenseImageUrl', '');

                this.$http.post('/ddExpenses/review/updataExpenseReview.do',params,{
                    headers:{
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(data => {
                    let myData = data.data;
                    if (JSON.stringify(myData) !== "{}") {
                        let status = myData.status;
                        switch (status) {
                            case 1:
                                this.$message({
                                    showClose: true,
                                    message: '审核成功',
                                    type: 'success'
                                });
//                                setTimeout(function(){
//                                    this.$router.push({path:'/home'})
//                                }.bind(this),1000)
                                setTimeout(() => {
                                    this.$router.push({path:'/home'});
                                },1000)
                                break;
                            case 0:
                                this.$message({
                                    showClose: true,
                                    message: '审核失败',
                                    type: 'warning'
                                });
                                break;
                            default:
                                break;
                        }
                    }else{
                        this.$message({
                            showClose: true,
                            message: '暂无数据',
                            type: 'warning'
                        });
                    }
                }).catch(err => {
                    console.log(err)
                    this.$message({
                        showClose: true,
                        message: '服务错误',
                         type: 'error'
                    });
                })
            }
        },
        mounted(){
            this.getParams()
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/less/public.less";
    .wrap{
        padding-top: 28px;
        position: relative;
    >.inWrap{
         background-color: #fff;
    >.content{
         width: 1000px;
         margin: 0 auto;
         padding: 20px 20px 100px 20px;
     .boxSizing();
    >.title{
         font-size: 16px;
         margin-bottom: 20px;
     }
    >.textArea{
         width: 100%;
         height: 290px;
         background-color: #f8f8f8;
         position: relative;
    >textarea{
         font-size: 16px;
         padding: 20px;
         width: 100%;
         height: 100%;
         border: 1px solid @bdColor;
     .boxSizing();
         background-color: #f8f8f8;
     }
    >textarea::-webkit-input-placeholder{
         font-size: 14px;
         color: #bababa;
     }
    >.tip{
         font-size: 14px;
         color: #bababa;
         position: absolute;
         right: 20px;
         bottom: 20px;
     }
    }
    >.imgUpload{
         padding-top: 18px;
    >li{
         width: 124px;
         height: 124px;
         border: 1px solid @bdColor;
         float: left;
    >img{
         width: 100%;
         height: 100%;
         -webkit-background-size: cover;
         -moz-background-size: cover;
         -ms-background-size: cover;
         -o-background-size: cover;
         background-size: cover;
     }
    }
    >li+li{
         margin-left: 10px;
     }
    >li.addBtn{
         background-color: #f8f8f8;
         position: relative;
         cursor: pointer;
    >.tipDes{
         font-size: 14px;
         color: @bdColor;
         text-align: center;
         width: 100%;
         position: absolute;
         left: 0;
         bottom: -50px;
    >span{
         display: block;
     }
    }
    >.myFile{
         display: none;
     }

    }
    >li.addBtn::after,>li.addBtn::before{
           content: '';
           display: block;
           width: 58px;
           height: 4px;
           -webkit-border-radius: 4px;
           -moz-border-radius: 4px;
           -ms-border-radius: 4px;
           -o-border-radius: 4px;
           border-radius: 4px;
           background-color: @bdColor;
           position: absolute;
           margin: auto;
           top: 0;
           left: 0;
           right: 0;
           bottom: 0;
       }
    >li.addBtn::before{
         width: 4px;
         height: 58px;
     }
    }
    >.submitWrap{
         width: 100%;
         margin-top: 100px;
         text-align: center;
    /*>.submitBtn{
         color: #fff;
         font-size: 22px;
         width: 284px;
         height: 42px;
         background-color: #2ca2f5;
         cursor: pointer;
     }
    >.refusedBtn{
         background-color: #f55a2c;
     }*/
    }
    }
    >.dialog{
         width: 100%;
         background-color: rgba(0,0,0,.5);
         position: absolute;
         top: 0;
         left: 0;
         z-index: 1000;
         text-align: center;
         display: none;
    >.progress{
     // width: 566px;
         height: 30px;
         position: absolute;
         margin: auto;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
    >progress{
         width: 460px;
         height: 100%;
     }
    }
    }
    >.dialogShow{
         display: block;
     }
    }
    }
    .subBtn{
        width: 270px;
    }
</style>