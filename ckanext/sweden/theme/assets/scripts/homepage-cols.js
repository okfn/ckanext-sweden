this.ckan.module('homepage-cols', function($, _) {
  return {
    initialize: function () {
      $('.span4 .box', this.el).matchHeight();
    }
  };
});
