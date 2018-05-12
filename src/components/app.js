angular.module('video-player')

  .component('app', {
    controller: function () {
      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];
      this.videoUrl = 'https://www.youtube.com/embed/' + this.currentVideo.id.videoId;
      this.onClick = (video) => {
        console.log(video);
        this.currentVideo = video;
        console.log(this.currentVideo);
      };
    },
    templateUrl: 'src/templates/app.html'
  });
