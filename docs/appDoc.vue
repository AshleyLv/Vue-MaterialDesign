<template>
<section class="header-section">
	<h1>Vue Material Design UI Labrary</h1>
	<p>This is a VUE based UI framework that adopts material design.</p>

	<p>It doesn't require any more 3rd party plugins or frameworks.</p>
</section>


<section class="main-section">
	<div class="demo-container">
	    <md-button-doc></md-button-doc>
		<md-checkbox-doc></md-checkbox-doc>
		<md-radio-doc></md-radio-doc>
		<md-input label="123" help="zzz" title="111" value="cvcv"></md-input>
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
	import mdRadioDoc from './mdRadioDoc.vue'
	import mdButtonDoc from './mdButtonDoc.vue'
	import mdInput from '../src/components/mdInput.vue'
	export default{
		components:{
			mdRadio,
			mdButton,
			codeDoc,
			mdCheckboxDoc,
			mdRadioDoc,
			mdButtonDoc,
			mdInput
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
			height: 360px;
			background: #1e2226;
			padding-top: 160px;
			color:#71869c;
			
			margin-bottom: 50px;
			text-align: center;
			font-size: 20px;
			>h1{
				margin:0;
				color: #50c5e0;
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
					color:#666;
					font-size: 14px;
					margin: 20px 0 10px 0;

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