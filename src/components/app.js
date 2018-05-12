angular.module('video-player')

  .component('app', {
    controller: function (youTube) {
      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];
      this.maxResults = 5;
      this.query = 'cat';
      this.$onInit = () => {
        youTube.search({query: 'cat'}, (videos) => {
          this.videos = videos;
          this.currentVideo = videos[0];
        });
      };
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      this.searchResults = (searchTerm) => {
        //console.log(this);
        youTube.search({query: searchTerm}, (videos) => {
          this.videos = videos;
          this.currentVideo = videos[0];
        });
      };
      
      
    },
    templateUrl: 'src/templates/app.html'
  });
