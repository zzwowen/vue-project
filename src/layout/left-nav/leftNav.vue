<template lang="html">
  <div class="content">
    <ul>
      <li   v-if="!item.hidden && $route.matched.length && $route.matched[0].path===item.path" v-for="item in  $router.options.routes">
        <ul v-if="item.children&&item.children.length>0" >
          <li v-for="itemChild in item.children" @click="changeRouter(item.path+'/'+itemChild.path)"   :class="['item',{'active-router':item.path+'/'+itemChild.path===$store.state.router.leftCurRouter}]">
              {{itemChild.name}}
          </li>
        </ul>



      </li>
    </ul>
  </div>
</template>

<script>

export default {
     name: 'leftNav',
     components: {

     },
     data() {
         return {
           cRouter:[]
         }
     },
     methods: {
       changeRouter(item){
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
.content{

  width: 200px;

  background-color: #ddd;
}
.item{
  min-height: 40px;
  line-height: 40px;
  width: 100%;
  background-color: #ddd;
  border-bottom: 1px solid #222;
  cursor: pointer;
  transition: all .3s;
}
.item.active-router,
.item:hover{
  color: #fff;
  background-color: #808080;
  transition: all .7s;
}
</style>
