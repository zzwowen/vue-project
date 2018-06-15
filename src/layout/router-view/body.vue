<template lang="html">
  <div class="content">
    <header-nav></header-nav>
    <left-nav class="left-nav" :style="{top:$store.state.navMenu.headHeight+topMargin+'px',bottom:'0px'}"></left-nav>
    <div class="view" :style="{'left':$store.state.navMenu.leftMenuWidth+'px',top:$store.state.navMenu.headHeight+topMargin+'px'}">
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
  },
  data(){
    return {
      topMargin:5
    }
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
  left: 205px;
  right: 0px;
  bottom: 0px;
  
  transition: all .3s;
}
</style>
