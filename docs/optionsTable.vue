<template>
	<table class="table"> 
		<thead>
			<th v-for="header in headers">{{header}}</th>
		</thead>
		<tbody>
			<tr v-for="data in options">
				<td v-for="cell in data">{{cell}}</td>
			</tr>
		</tbody>
	</table>
</template>
<script>
	export default{
		props:{
			headers:{
				type: Array,
				default: null
			},
			options:{
				type:Array,
				default:null
			}
		}
	}	
</script>
<style lang="less">
	.table{
		width:100%;
		border-collapse: collapse;
		thead{
			text-align: left;
		}
		tr>th, tr>td{
			border: 1px solid #e7ecf1;
			border: 1px solid #e7ecf1;
			padding: 5px;
		}
		tr>td{
			font-size: 12px;
			color:#444;
		}
	}
</style>