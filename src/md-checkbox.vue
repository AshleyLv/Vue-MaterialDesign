<template>
	<div :class="'md-checkbox '+color" @click.prevent="toggle">
		<input type="checkbox" v-el:input class="md-check" :value="value" :name="name" :disabled="disabled" :checked="isChecked">
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
			}
			disabled:{
				type:Boolean
			},
			checked:{
				twoWay:true
			},
			color:{
				type:String,
				default:null
			}
			
		},
		computed:{
			isChecked(){
				return this.checked === this.value
			}
		},
		methods:{
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
		border: 2px solid #327ad5;
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
		border: 2px solid #327ad5;
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
</style>