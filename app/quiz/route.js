import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return Ember.RSVP.hash({
      plate: this.store.findRecord('plate', 1),
      plates: this.store.findAll('plate')
    });
  },
  actions: {
    nextPlate: function() {
      console.log('nextPlate in routejs');
      this.store.findRecord('plate', 2);
    }
  }
});
