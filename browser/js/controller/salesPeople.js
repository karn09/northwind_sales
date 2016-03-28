salesApp.controller('personCtrl', function($scope, $rootScope, peopleFactory, regionFactory) {

  peopleFactory.getAll()
    .then(function(res) {
      $scope.people = res;
    });
  $scope.$on('personAdded', function(event, args) {
    console.log(event, args)
  })
  $scope.toggle = function(id, values) {
    var _selected = [];
    for (var key in values) {
      if (values[key] === true) {
        _selected.push(key);     
      }
    }
    peopleFactory.updateRegions(id, _selected)
      .then(function(msg) {
        console.log(msg)
      });
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
