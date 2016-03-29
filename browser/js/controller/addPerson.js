salesApp.controller('addPersonCtrl', function($scope, $rootScope, $mdDialog) {
  $scope.openFromBottom = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      scope: $rootScope,
      templateUrl: '/public/views/addPersonDialog.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    })
    .finally(function(info) {
      console.log($scope.person);
    });
  };
});

function DialogController($scope, $rootScope, $mdDialog, regionFactory, peopleFactory) {

  $scope.person = {};
  $scope.person.regions = [];

  regionFactory.getRegions()
    .then(function(regions) {
      $scope.regions = regions;
    })
    .catch(function(err) {
      $scope.error = err;
    });

  $scope.hide = function(info) {
    $mdDialog.hide(info);
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.save = function(info) {
    peopleFactory.addPerson(info)
      .then(function(res) {
        console.log(res);
        $scope.$emit('personAdded', info);
        $mdDialog.hide();
      })
      .catch(function(err) {
        console.log(err);
      });
  };
  $scope.toggle = function(item) {
    var loc = $scope.person.regions.indexOf(item);
    // FIXME: by making sure that I can never add more than three, breaks error
    // checking in dom, perhaps find a way to return an error that gets parsed
    // if ($scope.person.regions.length === 3 && loc === -1) {
    //   return;
    // }
    if (loc === -1) {
      $scope.person.regions.push(item);
    } else {
      $scope.person.regions.splice(loc, 1);
    }
  };
}
