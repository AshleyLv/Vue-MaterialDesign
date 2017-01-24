<template>
	<div :class="'md-checkbox '+typeColor + inlineClass " @click.prevent="toggle">
		<input type="checkbox" v-el:input class="md-check" :value="value" :name="name" :disabled="disabled" :checked="isChecked" :inline="inline">
		<label>
			<span class="check"></span>
			<span class="box"></span>
			<slot></slot>
		</label>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:{
			value:{
				default:true
			},
			name:{
				type:String,
				default:null
			},
			disabled:{
				type:Boolean
			},
			checked:{
				twoWay:true
			},
			color:{
				type:String,
				default:null
			},
			inline:{
				type:Boolean,
				default:false
			}
			
		},
		computed:{
			isChecked(){
				return this.checked === this.value
			},
			typeColor(){
				return this.color?this.color:(this.isGroup && this.checkboxGroup.color) ? this.checkboxGroup.color:''
			},
			inlineClass(){
				return this.inline  || (this.isGroup && this.checkboxGroup.inline ) ? ' inline-checkbox' : ''
			},
			isGroup(){
				return this.checkboxGroup && this.checkboxGroup._checkboxGroup;
			}
			
		},
		created(){
			if(this.$parent._controlGroup){
				this.checkboxGroup = this.$parent
				this.checkboxGroup._checkboxGroup = true
				if (!(this.checkboxGroup.multiValue instanceof Array)) { 
					parent.value = [] 
				}
			}
		},
		ready(){
			if(this.isGroup && this.checkboxGroup.multiValue.length){
				if(this.checkboxGroup.multiValue.indexOf(this.value)>=0){
					this.$els.input.checked = true
					this.checked = this.value
				} else {
					this.$els.input.checked = false
					this.checked = null
				}
				
			}
		},
		watch:{
			checked(){
				if(this.isGroup){
					const index = this.checkboxGroup.multiValue.indexOf(this.value)
					if(this.checked && index==-1){
						this.checkboxGroup.multiValue.push(this.value)
					}
					if(this.checked && index!=-1){
						this.checkboxGroup.multiValue.splice(index,index)
					}
				}
			}
		},
		methods:{
			invoke:function(){
				if(this.checkboxGroup.multiValue.indexOf(this.value)>=0){
					this.$els.input.checked = true
					this.checked = this.value
				} else {
					this.$els.input.checked = false
					this.checked = null
				}
				
			},
			toggle:function(){
				if(!this.disabled){
					this.checked = this.checked ? null : this.value

				}
				return false
			}
		}
	}
</script>
<style lang="less">
	@import "./utils/common.less";
	.md-checkbox{
		position: relative;
		margin: 5px 3px;
		&.inline-checkbox{
			display: inline-block;
		}
		input[type='checkbox']{
			visibility: hidden;
			position: absolute;
			&:checked ~ label > .box {
				opacity: 0;
				-webkit-transform: scale(0) rotate(-180deg);
				-moz-transform: scale(0) rotate(-180deg);
				transform: scale(0) rotate(-180deg); 
				&:after{
					transform: scale(2);
				}
			}
			&:checked ~ label > .check {
				opacity: 1;
				-webkit-transform: scale(1) rotate(45deg);
				-moz-transform: scale(1) rotate(45deg);
				transform: scale(1) rotate(45deg); 
			}
			&:disabled ~ label{
				cursor: not-allowed;
				opacity: 0.7 ;
			}
		}
		label {
			cursor: pointer;
			padding-left: 30px; 
			color:#666;
			> span{
				display: block;
				position: absolute;
				left: 0;
				-webkit-transition-duration: 0.3s;
				-moz-transition-duration: 0.3s;
				transition-duration: 0.3s; 
			}
			> .box{
				width: 16px;
				height: 16px;
				border: 2px solid #666;
				z-index: 1;
				-webkit-transition-delay: 0.2s;
				-moz-transition-delay: 0.2s;
				transition-delay: 0.2s; 
				&:after{
					display: block;
					background-color: #eee;
					content: ' ';
					width: 40px;
					height: 40px;
					opacity: .5;
					border-radius: 50%;
					transform-origin: center;
					transform: scale(0);
					top: -12px;
					left: -12px;
					position: absolute;
					transition-duration: 0.3s; 
				}
			}
			> .check{
				width: 8px;
				height: 16px;
				top: -4px;
				left: 6px;
				border: 2px solid #36c6d3;
				border-top: none;
				border-left: none;
				z-index: 2;
				opacity: 0;
				-webkit-transform: rotate(180deg);
				-moz-transform: rotate(180deg);
				transform: rotate(180deg);
				-webkit-transition-delay: 0.3s;
				-moz-transition-delay: 0.3s;
				transition-delay: 0.3s;
			}
		}
		&.primary label{
			color:@primary-btn-color;
			>.box,>.check{
				border-color:@primary-btn-color;
			}
		}
		&.default label{
			color:#666;
			>.box{
				border-color:#666;;
			}
			>.check{
				border-color:#36c6d3;
			}
		}
		&.info label{
			color:@info-btn-color;
			>.box,>.check{
				border-color:@info-btn-color;
			}
		}
		&.success label{
			color:@success-btn-color;
			>.box,>.check{
				border-color:@success-btn-color;
			}
		}
		&.error label{
			color:@error-btn-color;
			>.box,>.check{
				border-color:@error-btn-color;
			}
		}
		&.warning label{
			color:@warning-btn-color;
			>.box,>.check{
				border-color:@warning-btn-color;
			}
		}
		&.teal label{
			color:@teal-btn-color;
			>.box,>.check{
				border-color:@teal-btn-color;
			}
		}
	}
	
</style>