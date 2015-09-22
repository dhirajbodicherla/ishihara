import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    nextPlate: function(){
      console.log('click on nextPlate button', this, this.get('controller'));
      this.sendAction('nextPlate');
    }
  }
});
