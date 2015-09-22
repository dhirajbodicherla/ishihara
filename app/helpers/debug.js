import Ember from 'ember';

export function debug(the_string){
  Ember.Logger.log(the_string);
}

export default Ember.Helper.helper(debug);