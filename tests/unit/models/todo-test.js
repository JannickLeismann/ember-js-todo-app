import { module, test } from 'qunit';

import { setupTest } from 'my-todo-app/tests/helpers';

module('Unit | Model | todo', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('todo', {});
    assert.ok(model);
  });
});
