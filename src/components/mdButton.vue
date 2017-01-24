<template>
	<button :type="type" :class="'md-btn ' + typeBtn + ' ' + typeColor" :disabled="disabled"><slot></slot></button>
</template>
<script type="text/javascript">
	export default{
		props:{
			value
		}
	}
</script>
<style lang="less">
	
</style>