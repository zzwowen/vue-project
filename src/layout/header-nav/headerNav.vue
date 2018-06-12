<template lang="html">
  <div class="header-nav">
    <ul>
      <li v-for="item in  $router.options.routes" @click="changeRouter(item.path)"  v-if="$router.options.routes.length>0&&!item.hidden" :class="['item',{'active-header-router':item.path===$store.state.router.headerCurRouter}]" >
          {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"header-nav",
  components: {

  },
  data() {
      return {

      }
  },
  methods: {
    changeRouter(item){
       if(item){
         this.$router.push(item);
       }
    },

  },
  created() {
     let that=this;
     // this.setCurRouter();
  },
  mounted() {

  }

}
</script>

<style lang="css" scoped>
.header-nav{
  width: 100%;
  height: 70px;
  background-color: orange;
}
.item{
  height: 100%;
  width: 80px;
  line-height: 70px;
  background-color: #ddd;
  float: left;
  cursor: pointer;
}
.item.active-header-router,
.item:hover{
  color: #fff;
  background-color: #808080;
  transition: all .7s;
}
</style>
