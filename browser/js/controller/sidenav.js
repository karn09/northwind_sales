salesApp.controller('sideNavCtrl', function($scope, $mdSidenav) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
});
