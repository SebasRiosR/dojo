import { test } from 'qunit';
import moduleForAcceptance from 'dojo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list spy');

test('should redirect to cars route', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/cars', 'should rediret cars');
  });
});

test('should list available cars', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('.listing').length,3,'should list cars');
  });
});