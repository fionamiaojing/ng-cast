angular.module('video-player')

  .component('search', {
    bindings: {
      result: '<',
      click: '<',
    },
    templateUrl: 'src/templates/search.html',
  });
