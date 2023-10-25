import { module, test } from 'qunit';
import { setupTest } from 'my-todo-app/tests/helpers';

module('Unit | Route | todos', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:todos');
    assert.ok(route);
  });
});
