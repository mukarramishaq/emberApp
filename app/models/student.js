import DS from 'ember-data';

export default DS.Model.extend({
  name : DS.attr('string'),
  roll_no : DS.attr('string')
});
