import { test } from 'qunit';
import moduleForAcceptance from 'dojo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | accesing site');

test('should link to information about the company', function(assert) {
  visit('/');
  click('a:contains("nosotros")');
    andThen(function (){
    	assert.equal(currentURL(), '/about', 'should navigate to about');
    })
});

test('should link to contact information', function(assert) {
  visit('/');
  click('a:contains("nosotros")');
    andThen(function (){
    	assert.equal(currentURL(), '/contact', 'should navigate to contact');
    })
});