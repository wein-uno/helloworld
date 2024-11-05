import { module, test } from 'qunit';
import { setupTest } from 'hello-world/tests/helpers';

module('Unit | Route | welcome', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:welcome');
    assert.ok(route);
  });
});
