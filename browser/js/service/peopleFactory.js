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

  peopleObj.addPerson = function(personObj) {
    return $http.post('/api/people', personObj)
      .then(function(res) {
        return res.data;
      })
      .catch(function(err) {
        return err;
      });
  };

  peopleObj.remPerson = function(personObj) {
    return $http.delete('/api/people/' + personObj.id)
      .then(function(res) {
        return res;
      })
      .catch(function(err) {
        return err;
      });
  };
  return peopleObj;
});
