import Vue from 'vue';
import mdCkeckbox from './components/mdCheckbox.vue';
import mdControlGroup from './components/mdControlGroup.vue'; 
import mdRadio from './components/mdRadio.vue';
new Vue({
    el: 'body',
    components:{'mdCkeckbox':mdCkeckbox,
                'mdControlGroup' :mdControlGroup,
                'mdRadio' : mdRadio},
   data:{
     checkboxValue: {
        four: 'four',
        five: 'five',
        three: ''
      },
      radioValue: 'aa',
      checkboxGroupValue:['one','two']
   }
     
 

});