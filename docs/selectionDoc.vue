<template>
	<demo-component name="Checkboxes & Radios" desc="Add color classes to give buttons additional meaning.">
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
	<md-ckeckbox value="primary" color="primary" :checked.sync="colorfulCheckboxValue.primary">primary</md-ckeckbox>
	<md-ckeckbox value="info" color="info" :checked.sync="colorfulCheckboxValue.info">info</md-ckeckbox>
	<md-ckeckbox value="success" color="success" :checked.sync="colorfulCheckboxValue.success" >success</md-ckeckbox>
	<md-ckeckbox value="warning" color="warning" :checked.sync="colorfulCheckboxValue.warning">warning</md-ckeckbox>
	<md-ckeckbox value="error" color="error" :checked.sync="colorfulCheckboxValue.error">error</md-ckeckbox>
	<md-ckeckbox value="teal" color="teal" :checked.sync="colorfulCheckboxValue.teal">teal</md-ckeckbox>

		<md-control-group :inline="true" :single-value.sync="radioGroupValue">
	<md-radio value="one" name="radio" color="success" :checked.sync="radioValue">option1</md-radio>
	<md-radio value="two" name="radio" :checked.sync="radioValue">option2</md-radio>
	<md-radio value="three" name="radio" color="warning" :checked.sync="radioValue">option3</md-radio>
</md-control-group>
	</demo-component>
	<code-doc language="html">
&lt;md-ckeckbox value="four" :checked.sync="checkboxValue.four"&gt;option 1&lt;/md-ckeckbox&gt;
&lt;md-ckeckbox value="five" :checked.sync="checkboxValue.five"&gt;option 2&lt;/md-ckeckbox&gt;
&lt;md-ckeckbox value="six" :checked.sync="checkboxValue.six" disabled&gt;option 3&lt;/md-ckeckbox&gt;
	</code-doc>
</template>
<script>
	import mdRadio from '../src/components/mdRadio.vue'
	import mdCkeckbox from '../src/components/mdCheckbox.vue'
	import mdControlGroup from '../src/components/mdControlGroup.vue'
	import demoComponent from './demoComponent.vue'
	import codeDoc from './codeDoc.vue'
	export default{
		components:{
			mdRadio,
			mdCkeckbox,
			mdControlGroup,
			demoComponent,
			codeDoc
		},
		data(){
			return {
				radioValue: 'two',
				radioGroupValue:'one',
				checkboxValue: {
					four: 'four',
					five: '',
					six: ''
				},
				colorfulCheckboxValue:{
					primary: '',
					info: '',
					success: '',
					warning: '',
					error: '',
					teal: ''
				},
				checkboxGroupValue:['one','two']
			}
			
		}
	}
</script>