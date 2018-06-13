<template lang="html">
  <div class="left-menu-collapse">
    <div :class="['left-menu-collaps-title',{'open':show}]" @click.stop="setShow">
      <span>{{title}}</span>
      <span :class="['con-collapse-title-icon',{'open':show}]">	<i class="el-icon-arrow-down"></i></span>
    </div>
    <div class="left-menu-collaps-content" id="left-menu-collaps-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
			title:{
				type:String,
				default:''
			},
      isShow:{
        type:Boolean,
        default:false
      }
	},
  data(){
    return{
      show:this.isShow
    }
  },
  methods:{
    setShow(e){

      if(e==='af'){
        if(!this.show===true){
            this.$$lib_$(this.$el).parent().find(".left-menu-collaps-content").animate({ height:'toggle'});
        }
      }else{
        this.$$lib_$(this.$el).parent().find(".left-menu-collaps-content").animate({ height:'toggle'});
        this.show=!this.show;
      }
    }
  },
  created(){
    this.$nextTick(()=>{
      this.setShow('af');
    })

  }

}
</script>

<style lang="css">
.left-meun-collapse{
  position: relative;
  width: 100%;
  font-size: 14px;
}
.left-menu-collaps-title{
    width: 100%;
		height: 40px;
		line-height: 40px;
		/* border: 1px solid #d9dbdb; */
		border-radius: 3px;
		background-color: #fff;
		cursor: pointer;
    box-sizing:border-box;


}
.left-menu-collaps-title.open{
  border-bottom: 1px solid #ddd;
}
.left-menu-collaps-title:hover{
  color: #fff;
  background-color: #409eff;
}
.con-collapse-title-icon {
		float: right;
		right: 5%;
    position: absolute;
    transition: all .3s;
		transform: rotate(0deg);
	}
	.con-collapse-title-icon.open {
		transform: rotate(180deg);
	}

</style>
