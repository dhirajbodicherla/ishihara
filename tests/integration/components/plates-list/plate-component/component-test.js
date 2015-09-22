import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('plates-list/plate-component', 'Integration | Component | plates list/plate component', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{plates-list/plate-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#plates-list/plate-component}}
      template block text
    {{/plates-list/plate-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
