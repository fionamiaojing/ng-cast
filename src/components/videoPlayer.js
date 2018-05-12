angular.module('video-player')

  .component('videoPlayer', {

    bindings: {
      currentVideo: '<',
      videoUrl: '<',
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
