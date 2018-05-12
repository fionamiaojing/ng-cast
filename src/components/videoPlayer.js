angular.module('video-player')

  .component('videoPlayer', {
  // controller: function videoPlayerController() {
  //   this.videoUrl = 'https://www.youtube.com/embed/' + this.currentVideo.id.videoId
  // },
    bindings: {
      currentVideo: '<',
      videoUrl: '<',
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
