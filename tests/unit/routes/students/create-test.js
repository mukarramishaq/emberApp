import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | students/create', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:students/create');
    assert.ok(route);
  });
});
