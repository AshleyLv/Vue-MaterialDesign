<template>
<md-control-group :inline="true" :single-value.sync="radioGroupValue">
	<md-radio value="one" name="radio" color="success" :checked.sync="radioValue">option1</md-radio>
	<md-radio value="two" name="radio" :checked.sync="radioValue">option2</md-radio>
	<md-radio value="three" name="radio" color="warning" :checked.sync="radioValue">option3</md-radio>
</md-control-group>
</template>
<script>
	import mdRadio from '../src/components/mdRadio.vue'
	export default{
		components:{
			mdRadio
		},
		data(){
			return {
				radioValue: 'two',
				radioGroupValue:'one'
			}
			
		}
	}
</script>