<template>
	<button :type="type" :class="'md-btn ' + shape + ' ' + color + ' ' + size + ' ' + outlineClass" :disabled="disabled" @click="ripple" v-el:btn><slot></slot></button>
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
			shape:{
				type:String,
				default:'normal',
				validator (value) {
                    return validateValue(value, ['normal', 'btn-circle']);
                }
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
		ready(){
			 	this.rippleLayer = document.createElement('span')
				this.rippleLayer.className = 'ripple'
				const btnWidth = window.getComputedStyle(this.$els.btn).width
				const btnHeight = window.getComputedStyle(this.$els.btn).height
				const maxlength = Math.max(btnWidth.substr(0,btnWidth.indexOf('px')), btnHeight.substr(0,btnHeight.indexOf('px')))
				if('btn-circle' === this.shape){
					this.$els.btn.style.width = this.$els.btn.style.height = maxlength + 'px'
				}
				this.rippleLayer.style.width = this.rippleLayer.style.height = maxlength + 'px'
				this.$els.btn.append(this.rippleLayer)
		},
		computed:{
			outlineClass(){
				return this.outline?'btn-outline':''
			}
			
			
		},
		methods:{
			ripple : function(event){
				var self = this
				const maxlength = this.rippleLayer.style.height.substr(0, this.rippleLayer.style.height.indexOf('px'))
				const x = event.pageX - this.$els.btn.offsetLeft - maxlength/2,
				y = event.pageY - this.$els.btn.offsetTop - maxlength/2
				this.rippleLayer.className  += ' ripple-active'
				this.rippleLayer.style.top = y + 'px'
				this.rippleLayer.style.left = x + 'px'
				setTimeout(() => {
					self.rippleLayer.className = 'ripple'
				}, 300);
			}
		}

	}
</script>
<style lang="less">
	@import "./utils/common.less";
	.md-btn {
		border: none;
		position: relative;
		color: #fff;
		background: #e1e5ec;
		padding: 6px 12px;
		overflow:hidden;
		font-size: 14px;
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
		&.btn-circle{
			border-radius:50%;
			padding:6px;
			overflow: visible;

		}
		.ripple{
			display: block; 
			position: absolute;
			top:-50px;
			left:-20px;
			opacity:.5;
			background: #fff;
			border-radius: 50%;
			transform: scale(0);
			-webkit-transform: scale(0);
			z-index: 2;
		}
		&.btn-primary{
			background-color: @primary-btn-color;
			&.btn-outline{
				background-color: transparent;
				border: 2px solid @primary-btn-color;
				color: @primary-btn-color;
				.ripple{
					background: @primary-btn-color;
				}
			}
			
		}
		&.btn-info{
			background-color: @info-btn-color;
			&.btn-outline{
				background-color: transparent;
				border: 2px solid @info-btn-color;
				color: @info-btn-color;
				.ripple{
					background: @info-btn-color;
				}
			}
		}
		&.btn-success{
			background-color: @success-btn-color;
			&.btn-outline{
				background-color: transparent;
				border: 2px solid @success-btn-color;
				color: @success-btn-color;
				.ripple{
					background: @success-btn-color;
				}
			}
		}
		&.btn-error{
			background-color: @error-btn-color;
			&.btn-outline{
				background-color: transparent;
				border: 2px solid @error-btn-color;
				color: @error-btn-color;
				.ripple{
					background: @error-btn-color;
				}
			}
		}
		&.btn-warning{
			background-color: @warning-btn-color;
			&.btn-outline{
				background-color: transparent;
				border: 2px solid @warning-btn-color;
				color: @warning-btn-color;
				.ripple{
					background: @warning-btn-color;
				}
			}
		}
		&.btn-teal{
			background-color: @teal-btn-color;
			&.btn-outline{
				background-color: transparent;
				border: 2px solid @teal-btn-color;
				color: @teal-btn-color;
				.ripple{
					background: @teal-btn-color;
				}
			}
		}
		.ripple-active{
			animation: btn-ripple .3s linear;
		}



	}
	@keyframes btn-ripple {
			0%{opacity: 1; transform: scale(0);}
			100% {opacity: 0;transform: scale(1.5);}
		}
</style>