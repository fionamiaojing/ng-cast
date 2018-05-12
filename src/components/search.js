angular.module('video-player')

  .component('search', {
    bindings: {
      searchResults: '<',
      onChange: '<',
    },
    templateUrl: 'src/templates/search.html',
  });
