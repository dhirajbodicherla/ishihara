import DS from 'ember-data';

var Quiz = DS.Model.extend({
  plates: DS.hasMany('plate', { async: true }),
  userResponses: DS.attr()
});

var platesOrder = Array.apply(null, {length: 26}).map(Number.call, Number);
platesOrder.shift();

Quiz.reopenClass({
  FIXTURES: [
    {
      id: 1,
      plates: platesOrder,
      userResponses: []
    }
  ]
});

export default Quiz;