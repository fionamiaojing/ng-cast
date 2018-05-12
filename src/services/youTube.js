angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(options, callback) {
      $http.get('https://www.googleapis.com/youtube/v3/search', 
        {
          params: {
            part: 'snippet',
            q: options.query,
            maxResults: 5,
            key: window.YOUTUBE_API_KEY,
            type: 'video',
            videoEmbeddable: 'true',
          }
        }
      ).then(function successCallback(response) {
        callback(response.data.items);
      // this callback will be called asynchronously
      // when the response is available
      }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      });
    };
  });
