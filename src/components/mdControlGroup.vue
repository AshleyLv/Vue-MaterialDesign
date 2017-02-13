<template>
	<div>
		<slot></slot>
	</div>
</template>
<script type="text/javascript">
	export default {
	props:{
		multiValue: {
			type:Array,
			default:null
		},
		singleValue:{
			type:String,
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
		singleValue(){
			this.update()
			
		},
		multiValue(){
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