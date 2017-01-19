<template>
	<div>
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
		value(){
			this.update()
			
		}
	},
	methods: {
		update : function(){
			this.$children.forEach((el) => {
					el.invoke()
				})
		}
	},
	created(){
		this._controlGroup=true
	}

}
</script>