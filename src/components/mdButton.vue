<template>
	<button :type="type" :class="'md-btn ' + shape + ' ' + color + ' ' + size + ' ' + inverseClass" :disabled="disabled" @click="ripple" v-el:btn><slot></slot></button>
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
				default:'',
				validator (value) {
                    return validateValue(value, ['btn-circle']);
                }
			},
			color:{
				type:String,
				default:'',
				validator (value) {
                    return validateValue(value, ['btn-red', 'btn-pink', 'btn-blue','btn-yellow','btn-purple','btn-teal', 'btn-indigo', 'btn-cyan','btn-green','btn-orange','btn-grey'])
                }
			},
			disabled:{
				type:Boolean
			},
			inverse:{
				type:Boolean
			},
			size:{
				type:String,
				default:'',
				validator (value) {
                    return validateValue(value, ['btn-xs', 'btn-sm','btn-n', 'btn-lg'])
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
				this.$els.btn.appendChild(this.rippleLayer)
		},
		computed:{
			inverseClass(){
				return this.inverse?'btn-inverse':''
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
		outline: none;
		-moz-box-shadow: 0 3px 5px 0px rgba(0, 0, 0, 0.16);
		-webkit-box-shadow: 0 3px 5px 0px rgba(0, 0, 0, 0.16);
		box-shadow: 0 3px 5px 0px rgba(0, 0, 0, 0.16);
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
		&.btn-inverse{
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
		&.btn-red{
			.button-variant(@btn-red-color);
		}
		&.btn-pink{
			.button-variant(@btn-pink-color);
		}
		&.btn-blue{
			.button-variant(@btn-blue-color);
		}
		&.btn-yellow{
			.button-variant(@btn-yellow-color);
		}
		&.btn-purple{
			.button-variant(@btn-purple-color);
		}
		&.btn-teal{
			.button-variant(@btn-teal-color);
		}
		&.btn-indigo{
			.button-variant(@btn-indigo-color);
		}
		&.btn-cyan{
			.button-variant(@btn-cyan-color);
		}
		&.btn-green{
			.button-variant(@btn-green-color);
		}
		&.btn-orange{
			.button-variant(@btn-orange-color);
		}
		&.btn-grey{
			.button-variant(@btn-grey-color);
		}
		.ripple-active{
			animation: btn-ripple .3s linear;
		}



	}
	@keyframes btn-ripple {
		0%{opacity: 1; transform: scale(0);}
		100% {opacity: 0;transform: scale(1.5);}
	}
	.button-variant(@color){
		background-color: @color;
			&.btn-inverse{
				background-color: transparent;
				border: 2px solid @color;
				color: @color;
				.ripple{
					background: @color;
				}
			}
	}
</style>