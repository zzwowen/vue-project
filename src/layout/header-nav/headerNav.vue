<template lang="html">
  <div class="header-nav" :style="{'height':$store.state.navMenu.headHeight+'px'}">
    <div class="head-nav-menu" id="head-nav-menu" >
      <ul id="head-menu-ul" >
        <li  v-for="item in  mainRouters"    @click="changeRouter(item)"  v-if="routeList.length>0&&!item.hidden" :style="{'width':headMenuWidth+'px'}" :class="['item',{'isMore':item.isMore,'active-header-router':item.path===$store.state.router.headerCurRouter}]" >
            <span>
              <i :class="item.icon"></i>
            </span>
           {{item.name}}
            <span>
            <i v-if="item.isMore" class="fa fa-chevron-down" aria-hidden="true"></i>
            </span>
            <ul v-if="item.isMore" class="drop-ul" >
              <li v-for="drop in overRouters" @click.stop="changeRouter(drop)"  :class="['drop-item',{'active-header-router':drop.path===$store.state.router.headerCurRouter}]" >

                <div class="drop-left">
                  <span>
                    <i :class="drop.icon"></i>
                  </span>
                </div>
                <div class="drop-right">
                  {{drop.name}}
                </div>

              </li>
            </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name:"header-nav",
  components: {

  },
  data() {
      return {
        headMenuWidth:120,
        routeList:this.$router.options.routes,
        isMore:false,
        overRouters:[],
        mainRouters:[],
        isShowOverRoutes:false
      }
  },
  methods: {
    changeRouter(item){
       if(item!==this.$store.state.router.headerCurRouter&&item.path){
         this.$router.push(item.path);
       }else{
         // this.setShowOverRoutes(item);
       }
    },
    updateUI(){
      console.log("1");
        let newData=_.cloneDeep(this.$router.options.routes);
        let cWidth=this.$$lib_$("#head-nav-menu").width();
        let num=cWidth/this.headMenuWidth;
        if(num>this.$router.options.routes.length){
            this.mainRouters=newData;
            this.overRouters=[];
            this.isMore=false;
        }else{
            this.isMore=true;
            let listNum=parseInt(num);
            let overArr=[];
            let mainArr=[];
            for(let i=listNum;i<newData.length;i++){
                overArr.push(newData[i]);
            }
            for(let x=0;x<listNum;x++){
                mainArr.push(newData[x]);
            }
            let obj={
              name:"更多",
              isMore:true
            };
            mainArr.push(obj);
            this.mainRouters=mainArr;
            this.overRouters=overArr;
        }



    }
    ,
    calcWidthIsOver(){
         if(this.headMenuWidth*(this.routeList.length)> this.$$lib_$("#head-nav-menu").width()){
           this.isMore=true;
         }else{
           this.isMore=false;
         }
    },
    setShowOverRoutes(item){
      if(item.isMore)
        this.isShowOverRoutes=true;

    },
    outHide(){
            this.isShowOverRoutes=false;
    }

  },
  created() {

     // this.setCurRouter();
    // this.setMoreFn();
  },
  mounted() {

    let routers=_.cloneDeep(this.$router.options.routes);
    this.mainRouters=routers;
    this.updateUI();
    this.$$lib_$(window).resize(() => {
           this.updateUI();
    });

  },
  computed:{

  }

}
</script>

<style lang="css" scoped>
.header-nav{
  width: 100%;
  /* background-color: orange; */
  border: 1px solid #222;
  

}
#head-menu-ul{
  float: right;
  overflow: hidden;
  border:1px solid #ddd;
  box-sizing: border-box;
  margin-top: 8px;
  border-right: none;
  border-top-left-radius: 10px;
}
.item{
  height: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #fff;
  float: left;
  cursor: pointer;
  z-index: 1;
  border-right: 1px #ddd solid;
  box-sizing: border-box;

}
.drop-item.active-header-router,
.item.active-header-router,
.item:hover,
.drop-item:hover{
  color: #fff;
  background-color: #96b97d;
  transition: all .7s;
}

.head-nav-menu{
  float: right;
  width: 40%;
  position: relative;
}


.drop-item{
  height: 40px;
  width: 200px;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;

}
.drop-ul{
  position: absolute;
  right: 0;
  top: 70px;
  z-index: 1;
  display: none;
  color:#000;
  margin-top: -1px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-bottom: none;
  border-radius: 5px;
  overflow: hidden;

}
.isMore:hover .drop-ul{
  display: block;
}
.drop-left{
  float: left;
  width:40px;
  text-align: center;
}
.drop-right{
  float: left;
}
</style>
