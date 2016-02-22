urlShortener.controller('urlShortenerController', [function() {
  var self = this;


  self.links =[];

  self.addLink = function() {
    console.log(self.linkText);
    self.links.push(self.linkText);
    console.log(self.links);
  };

}]);
