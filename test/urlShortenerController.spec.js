describe('urlShortenerController', function() {
  var ctrl;

  beforeEach(module('urlShortenerApp'));



  beforeEach(inject(function($controller) {
    ctrl = $controller('urlShortenerController');
  }));

  it('initialises with an empty link adding box', function() {
    expect(ctrl.linkText).toBeUndefined();
  });

  it('stores links', function() {
    ctrl.linkText = "www.example.com";
    ctrl.addLink();
    console.log('===========================================' + self.links + '===========================================');
    expect(ctrl.links).toContain("www.example.com");
  });

});
