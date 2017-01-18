<template>
	<div :class="color + inlineClass">
		<slot></slot>
	</div>
</template>
<script type="text/javascript">
	export default {
	props:{
		value: {
			type:Array,
			default:null
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
	watch:{
		value:{
			deep:true,
			handler(){
				this.$children.forEach((el) => {
					e.invoke()
				})
			}
			
		}
	},
	created(){
		this._controlGroup=true
	}

}
</script>