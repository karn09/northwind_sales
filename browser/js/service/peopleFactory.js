salesApp.factory('peopleFactory', function($http, regionFactory) {
  var peopleObj = {};
  var _regions = null;
  var _people = null;

  regionFactory.getRegions()
    .then(function(regions) {
      _regions = regions;
    })
    .catch(function(err) {
      console.log('Error fetching regions: ' + err);
    });
  // find and retrieve all people in db
  peopleObj.getAll = function() {
    return $http.get('/api/people')
      .then(function(res) {
        _people = res.data;
        _people.forEach(function(person) {
          person.selected = {};
          _regions.forEach(function(region) {
            if (person.regions.includes(region)) {
              person.selected[region] = true;
            } else {
              person.selected[region] = false;
            }
          });
        });
        return _people;
      })
      .catch(function(err) {
        return err;
      });
  };

  // TODO: move addPerson to personFactory
  peopleObj.addPerson = function(personObj) {
    return $http.post('/api/people', personObj)
      .then(function(res) {
        return res.data;
      })
      .catch(function(err) {
        return err;
      });
  };

  // TODO: move remPerson to personFactory
  peopleObj.remPerson = function(personObj) {
    return $http.delete('/api/people/' + personObj.id)
      .then(function(res) {
        return res;
      })
      .catch(function(err) {
        return err;
      });
  };

  peopleObj.updateRegions = function(id, regions) {
    return $http.put('/api/people/' + id, regions)
      .then(function(res) {
        return res.data;
      })
      .catch(function(err) {
        return err;
      });
  };
  return peopleObj;
});
