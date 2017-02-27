<template>
	<div class="md-input">
		<template v-if="icon">
			<div class="input-group">
				<span class="input-group-addon">
					<i :class="iconClass"></i>
				</span>
				<input class="form-control" v-el:input v-model="value" 
				:type="type"
				:placeholder="placeholder"
				:name="name"
				:title="title"
				:max="max" 
				:min="min"
				:readonly="readonly"
				:disabled="disabled"
				:required="required" @blur="onblur" @focus="onfocus"
				@keyup.enter="keyUpEnter">
				<label>{{label}}</label>

			</div>
		</template>
		<template v-else>
			<input class="form-control" v-el:input v-model="value" 
			:type="type"
			:placeholder="placeholder"
			:name="name"
			:title="title"
			:max="max" 
			:min="min"
			:readonly="readonly"
			:disabled="disabled"
			:required="required" @blur="onblur" @focus="onfocus">
			<label>{{label}}</label>
			<span class="help-block">{{help}}</span>
		</template>
	</div>
</template>
<script>
	import {validateValue} from './utils/utils';
	export default{
		props:{
			placeholder:{
				type:String
			},
			label:{
				type:String
			},
			name:{
				type:String
			},
			value:{
				twoWay: true,
      			default: null
			},
			pattern:{
				type:String
			},
			help:{
				type:String
			},
			title:{
				type:String
			},
			value:{
				type:String
			},
			max:{
				type:String
			},
			min:{
				type:String
			},
			readonly: {
				type: Boolean,
				default: false
			},
			required: {
				type: Boolean,
				default: false
			},
			type: {
				type: String,
				default: 'text'
			},
			color:{
				type:String,
				default:'',
				validator (value) {
					return validateValue(value, ['btn-red', 'btn-pink', 'btn-blue','btn-yellow','btn-purple','btn-teal', 'btn-indigo', 'btn-cyan','btn-green','btn-orange','btn-grey'])
                }
			},
			icon:{
				type:Boolean,
				default:false
			},
			iconClass:{
				type:String
			},
			iconPosition:{
				type:String,
				default:'left',
				validator(value){
					return validateValue(value, ['left', 'right'])
				}
			},
			disabled:{
				type:Boolean
			},
			isSumbit:{
				type:Boolean,
				default:false
			}

		},
		methods:{
			onfocus:function(){

			},
			onblur:function(){
				if(!this.validate()){
					
				}
			},
			keyUpEnter: function(){
				if(this.isSumbit){

				}
				
			},
			validate : function(){
				if(this.disabled && this.readonly){
					return true
				}
				let value = (this.value || '').trim()
				if(this.required && !value){
					return false
				}
				if(value.length<this.minlength || value.length>this.maxlength){
					return false
				}
				return true
			}
		}
	}
</script>
<style lang="less">
	.md-input {
		position: relative;
		margin: 0 0 35px 0;
		padding-top: 20px;
		.form-control {
			width: 100%;
			height: 34px;
			padding: 6px 12px;
			background: none;
			border: 0;
			border-bottom: 1px solid #c2cad8;
			color: #555555;
			box-shadow: none;
			padding: 0;
			border-radius: 0;
			font-size: 14px;
			outline: none !important;
			box-shadow: none !important;
			-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
			box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
			-webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
			-o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
			transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
			& ~ label {
				top: 0;
				margin-bottom: 0;
				font-size: 14px;
				color: #888888;
				opacity: 1;
				width: 100%;
				position: absolute;
				left: 0;
				bottom: 0;
				pointer-events: none;
				&:after{
					content: '';
					position: absolute;
					z-index: 5;
					bottom: 0;
					left: 50%;
					width: 0;
					height: 2px;
					visibility: hidden;
					transition: 0.2s ease all;
				}
			}
			&:focus {
				border-color: #93a1bb;
				outline: 0;
				-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(147,161,187,.6);
				box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(147,161,187,.6);
			}
			&.edited:not([readonly]) ~ .help-block,&:focus:not([readonly]) ~ .help-block{
				color: #36c6d3;
				opacity: 1;
			}
			&.edited:not([readonly]) ~ label:after,&:focus:not([readonly]) ~ label:after{
				visibility: visible;
				left: 0;
				width: 100%;
				background: #36c6d3;
				opacity: 1;
				color: #888888;
			}
		}
		.help-block {
			position: absolute;
			margin: 5px 0;
			opacity: 0;
			opacity: 0;
			font-size: 12px;
			color: #737373;
			position: absolute;
			margin: 11px 2px 4px 10px;
			z-index: 3;
			width: 16px;
			font-size: 16px;
			text-align: center;
			left: 0;
		}
		.input-group {
			display: table;
			border-collapse: separate;
			.input-group-addon {
				padding: 6px 12px;
				font-size: 14px;
				font-weight: 400;
				line-height: 1;
				color: #555;
				text-align: center;
				background-color: #eee;
				border: 1px solid #ccc;
				border-radius: 4px;
				background: 0 0;
				border: 0;
				width: 1%;
				white-space: nowrap;
				vertical-align: middle;

				display: table-cell;
			}
		}
	}
	
</style>