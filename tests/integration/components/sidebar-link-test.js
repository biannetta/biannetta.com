import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sidebar-link', 'Integration | Component | sidebar link', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sidebar-link}}`);

  assert.notEqual(this.$('').text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sidebar-link}}
      template block text
    {{/sidebar-link}}
  `);

  assert.notEqual(this.$().text().trim(), '');
});
