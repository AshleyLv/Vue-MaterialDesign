<template>
<div class="header-section">
	<h1>Vue Material Design UI Labrary</h1>
	<p>This is a VUE based UI framework that adopts material design.</p>

	<p>It doesn't require any more 3rd party plugins or frameworks.</p>
</div>
	<md-control-group color="success" :multi-value.sync="checkboxGroupValue">
	<md-ckeckbox  value="one" :inline="true" >success</md-ckeckbox>
	<md-ckeckbox value="two" :inline="true" >error</md-ckeckbox>
	<md-ckeckbox value="three" color="info" :inline="true" >info</md-ckeckbox>
</md-control-group>

<md-ckeckbox value="four" color="teal" :checked.sync="checkboxValue.four">primary</md-ckeckbox>
<md-ckeckbox value="five" color="default" :checked.sync="checkboxValue.five">default</md-ckeckbox>

<md-control-group :inline="true" :single-value.sync="radioGroupValue">
	<md-radio value="one" name="radio" color="success" :checked.sync="radioValue">option1</md-radio>
	<md-radio value="two" name="radio" :checked.sync="radioValue">option2</md-radio>
	<md-radio value="three" name="radio" color="warning" :checked.sync="radioValue">option3</md-radio>
</md-control-group>
<md-button type="submit" color="btn-info" size="btn-lg" :outline="true">button</md-button>
<md-button type="button" color="btn-info" size="btn-sm" shape="btn-circle">button</md-button>
<md-button type="submit" color="btn-success" size="btn-xs" :outline="true">button</md-button>
<md-button type="button" color="btn-error" size="btn-lg" shape="btn-circle">button</md-button>
<md-button type="submit" color="btn-warning" size="btn-lg" :outline="true">button</md-button>
<md-button type="button" color="btn-teal" size="btn-lg" shape="btn-circle">button</md-button>
</template>
<script>

	import mdCkeckbox from '../src/components/mdCheckbox.vue'
	import mdControlGroup from '../src/components/mdControlGroup.vue'
	import mdRadio from '../src/components/mdRadio.vue'
	import mdButton from '../src/components/mdButton.vue'
	export default{
		components:{
			mdCkeckbox,
			mdControlGroup,
			mdRadio,
			mdButton
		},
		data(){
			return {
				 checkboxValue: {
        four: 'four',
        five: 'five',
        three: ''
      },
      radioValue: 'two',
      checkboxGroupValue:['one','two'],
      radioGroupValue:'one'
			}
    
   }
		
	}
</script>
<style lang="less">
	body{
		margin: 0;
			.header-section{
		    margin: 0;
    width: 100%;
    height: 300px;
    background: #36c6d3;
    padding-top: 120px;
    color: #fff;
    font-family: 'microsoft yahei';
    margin-bottom: 50px;
    text-align: center;
    font-size: 20px;
    >h1{
    	margin:0;
    	font-size: 50px;
    	text-shadow: 3px 3px 1px rgba(179, 179, 179, 0.5);
    }
	}
	}


</style>