<template lang="html">
  <div class="content">
    <header-nav></header-nav>
    <div class="view">
      <keep-alive>
           <router-view></router-view>
      </keep-alive>
    </div>

  </div>
</template>

<script>
import headerNav from '../header-nav/headerNav';
export default {
}
</script>

<style lang="css" scoped>
</style>
