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
				if (!(this.checkboxGroup.value instanceof Array)) { 
					parent.value = [] 
				}
			}
		},
		ready(){
			if(this.isGroup && this.checkboxGroup.value.length){
				if(this.checkboxGroup.value.indexOf(this.value)>=0){
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
					const index = this.checkboxGroup.value.indexOf(this.value)
					if(this.checked && index==-1){
						this.checkboxGroup.value.push(this.value)
					}
					if(this.checked && index!=-1){
						this.checkboxGroup.value.splice(index,index)
					}
				}
			}
		},
		methods:{
			invoke:function(){
				if(this.checkboxGroup.value.indexOf(this.value)>=0){
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
	.md-radio{
		position: relative;
		margin: 5px 3px;
	}
	.md-radio.inline-checkbox{
		display: inline-block;
	}
	.md-radio input[type='radio']{
		visibility: hidden;
		position: absolute;
	}
	.md-radio label {
		cursor: pointer;
		padding-left: 30px; 
		color:#666;
	}
	.md-radio label > span{
		display: block;
		position: absolute;
		left: 0;
		-webkit-transition-duration: 0.3s;
		-moz-transition-duration: 0.3s;
		transition-duration: 0.3s; 
	}
	.md-radio label > .box{
		width: 14px;
		height: 14px;
		border: 2px solid #666;
		border-radius: 50%;
		z-index: 1;
		-webkit-transition-delay: 0.2s;
		-moz-transition-delay: 0.2s;
		transition-delay: 0.2s; 
	}
	.md-radio label > .check{
		width: 10px;
		height: 10px;
		top: 4px;
		left: 4px;
		background-color: #666;
		border-radius: 50%;
		z-index: 2;
		opacity: 0;
		-webkit-transform: rotate(180deg);
		-moz-transform: rotate(180deg);
		transform: rotate(180deg);
		-webkit-transition-delay: 0.3s;
		-moz-transition-delay: 0.3s;
		transition-delay: 0.3s;
	}
	.md-radio label > .box:after{
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
	.md-radio input[type=radio]:checked ~ label > .box:after{
		transform: scale(2);
	}
	.md-radio input[type=radio]:disabled ~ label,
	.md-radio input[type=radio][disabled] ~ label {
		cursor: not-allowed;
		opacity: 0.7 ;
	}
	.primary .md-radio label, .primary.md-radio label{
		color:@primary-btn-color;
	}
	.primary .md-checkbox label > .box, .primary.md-checkbox label > .box,
	.primary .md-checkbox label > .check, .primary.md-checkbox label > .check{
		border-color:@primary-btn-color;
	}
	.default .md-checkbox label, .default.md-checkbox label{
		color:#666;
	}
	.default .md-checkbox label > .box, .default.md-checkbox label > .box
	{
		border-color:#666;
	}
	.default .md-checkbox label > .check, .default.md-checkbox label > .check{
		border-color:#36c6d3;
	}
	.info .md-checkbox label, .info.md-checkbox label{
		color:@info-btn-color;
	}
	.info .md-checkbox label > .box, .info.md-checkbox label > .box,
	.info .md-checkbox label > .check, .info.md-checkbox label > .check{
		border-color:@info-btn-color;
	}
	.success .md-checkbox label, .success.md-checkbox label{
		color:@success-btn-color;
	}
	.success .md-checkbox label > .box, .success.md-checkbox label > .box,
	.success .md-checkbox label > .check, .success.md-checkbox label > .check{
		border-color:@success-btn-color;
	}
	.error .md-checkbox label, .error.md-checkbox label{
		color:@error-btn-color;
	}
	.error .md-checkbox label > .box, .error.md-checkbox label > .box,
	.error .md-checkbox label > .check, .error.md-checkbox label > .check{
		border-color:@error-btn-color;
	}
	.warning .md-checkbox label, .warning.md-checkbox label{
		color:@warning-btn-color;
	}
	.warning .md-checkbox label > .box, .warning.md-checkbox label > .box,
	.warning .md-checkbox label > .check, .warning.md-checkbox label > .check{
		border-color:@warning-btn-color;
	}
	.teal .md-checkbox label, .teal.md-checkbox label{
		color:@teal-btn-color;
	}
	.teal .md-checkbox label > .box, .teal.md-checkbox label > .box,
	.teal .md-checkbox label > .check, .teal.md-checkbox label > .check{
		border-color:@teal-btn-color;
	}

	
</style>