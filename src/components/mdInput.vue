<template>
	<div class="form-group form-md-line-input">
		<input type="text" class="form-control" placeholder="Enter your name">
		<label>123</label>
		<span class="help-block">block</span>
	</div>
</template>
<script>
	import {validateValue} from './utils/utils';
	export default{

	}
</script>
<style lang="less">
	.form-group.form-md-line-input {
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
		}
	}
</style>