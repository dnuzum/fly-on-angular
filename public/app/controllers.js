angular.module('AirplaneCtrls', [])

.controller('Airplanes', ['$scope', '$http', function($scope, $http) {
  $scope.airplanes = [];

  $http.get('/api/airplanes').then(function success(res) {
    $scope.airplanes = res.data;
  }, function error(res) {
    console.log(res);
  });
}]);