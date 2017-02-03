<template>
<figure class="highlight"><pre><code :class="language"><slot></slot></code></pre></figure>
</template>
<script>
	export default{
		props:{
			language:{
				type:String,
				default:'',
				
			}
		}
	}
</script>
<style lang="less"> 
	.highlight {
			margin-bottom: 14px;
			background-color: #f7f7f9;
			border: 1px solid #e1e1e8;
			border-radius: 4px;
			pre{
				margin: 0;
			}
		}
</style>