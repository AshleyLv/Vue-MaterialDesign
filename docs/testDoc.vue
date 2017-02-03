<template>
<md-control-group color="success" :multi-value.sync="checkboxGroupValue" :inline="true">
		<md-ckeckbox  value="one">success</md-ckeckbox>
		<md-ckeckbox value="two">error</md-ckeckbox>
		<md-ckeckbox value="three" color="info" >info</md-ckeckbox>
	</md-control-group>

	<md-ckeckbox value="four" color="teal" :checked.sync="checkboxValue.four">primary</md-ckeckbox>
	<md-ckeckbox value="five" color="default" :checked.sync="checkboxValue.five">default</md-ckeckbox>
</template>
<script>
		import mdCkeckbox from '../src/components/mdCheckbox.vue'
	import mdControlGroup from '../src/components/mdControlGroup.vue'
	export default{
		components:{
			mdCkeckbox,
			mdControlGroup
		},
		data(){
			return {
				checkboxValue: {
					four: 'four',
					five: 'five'
				},
				checkboxGroupValue:['one','two']
			}
		}
	}
</script>