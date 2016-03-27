salesApp.controller('addPersonCtrl', function($scope, $mdDialog) {
  $scope.openFromBottom = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '/public/views/addPersonDialog.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    });
  };
  $scope.person = {};
  $scope.person.regions = [];
});

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    console.log(this);
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
  $scope.toggle = function(item) {
    console.log(item);
  };
}
