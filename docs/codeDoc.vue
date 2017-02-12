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
			background-color: #f7f7f9;
			border: 1px solid #e1e1e8;
			border-radius: 4px;
			margin: 30px 0;
			pre{
				margin: 0;
			}
		}
</style>