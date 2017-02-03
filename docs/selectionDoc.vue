<template>
	<md-control-group :inline="true" :single-value.sync="radioGroupValue">
	<md-radio value="one" name="radio" color="success" :checked.sync="radioValue">option1</md-radio>
	<md-radio value="two" name="radio" :checked.sync="radioValue">option2</md-radio>
	<md-radio value="three" name="radio" color="warning" :checked.sync="radioValue">option3</md-radio>
</md-control-group>
<md-control-group color="success" :multi-value.sync="checkboxGroupValue" :inline="true">
		<md-ckeckbox  value="one">success</md-ckeckbox>
		<md-ckeckbox value="two">error</md-ckeckbox>
		<md-ckeckbox value="three" color="info" >info</md-ckeckbox>
	</md-control-group>

	<md-ckeckbox value="four" color="teal" :checked.sync="checkboxValue.four">primary</md-ckeckbox>
	<md-ckeckbox value="five" color="default" :checked.sync="checkboxValue.five">default</md-ckeckbox>
</template>
<script>
	import mdRadio from '../src/components/mdRadio.vue'
	import mdCkeckbox from '../src/components/mdCheckbox.vue'
	import mdControlGroup from '../src/components/mdControlGroup.vue'
	export default{
		components:{
			mdRadio,
			mdCkeckbox,
			mdControlGroup
		},
		data(){
			return {
				radioValue: 'two',
				radioGroupValue:'one',
				checkboxValue: {
					four: 'four',
					five: 'five'
				},
				checkboxGroupValue:['one','two']
			}
			
		}
	}
</script>