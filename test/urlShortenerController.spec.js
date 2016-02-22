describe('urlShortenerController', function() {
  beforeEach(module('urlShortener'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('urlShortenerController');
  }));
});

it('initialises with an empty search result and term', function() {
  expect(ctrl.searchResult).toBeUndefined();
  expect(ctrl.searchTerm).toBeUndefined();
});
