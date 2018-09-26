import DS from 'ember-data';

export default DS.Model.extend({
    name : DS.attr('string'),
    credit_hours: DS.attr('number')
});
