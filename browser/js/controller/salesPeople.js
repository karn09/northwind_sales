salesApp.controller('personCtrl', function($scope, peopleFactory, regionFactory) {
  peopleFactory.getAll()
    .then(function(people) {
      people.forEach(function(person) {
        person.selected = {};
        person.regions.forEach(function(region) {
          person.selected[region] = true;
        });
      });
      $scope.people = people;
    })
    .catch(function(err) {
      $scope.error = err;
    });

  regionFactory.getRegions()
      .then(function(regions) {
        $scope.regions = regions;
        // $scope.regions.selected = {};
      })
      .catch(function(err) {
        $scope.error = err;
      });
  $scope.toggle = function(value) {
    // var idx = $scope.people.regions.indexOf(value);
    // $scope.people.regions.splice(idx, 1);
  };

  $scope.delete = function(person) {
    peopleFactory.remPerson(person)
      .then(function(resp) {
        if (resp.status === 200) {
          $scope.people.splice($scope.people.indexOf(person), 1);
          console.log(resp);
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  };

});

function toObject(arr) {
  var rv = {};
  for (var i = 0; i < arr.length; ++i) {
    rv[arr[i]] = arr[i];
  }
  return rv;
}
