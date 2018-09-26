import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | teachers/delete', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:teachers/delete');
    assert.ok(route);
  });
});
