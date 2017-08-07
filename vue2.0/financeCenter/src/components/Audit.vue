<template>
    <div id="audit">
        <div class="wrap">
            <div class="inWrap">
                <div class="content">
                    <input type="text" v-model="a" value="$route.params.id" :class="{hide:false}"
                    <p class="title">通过</p>
                    <div class="textArea">
                        <textarea id="textArea" maxlength="500" placeholder="请输入说明"></textarea>
                        <span class="tip">500</span>
                    </div>
                    <ul id="uploadWrap" class="imgUpload clearfix">
                        <!-- <li><img src="../image/秋天.jpg" alt="" /></li> -->
                        <li id="addBtn" class="addBtn" title="点击添加图片">
                            <!-- <form enctype="multipart/form-data" id="form1" class="myForm"> -->
                            <input type="file" id="myFile" class="myFile" name="files" accept="image/png,image/jpeg,image/jpg" multiple/>
                            <!-- </form> -->
                            <p class="tipDes">
                                <span>点击添加图片</span>
                                <span>(最高上限5张)</span>
                            </p>
                        </li>
                    </ul>
                    <div class="submitWrap">
                        <input type="button" id="submitBtn" data-reviewtype="1" :class="{submitBtn:true,refusedBtn:false}" value="提交" title="点击提交" />
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

<script>
    export default {
        data() {
            return {
                a:''
            }
        },
        methods: {
            getParams(){
                console.log(this.a)
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
    >.submitBtn{
         color: #fff;
         font-size: 22px;
         width: 284px;
         height: 42px;
         background-color: #2ca2f5;
         cursor: pointer;
     }
    >.refusedBtn{
         background-color: #f55a2c;
     }
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
</style>