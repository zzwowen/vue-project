<template lang="html">
  <div class="content">
    <header-nav></header-nav>
    <left-nav class="left-nav" :style="{width:'200px',top:'75px',bottom:'0px'}"></left-nav>
    <div class="view">
      <keep-alive>
           <router-view></router-view>
      </keep-alive>
    </div>

  </div>
</template>

<script>
import headerNav from '../header-nav/headerNav';
import leftNav from '../left-nav/leftNav'

export default {
  name:"Body",
  components:{
    headerNav,leftNav
  }
}
</script>

<style lang="css" scoped>
.content{
margin: 0 auto;
}
.left-nav{
  position: absolute;
}
.view{
  position: absolute;

  top: 75px;
  left: 205px;
  right: 5px;
  bottom: 5px;
  background-color: green;
}
</style>
