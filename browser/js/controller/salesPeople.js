salesApp.controller('personCtrl', function($scope, peopleFactory) {
  peopleFactory.getAll()
    .then(function(people) {
      $scope.people = people;
    })
    .catch(function(err) {
      $scope.error = err;
    });
});
