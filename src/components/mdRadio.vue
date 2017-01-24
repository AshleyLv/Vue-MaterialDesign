<template>
	<div :class="'md-radio '+typeColor + inlineClass " @click.prevent="select">
		<input type="radio" v-el:input class="md-check" :value="value" :name="name" :disabled="disabled" :checked="isSelected" :inline="inline">
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
			isSelected(){
				return this.checked === this.value
			},
			typeColor(){
				return this.color?this.color:(this.isGroup && this.radioGroup.color) ? this.radioGroup.color:''
			},
			inlineClass(){
				return this.inline  || (this.isGroup && this.radioGroup.inline ) ? ' inline-checkbox' : ''
			},
			isGroup(){
				return this.radioGroup && this.radioGroup._radioGroup;
			}
			
		},
		created(){
			if(this.$parent._controlGroup){
				this.radioGroup = this.$parent
				this.radioGroup._radioGroup = true
			}
		},
		ready(){
			if(this.isGroup){
				if(this.radioGroup.singleValue==this.value){
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
					if(this.$els.input.checked && this.radioGroup.singleValue!=this.value){
						this.radioGroup.singleValue = this.value
					}
				}
			}
		},
		methods:{
			invoke:function(){
				if(this.radioGroup.value==this.value){
					this.$els.input.checked = true
					this.checked = this.value
				} else {
					this.$els.input.checked = false
					this.checked = null
				}
				
			},
			select:function(){
				if(!this.disabled){
					this.checked = this.value
				}
				
			}
		}
	}
</script>

<style lang="less">
	@import "./utils/common.less";
	.md-radio{
		position: relative;
		margin: 5px 3px;
		.inline-checkbox{
			display: inline-block;
		}
		input[type='radio']{
			visibility: hidden;
			position: absolute;
			&:checked ~ label{
				> .check {
					opacity: 1;
				}
				> .box:after{
					animation: .3s ripple linear;
				}
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
				width: 14px;
				height: 14px;
				border: 2px solid #666;
				border-radius: 50%;
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


				}
			}
			> .check{
				width: 10px;
				height: 10px;
				top: 4px;
				left: 4px;
				background-color: #36c6d3;
				border-radius: 50%;
				z-index: 2;
				opacity: 0;
			}
		}
		&.primary label{
			color:@primary-btn-color;
			>.box{

			}
			>.check{
				background-color: @primary-btn-color;
			}
		}
		&.default label{
			color:#666;
			>.box{
				background-color:#666;;
			}
			>.check{
				background-color:#36c6d3;
			}
		}
		&.info label{
			color:@info-btn-color;
			>.box{
				border-color: @info-btn-color;
			}
			>.check{
				background-color:@info-btn-color;
			}
		}
		&.success label{
			color:@success-btn-color;
			>.box{
				border-color: @success-btn-color;
			}
			>.check{
				background-color:@success-btn-color;
			}
		}
		&.error label{
			color:@error-btn-color;
			>.box{
				border-color:@error-btn-color;
			}
			>.check{
				background-color:@error-btn-color;
			}
		}
		&.warning label{
			color:@warning-btn-color;
			>.box{
				border-color:@warning-btn-color;
			}
			>.check{
				background-color:@warning-btn-color;
			}
		}
		&.teal label{
			color:@teal-btn-color;
			>.box,>.check{
				background-color:@teal-btn-color;
			}
		}
	}
	@keyframes ripple{
		0% { transform: scale(0);}
		100% { transform: scale(2);}
	}

	
</style>