<template>
	<demo-component name="Checkboxes" desc="You can use the checkbox component by include md-ckeckbox into your project, it allows you put the checkboxes into one control group, set different color of each checkbox, set the checkboxes in one row or not, set the checkbox is disabled or not.">
		<div class="component-label">checkboxes</div>
		<md-ckeckbox value="four" :checked.sync="checkboxValue.four">option 1</md-ckeckbox>
		<md-ckeckbox value="five" :checked.sync="checkboxValue.five">option 2</md-ckeckbox>
		<md-ckeckbox value="six" :checked.sync="checkboxValue.six" disabled>option 3</md-ckeckbox>
		<div class="component-label">Inline checkboxes</div>
		<md-control-group :multi-value.sync="checkboxGroupValue" :inline="true">
			<md-ckeckbox  value="one">option 1</md-ckeckbox>
			<md-ckeckbox value="two">option 2</md-ckeckbox>
			<md-ckeckbox value="three" >option 3</md-ckeckbox>
		</md-control-group>
		<div class="component-label">Color</div>
		<md-control-group :multi-value.sync="colorfulCheckboxValue">
			<md-ckeckbox value="red" color="red">red</md-ckeckbox>
			<md-ckeckbox value="pink" color="pink">pink</md-ckeckbox>
			<md-ckeckbox value="purple" color="purple">purple</md-ckeckbox>
			<md-ckeckbox value="indigo" color="indigo">indigo</md-ckeckbox>
			<md-ckeckbox value="blue" color="blue">blue</md-ckeckbox>
			<md-ckeckbox value="cyan" color="cyan">cyan</md-ckeckbox>
			<md-ckeckbox value="teal" color="teal">teal</md-ckeckbox>
			<md-ckeckbox value="green" color="green">green</md-ckeckbox>
			<md-ckeckbox value="yellow" color="yellow">yellow</md-ckeckbox>
			<md-ckeckbox value="orange" color="orange">orange</md-ckeckbox>
			<md-ckeckbox value="grey" color="grey">grey</md-ckeckbox>
		</md-control-group>
		
	</demo-component>
	<code-doc language="html">
&lt;md-control-group :multi-value.sync="checkboxGroupValue" :inline="true"&gt;
	&lt;md-ckeckbox  value="one"&gt;option 1&lt;/md-ckeckbox&gt;
	&lt;md-ckeckbox value="two"&gt;option 2&lt;/md-ckeckbox&gt;
	&lt;md-ckeckbox value="three"&gt;option 3&lt;/md-ckeckbox>
&lt;/md-control-group&gt;
	</code-doc>
	<options-table :headers="dataTable.headers" :options="dataTable.options"></options-table>
</template>
<script>
	import mdCkeckbox from '../src/components/mdCheckbox.vue'
	import mdControlGroup from '../src/components/mdControlGroup.vue'
	import demoComponent from './demoComponent.vue'
	import codeDoc from './codeDoc.vue'
	import optionsTable from './optionsTable.vue'
	export default{
		components:{
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
					options:[{name:'value', type: 'String', default:'', description:'The value of checkbox option'},
							 {name:'name', type: 'String', default:'', description:'The name attrubute of checkbox option'},
							 {name:'disabled', type: 'Boolean', default:'false', description:'Is checkbox option disabled'},
							 {name:'color', type: 'String', default:'', description:'the color type of checkbox'},
							 {name:'inline', type: 'Boolean', default:'false', description:'Is the checkboxs display in the same row'},]
				}
			}
			
		}
	}
</script>