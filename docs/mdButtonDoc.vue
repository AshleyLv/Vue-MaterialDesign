<template>
	<demo-component name="Buttons" desc="">
		<div class="component-label">Shape</div>
		<md-button type="button" color="btn-blue" size="btn-lg">normal</md-button>
		<md-button type="button" color="btn-teal" shape="btn-circle" size="btn-lg">circle</md-button>
		<div class="component-label">Size</div>
		<md-button type="button" color="btn-cyan" size="btn-xs" >button</md-button>
		<md-button type="button" color="btn-cyan" size="btn-sm" >button</md-button>
		<md-button type="button" color="btn-cyan">button</md-button>
		<md-button type="button" color="btn-cyan" size="btn-lg">button</md-button>
		<div class="component-label">Color</div>
		<div class="button-container">
			<md-button type="button" color="btn-red">red</md-button>
			<md-button type="button" color="btn-pink">pink</md-button>
			<md-button type="button" color="btn-purple">purple</md-button>
			<md-button type="button" color="btn-indigo">indigo</md-button>
			<md-button type="button" color="btn-blue">blue</md-button>
			<md-button type="button" color="btn-cyan">cyan</md-button>
			<md-button type="button" color="btn-green">green</md-button>
			<md-button type="button" color="btn-teal">teal</md-button>
			<md-button type="button" color="btn-yellow">yellow</md-button>
			<md-button type="button" color="btn-orange">orange</md-button>
			<md-button type="button" color="btn-grey">grey</md-button>
		</div>
		<div class="button-container">
			<md-button type="button" color="btn-red" :inverse="true">red</md-button>
			<md-button type="button" color="btn-pink" :inverse="true">pink</md-button>
			<md-button type="button" color="btn-purple" :inverse="true">purple</md-button>
			<md-button type="button" color="btn-indigo" :inverse="true">indigo</md-button>
			<md-button type="button" color="btn-blue" :inverse="true">blue</md-button>
			<md-button type="button" color="btn-cyan" :inverse="true">cyan</md-button>
			<md-button type="button" color="btn-green" :inverse="true">green</md-button>
			<md-button type="button" color="btn-teal" :inverse="true">teal</md-button>
			<md-button type="button" color="btn-yellow" :inverse="true">yellow</md-button>
			<md-button type="button" color="btn-orange" :inverse="true">orange</md-button>
			<md-button type="button" color="btn-grey" :inverse="true">grey</md-button>
		</div>


		
	</demo-component>
	<div class="component-label">Buttons</div>
	<code-doc language="html">
&lt;md-button type="button" color="btn-cyan" size="btn-xs"&gt;cyan&lt;/md-button&gt;
&lt;md-button type="button" color="btn-teal" shape="btn-circle" size="btn-lg"&gt;circle&lt;/md-button&gt;
	</code-doc>

	<div class="component-label">Options</div>
	<options-table :headers="dataTable.headers" :options="dataTable.options"></options-table>
</template>
<script>
	import mdButton from '../src/components/mdButton.vue'
	import demoComponent from './demoComponent.vue'
	import codeDoc from './codeDoc.vue'
	import optionsTable from './optionsTable.vue'
	export default{
		components:{
			mdButton,
			demoComponent,
			codeDoc,
			optionsTable
		},
		data(){
			return {
				checkboxValue: {
					four: 'four',
					five: '',
					six: ''
				},
				colorfulCheckboxValue:['red'],
				checkboxGroupValue:['one','two'],
				dataTable:{
					headers:['Name', 'Type', 'Default', 'Description'],
					options:[{name:'type', type: 'String', default:'button', description:'the type of a button (button, submit, reset)'},
							 {name:'shape', type: 'String', default:'', description:'the shape of a button, the dfault value is "rectangle". Add "btn-circle" to make a circle button.'},
							 {name:'size', type: 'String', default:'', description:'the size of a button, there are three options, btn-xs, btn-sm and btn-lg'},
							 {name:'color', type: 'String', default:'', description:'the color of a button, the options are btn-red, btn-pink, btn-purple, btn-indigo, btn-blue, btn-cyan, btn-green, btn-teal, btn-yellow, btn-orange, btn-grey'},
							 {name:'disabled', type: 'Boolean', default:'false', description:'set "true" to disable the button'},
							 {name:'inverse', type: 'Boolean', default:'false', description:'set "true" to turn the button in inverse color'}]
				}
			}
			
		}
	}
</script>
<style lang="less">
	button{
		margin: 0 10px;
	}
	.button-container{
		margin-bottom: 10px;
		
	}
</style>