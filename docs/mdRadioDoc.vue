<template>
	<demo-component name="Radios" desc="The radio button is samiliar as checkbox, you can choose the color, inline and disabled or not. it can be wrapped in the control group just same as checkbox.">
		<div class="component-label">Radios</div>
			<md-radio :checked.sync="radioValue" value="one">option 1</md-radio>
			<md-radio :checked.sync="radioValue" value="two">option 2</md-radio>
			<md-radio :checked.sync="radioValue" value="three" disabled>option 3</md-radio>
		<div class="component-label">Radios wrapped in control group</div>
		<md-control-group :single-value.sync="radioGroupValue" :inline="true">
			<md-radio value="option1">option 1</md-radio>
			<md-radio value="option2">option 2</md-radio>
			<md-radio value="option3" >option 3</md-radio>
		</md-control-group>
		<div class="component-label">Color</div>
		<md-control-group :single-value.sync="colorfulRadioValue">
			<md-radio value="red" color="red">red</md-radio>
			<md-radio value="blue" color="blue">blue</md-radio>
			<md-radio value="green" color="green">green</md-radio>
			<md-radio value="yellow" color="yellow">yellow</md-radio>
			<md-radio value="orange" color="orange">orange</md-radio>
		</md-control-group>
		
	</demo-component>
	<div class="component-label">Radio buttons</div>
	<code-doc language="html">
&lt;md-radio :checked.sync="radioValue" color="blue" value="one"&gt;option 1&lt;/md-radio&gt;
&lt;md-radio :checked.sync="radioValue" color="blue" value="two"&gt;option 2&lt;/md-radio&gt;
&lt;md-radio :checked.sync="radioValue" color="yellow" value="three"&gt;option 3&lt;/md-radio&gt;
	</code-doc>
	<div class="component-label">Radio with control group</div>
	<code-doc language="html">
&lt;md-control-group :single-value.sync="radioGroupValue"&gt;
 &lt;md-radio :checked.sync="radioValue" color="blue" value="one"&gt;option 1&lt;/md-radio&gt;
 &lt;md-radio :checked.sync="radioValue" color="blue" value="two"&gt;option 2&lt;/md-radio&gt;
 &lt;md-radio :checked.sync="radioValue" color="yellow" value="three"&gt;option 3&lt;/md-radio&gt;
&lt;/md-control-group&gt;
	</code-doc>
	<div class="component-label">Options</div>
	<options-table :headers="dataTable.headers" :options="dataTable.options"></options-table>
</template>
<script>
	import mdRadio from '../src/components/mdRadio.vue'
	import mdControlGroup from '../src/components/mdControlGroup.vue'
	import demoComponent from './demoComponent.vue'
	import codeDoc from './codeDoc.vue'
	import optionsTable from './optionsTable.vue'
	export default{
		components:{
			mdRadio,
			mdControlGroup,
			demoComponent,
			codeDoc,
			optionsTable
		},
		data(){
			return {
				radioValue: 'one',
				radioGroupValue: 'option2',
				colorfulRadioValue:'red',
				dataTable:{
					headers:['Name', 'Type', 'Default', 'Description'],
					options:[{name:'value', type: 'String', default:'', description:'The value of radio button, radio buttons in one group should have same value'},
							 {name:'name', type: 'String', default:'', description:'The name attrubute of radio button'},
							 {name:'disabled', type: 'Boolean', default:'false', description:'Is radio button disabled'},
							 {name:'color', type: 'String', default:'', description:'the color of checkbox'},
							 {name:'inline', type: 'Boolean', default:'false', description:'Is the checkboxs display in one row'},]
				}
			}
			
		}
	}
</script>