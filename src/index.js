import Vue from 'vue';
import mdCkeckbox from './components/mdCheckbox.vue';
import mdControlGroup from './components/mdControlGroup.vue'; 
new Vue({
    el: 'body',
    components:{'mdCkeckbox':mdCkeckbox,
                'mdControlGroup' :mdControlGroup},
   data:{
     checkboxValue: {
        four: 'four',
        five: 'five',
        three: ''
      },
      checkboxGroupValue:['one','two']
   }
     
 

});