<template lang="html">
  <div class="content">
    <ul>
      <li   v-if="!item.hidden && $route.matched.length && $route.matched[0].path===item.path" v-for="item in  $router.options.routes">
        <ul v-if="item.children&&item.children.length>0" >
          <li v-for="(itemChild,index) in item.children" @click="changeRouter(item.path+'/'+itemChild.path,itemChild)"   :class="['item',{'active-router':item.path+'/'+itemChild.path===$store.state.router.leftCurRouter&&!itemChild.children,'single-route':!itemChild.children}]">
              <left-menu-collapse :isShow="index===0?true:false" :title="itemChild.name" v-if="itemChild.children&&itemChild.children.length>0">
                <ul v-if="itemChild.children&&itemChild.children.length>0">
                  <li v-for="twoLevelMenu in itemChild.children" @click.stop="changeTwoRouter(item.path+'/'+itemChild.path+'/'+twoLevelMenu.path)" :class="['seconditem',{'twolevel-active-router':item.path+'/'+itemChild.path+'/'+twoLevelMenu.path===$store.state.router.leftCurRouter}]" >
                  <div class="itemborder animated fadeIn"></div>
                   {{twoLevelMenu.name}}
                  </li>
                </ul>
              </left-menu-collapse>
              <span v-if="!itemChild.children">
                {{itemChild.name}}
              </span>
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
          }else if(route.children&&route.children.length>0){

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
       }
     },
     created() {
      this.setCurRouter();
     },
     mounted() {

     },
     watch:{
       '$route' (to, from ,next) {
            this.setCurRouter(to);
          // 对路由变化作出响应...
        }
     }
 }
</script>

<style lang="css" scoped>
/* @import url("@/assets/style/animate.css"); */
.content{

  width: 200px;
  border: 1px solid #ddd;
}
.item,.seconditem{
  min-height: 40px;
  line-height: 40px;
  width: 100%;
  background-color: #fff;
  /* border-bottom: 1px solid #222; */
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
}


</style>
