<template>
	<button :type="type" :class="'md-btn ' + typeBtn + ' ' + color + ' ' + size" :disabled="disabled"><slot></slot></button>
</template>
<script type="text/javascript">
	import {validateValue} from './utils/utils';
	export default{
		props:{
			type:{
				type:String,
				default:'button',
				validator (value) {
                    return validateValue(value, ['button', 'submit', 'reset']);
                }
			},
			typeBtn:{
				type:String,
				default:'normal'
			},
			color:{
				type:String,
				default:'',
				validator (value) {
                    return validateValue(value, ['btn-primary', 'btn-info', 'btn-success','btn-error','btn-warning','btn-teal'])
                }
			},
			disabled:{
				type:Boolean
			},
			outline:{
				type:Boolean
			},
			size:{
				type:String,
				default:'',
				validator (value) {
                    return validateValue(value, ['btn-xs', 'btn-sm', 'btn-lg'])
                }
			}
		},
		computed:{
			outlineClass(){
				return this.outline?'btn-outline':''
			}
			
			
		},

	}
</script>
<style lang="less">
	@import "./utils/common.less";
	.md-btn {
		border: none;
		position: relative;
		color: #fff;
		background: #e1e5ec;
		overflow: hidden;
		padding: 6px 12px;
		font-size: 14px;
		margin:5px;
		&.btn-xs{
			padding: 1px 5px;
			font-size: 12px;
		}
		&.btn-sm{
			padding: 5px 10px;
			font-size: 12px;
		}
		&.btn-lg{
			padding: 10px 16px;
			font-size: 18px;
		}
		&.btn-outline{
			background-color: transparent;
			border: 2px solid #e1e5ec;
			color: #444;
		}
		&.btn-primary{
			background-color: @primary-btn-color;
			&.btn-outline{
				background-color: transparent;
				border: 2px solid @primary-btn-color;
				color: @primary-btn-color;
			}
		}
		&.btn-info{
			background-color: @info-btn-color;
			&.btn-outline{
				background-color: transparent;
				border: 2px solid @info-btn-color;
				color: @info-btn-color;
			}
		}
		&.btn-success{
			background-color: @success-btn-color;
			&.btn-outline{
				background-color: transparent;
				border: 2px solid @success-btn-color;
				color: @success-btn-color;
			}
		}
		&.btn-error{
			background-color: @error-btn-color;
			&.btn-outline{
				background-color: transparent;
				border: 2px solid @error-btn-color;
				color: @error-btn-color;
			}
		}
		&.btn-warning{
			background-color: @warning-btn-color;
			&.btn-outline{
				background-color: transparent;
				border: 2px solid @warning-btn-color;
				color: @warning-btn-color;
			}
		}
		&.btn-teal{
			background-color: @teal-btn-color;
			&.btn-outline{
				background-color: transparent;
				border: 2px solid @teal-btn-color;
				color: @teal-btn-color;
			}
		}
	}
</style>