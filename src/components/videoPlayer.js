angular.module('video-player')

  .component('videoPlayer', {

    bindings: {
      video: '<',
      videoUrl: '<',
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
