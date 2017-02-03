<template>
	<div class="demo-section">
		<header><h2>{{name}}</h2></header>
		<p class="desc">{{desc}}</p>
		<div class="example">
			<slot></slot>
		</div>
		
	</div>
	
</template>
<script>
	export default{
		props:{
			name:{
				type:String,
				default:null
			},
			desc:{
				type:String,
				default:null
			}
		}
	}
	
</script>
<style>
	header{
		border-bottom: 1px solid #e6e6e6;
		color:#333;
	}
	.desc{
		font-size: 16px;
     	color: #444;
	}
</style>
