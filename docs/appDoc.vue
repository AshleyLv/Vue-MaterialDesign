<template>
<section class="header-section">
	<h1>Vue Material Design UI Labrary</h1>
	<p>This is a VUE based UI framework that adopts material design.</p>

	<p>It doesn't require any more 3rd party plugins or frameworks.</p>
</section>


<section class="main-section">
	<div class="demo-container">
		<md-checkbox-doc></md-checkbox-doc>
	</div>
	<div class="sidebar-container"></div>
</section>


<!-- <md-button type="submit" color="btn-info" size="btn-lg" :outline="true">button</md-button>
<md-button type="button" color="btn-info" size="btn-sm" shape="btn-circle">button</md-button>
<md-button type="submit" color="btn-success" size="btn-xs" :outline="true">button</md-button>
<md-button type="button" color="btn-error" size="btn-lg" shape="btn-circle">button</md-button>
<md-button type="submit" color="btn-warning" size="btn-lg" :outline="true">button</md-button>
<md-button type="button" color="btn-teal" size="btn-lg" shape="btn-circle">button</md-button> -->

</template>
<script>
	import mdRadio from '../src/components/mdRadio.vue'
	import mdButton from '../src/components/mdButton.vue'
	import codeDoc from './codeDoc.vue'
	import mdCheckboxDoc from './mdCheckboxDoc.vue'
	export default{
		components:{
			mdRadio,
			mdButton,
			codeDoc,
			mdCheckboxDoc
		}
		
	}
</script>
<style lang="less">
	body{
		margin: 0;
		font-family: 'microsoft Yahei';
		.header-section{
			margin: 0;
			width: 100%;
			height: 300px;
			background: #36c6d3;
			padding-top: 120px;
			color: #fff;
			
			margin-bottom: 50px;
			text-align: center;
			font-size: 20px;
			>h1{
				margin:0;
				font-size: 50px;
				text-shadow: 3px 3px 1px rgba(179, 179, 179, 0.5);
			}
		}
		.main-section{
			margin:0 auto;
			width: 90%;
			.demo-container{
				width: 70%;
				padding: 5px;
				float: left;
				.component-label{
		color:#aaa;
		font-size: 14px;

	}
			}
			.sidebar-container{
				width: 20%;
				padding: 5px;
				float: right;
				min-height: 50px;
				background-color: pink;
			}
		}

	}


</style>