<template lang="html">
  <div class="content" :style="{width:contentWidth}">
    <div class="top">
      <div :class="['top-icon',{'isFold':isFold}]" @click="toggleShow">
        <i class="fa fa-bars" ></i>
      </div>
    </div>
    <ul :class="['menu-content',{'menu-content-fold':isFold}]">
      <li   v-if="!item.hidden && $route.matched.length && $route.matched[0].path===item.path" v-for="item in  $router.options.routes">
        <ul v-if="item.children&&item.children.length>0" >
          <li v-for="(oneLevel,index) in item.children" @click="changeRouter(item.path+'/'+oneLevel.path,oneLevel)"   :class="['onelevel-menu',{'onelevel-active-router':item.path+'/'+oneLevel.path===$store.state.router.leftCurRouter&&!oneLevel.children,'onelevel-single-route':!oneLevel.children}]">
              <left-menu-collapse :isFold="isFold" :icon="oneLevel.icon" :isShow="$store.state.router.leftCurRouter.includes(item.path+'/'+oneLevel.path)?true:false" :title="oneLevel.name" v-if="oneLevel.children&&oneLevel.children.length>0">
                <ul v-if="oneLevel.children&&oneLevel.children.length>0">
                  <li v-for="twoLevel in oneLevel.children" @click.stop="changeTwoRouter(item.path+'/'+oneLevel.path+'/'+twoLevel.path)" :class="['twolevel-menu',{'twolevel-active-router':item.path+'/'+oneLevel.path+'/'+twoLevel.path===$store.state.router.leftCurRouter}]" >
                      <el-tooltip  :disabled=!isFold class="left-menu-tooltip" effect="dark" :content="twoLevel.name" placement="left-start">
                        <div class="twolevel-menu-icon">
                          <i :class="twoLevel.icon"></i>
                        </div>
                      </el-tooltip>
                    <div class="twolevel-menu-text">
                      {{twoLevel.name}}
                    </div>
                  </li>
                </ul>
              </left-menu-collapse>
              <div v-if="!oneLevel.children" class="onelevel-menu-label-content">
                <el-tooltip :disabled=!isFold class="left-menu-tooltip" effect="dark" :content="oneLevel.name" placement="left-start">
                <div class="onelevel-menu-icon">
                  <i :class="oneLevel.icon"></i>
                </div>
                </el-tooltip>
                <div class="onelevel-menu-text">
                  {{oneLevel.name}}
                </div>

              </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>

</template>

<script>
import leftMenuCollapse from './leftMenuCollapse';
export default {
     name: 'leftNav',
     components: {
      'left-menu-collapse':leftMenuCollapse
     },
     data() {
         return {
           cRouter:[]

         }
     },
     methods: {
       changeRouter(item,route){
          if(item&&!route.children){
            this.$router.push(item);
          }
       },
       changeTwoRouter(item){
         if(item){
           this.$router.push(item);
         }
       },
       setCurRouter(rItem){
          let route = rItem || this.$route;
          let rootPath = route.matched[0].path,
              fullPath = route.path;
          this.$store.dispatch('set_cur_route', {
              rootPath,
              fullPath
          });
       },
       toggleShow(){
          if(!this.isFold){
            this.$store.dispatch('set_leftmenu_close');
          }else{
            this.$store.dispatch('set_leftmenu_open');
          }
       }
     },
     created() {
      this.setCurRouter();
     },
     mounted() {

     },
     computed:{
       contentWidth(){
         return  this.$store.state.navMenu.leftMenuWidth+'px'

       },
       isFold(val){
           return !this.$store.state.navMenu.leftMenu_flag
       }
     },
     watch:{
       '$route' (to, from ,next) {
            this.setCurRouter(to);
          // 对路由变化作出响应...
        },

     }
 }
</script>

<style lang="less" scoped>
@import url("./assets/style/style.less");
/*
.content{

  width: 200px;
  border: 1px solid #ddd;
}
.top{
  height: 40px;
  width: 100%;
  background-color: #808080;
  position: relative;
}
.item,.seconditem{
  min-height: 40px;
  line-height: 40px;
  width: 100%;
  background-color: #fff;
  cursor: pointer;
  transition: all .3s;
  text-align:center;
  box-sizing: border-box;
  transition: all .3s;
}
.item{
  border-bottom: 1px solid #ddd;
  border-top: none;
  font-weight: 500;
}

.item.single-route:hover
{
  color: #fff;
  background-color: #409eff;
}
.seconditem:hover{
  color: #fff;
  background-color: #409eff;
}
.item.active-router,
.item.active-router:hover{
color: green;
background-color: #ddd;
}
.seconditem:hover .item{
  color: #000;
}
.seconditem{
  color: #000;
  font-weight: 300;
  position: relative;
}
.seconditem.twolevel-active-router{
  color: green;
  background-color: #ddd;
    font-weight: 400;
}
.content .seconditem:last-child{
  border-bottom: none;
}
.itemborder{
  width: 5px;
  position:absolute;
  background-color: black;
  height: 100%;
  animation: bounceOutLeft 1s;
}

.seconditem.twolevel-active-router .itemborder{
  background-color:black;
  width:5px;
  animation: rubberBand 1s;
} */


</style>
