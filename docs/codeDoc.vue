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