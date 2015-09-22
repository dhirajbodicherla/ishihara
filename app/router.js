import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('/', {path: 'index'});
  this.route('quiz');
});

export default Router;
