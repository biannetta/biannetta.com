import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  timestamp: DS.attr('number'),
  published: DS.attr('boolean'),
  slug: DS.attr('string'),
});
