angular.module('video-player')

  .component('search', {
    bindings: {
      result: '<',
      onChange: '<',
    },
    templateUrl: 'src/templates/search.html',
  });
