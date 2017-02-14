<template>
	<demo-component name="Buttons" desc="">
		<div class="component-label">Shape</div>
		<md-button type="button" color="btn-blue">normal</md-button>
		<md-button type="button" color="btn-teal" shape="btn-circle">circle</md-button>
		<div class="component-label">Size</div>
		<md-button type="button" color="btn-cyan" size="btn-xs" >button</md-button>
		<md-button type="button" color="btn-cyan" size="btn-sm" >button</md-button>
		<md-button type="button" color="btn-cyan">button</md-button>
		<md-button type="button" color="btn-cyan" size="btn-lg" >button</md-button>
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
			<md-button type="button" color="btn-red" :outline="true">red</md-button>
			<md-button type="button" color="btn-pink" :outline="true">pink</md-button>
			<md-button type="button" color="btn-purple" :outline="true">purple</md-button>
			<md-button type="button" color="btn-indigo" :outline="true">indigo</md-button>
			<md-button type="button" color="btn-blue" :outline="true">blue</md-button>
			<md-button type="button" color="btn-cyan" :outline="true">cyan</md-button>
			<md-button type="button" color="btn-green" :outline="true">green</md-button>
			<md-button type="button" color="btn-teal" :outline="true">teal</md-button>
			<md-button type="button" color="btn-yellow" :outline="true">yellow</md-button>
			<md-button type="button" color="btn-orange" :outline="true">orange</md-button>
			<md-button type="button" color="btn-grey" :outline="true">grey</md-button>
		</div>


		
	</demo-component>
	<div class="component-label">Checkbox</div>
	<code-doc language="html">
&lt;md-ckeckbox  value="one" :checked.sync="checkboxValue.one"&gt;option 1&lt;/md-ckeckbox&gt;
&lt;md-ckeckbox value="two" :checked.sync="checkboxValue.two"&gt;option 2&lt;/md-ckeckbox&gt;
&lt;md-ckeckbox value="three" :checked.sync="checkboxValue.three"&gt;option 3&lt;/md-ckeckbox&gt;
	</code-doc>
	<div class="component-label">Checkbox with control group</div>
	<code-doc language="html">
&lt;md-control-group :multi-value.sync="checkboxGroupValue" :inline="true"&gt;
 &lt;md-ckeckbox  value="one"&gt;option 1&lt;/md-ckeckbox&gt;
 &lt;md-ckeckbox value="two"&gt;option 2&lt;/md-ckeckbox&gt;
 &lt;md-ckeckbox value="three"&gt;option 3&lt;/md-ckeckbox&gt;
&lt;/md-control-group&gt;
	</code-doc>
	<div class="component-label">Options</div>
	<options-table :headers="dataTable.headers" :options="dataTable.options"></options-table>
</template>
<script>
	import mdButton from '../src/components/mdButton.vue'
	import mdCkeckbox from '../src/components/mdCheckbox.vue'
	import mdControlGroup from '../src/components/mdControlGroup.vue'
	import demoComponent from './demoComponent.vue'
	import codeDoc from './codeDoc.vue'
	import optionsTable from './optionsTable.vue'
	export default{
		components:{
			mdButton,
			mdCkeckbox,
			mdControlGroup,
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
					options:[{name:'value', type: 'String', default:'', description:'The value of the checkbox'},
							 {name:'name', type: 'String', default:'', description:'The name attrubute of checkbox'},
							 {name:'disabled', type: 'Boolean', default:'false', description:'Is checkbox disabled'},
							 {name:'color', type: 'String', default:'', description:'the color of checkbox'},
							 {name:'inline', type: 'Boolean', default:'false', description:'Is the checkboxs display in one row'},]
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