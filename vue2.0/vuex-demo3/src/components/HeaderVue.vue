<template>
    <div id="header">
        <mt-navbar v-model="selected">                       
            <mt-tab-item id="1">
                <router-link to="/content">主页</router-link> 
            </mt-tab-item>
            <mt-tab-item id="2">
                <router-link to="/news">新闻</router-link>
            </mt-tab-item>
            <mt-tab-item id="3">
                <router-link to="/about">关于</router-link>
            </mt-tab-item>         
        </mt-navbar>

        <!--<ul>
            <router-link to="/content" tag="li">主页</router-link>
            <router-link to="/news" tag="li">新闻</router-link>
            <router-link to="/about" tag="li">关于</router-link>
        </ul>-->
    </div>
</template>

<script>
export default {
  name:'header',
  data(){
      return{
         selected:'1' 
      }
  }
}
</script>

