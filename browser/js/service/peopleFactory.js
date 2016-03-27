salesApp.factory('peopleFactory', function($http) {
  var peopleObj = {};
  // find and retrieve all people in db
  peopleObj.getAll = function() {
    return $http.get('/api/people')
    .then(function(res) {
      return res.data;
    })
    .catch(function(err) {
      return err;
    });
  };

  return peopleObj;
});
