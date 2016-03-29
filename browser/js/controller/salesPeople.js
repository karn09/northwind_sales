salesApp.controller('personCtrl', function($scope, $rootScope, peopleFactory, regionFactory) {

  function init() {
    peopleFactory.getAll()
    .then(function(res) {
      $scope.people = res;
    });
  }

  $scope.$on('addedPerson', function(event, data) {
    init();
  });

  $scope.checkStatus = function(person) {
    return person.regions.length;
    // init();
  };

  $scope.toggle = function(id, values) {
    var _selected = [];
    for (var key in values) {
      if (values[key] === true) {
        _selected.push(key);
      }
    }
    peopleFactory.updateRegions(id, _selected)
      .then(function(msg) {
        // console.log(msg);
        init();  // HACK force view to refresh.
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
  init();
});
