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
				if (!(this.checkboxGroup.value instanceof Array)) { 
					parent.value = [] 
				}
			}
		},
		ready(){
			if(this.isGroup && this.checkboxGroup.value.length){
				if(this.checkboxGroup.value.indexOf(this.value)>=0){
					this.$els.input.checked = true
				} else {
					this.$els.input.checked = false
				}
				
			}
		},
		methods:{
			invoke:function(){
				if(this.checkboxGroup.value.indexOf(this.value)>=0){
					this.$els.input.checked = true
				} else {
					this.$els.input.checked = false
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
<style type="text/css">
	.md-checkbox{
		position: relative;
		margin: 5px 3px;
	}
	.md-checkbox.inline-checkbox{
		display: inline-block;
	}
	.md-checkbox input[type='checkbox']{
		visibility: hidden;
		position: absolute;
	}
	.md-checkbox label {
		cursor: pointer;
		padding-left: 30px; 
		color:#666;
	}
	.md-checkbox label > span{
		display: block;
		position: absolute;
		left: 0;
		-webkit-transition-duration: 0.3s;
		-moz-transition-duration: 0.3s;
		transition-duration: 0.3s; 
	}
	.md-checkbox label > .box{
		width: 16px;
		height: 16px;
		border: 2px solid #666;
		z-index: 1;
		-webkit-transition-delay: 0.2s;
		-moz-transition-delay: 0.2s;
		transition-delay: 0.2s; 
	}
	.md-checkbox label > .check{
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
	.md-checkbox input[type=checkbox]:checked ~ label > .box {
		opacity: 0;
		-webkit-transform: scale(0) rotate(-180deg);
		-moz-transform: scale(0) rotate(-180deg);
		transform: scale(0) rotate(-180deg); 
	}
	.md-checkbox input[type=checkbox]:checked ~ label > .check {
		opacity: 1;
		-webkit-transform: scale(1) rotate(45deg);
		-moz-transform: scale(1) rotate(45deg);
		transform: scale(1) rotate(45deg); 
	}
	.md-checkbox input[type=checkbox]:disabled ~ label,
	.md-checkbox input[type=checkbox][disabled] ~ label {
		cursor: not-allowed;
		opacity: 0.7 ;
	}
	.primary .md-checkbox label, .primary.md-checkbox label{
		color:#428bca;
	}
	.primary .md-checkbox label > .box, .primary.md-checkbox label > .box,
	.primary .md-checkbox label > .check, .primary.md-checkbox label > .check{
		border-color:#428bca;
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
		color:#5bc0de;
	}
	.info .md-checkbox label > .box, .info.md-checkbox label > .box,
	.info .md-checkbox label > .check, .info.md-checkbox label > .check{
		border-color:#5bc0de;
	}
	.success .md-checkbox label, .success.md-checkbox label{
		color:#5cb85c;
	}
	.success .md-checkbox label > .box, .success.md-checkbox label > .box,
	.success .md-checkbox label > .check, .success.md-checkbox label > .check{
		border-color:#5cb85c;
	}
	.error .md-checkbox label, .error.md-checkbox label{
		color:#d9534f;
	}
	.error .md-checkbox label > .box, .error.md-checkbox label > .box,
	.error .md-checkbox label > .check, .error.md-checkbox label > .check{
		border-color:#d9534f;
	}
	.warning .md-checkbox label, .warning.md-checkbox label{
		color:#f0ad4e;
	}
	.warning .md-checkbox label > .box, .warning.md-checkbox label > .box,
	.warning .md-checkbox label > .check, .warning.md-checkbox label > .check{
		border-color:#f0ad4e;
	}
	.teal .md-checkbox label, .teal.md-checkbox label{
		color:#36c6d3;
	}
	.teal .md-checkbox label > .box, .teal.md-checkbox label > .box,
	.teal .md-checkbox label > .check, .teal.md-checkbox label > .check{
		border-color:#36c6d3;
	}

	
</style>