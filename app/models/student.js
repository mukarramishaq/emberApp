import DS from 'ember-data';

export default DS.Model.extend({
  id : DS.attr('string'),
  name : DS.attr('string'),
  roll_no : DS.attr('string'),
});
