'use strict';
angular.module('exam.controllers', ['exam.services'])
    .controller('AppCtrl', ['$scope', 'TrackingServices', function($scope, TrackingService) {
    TrackingService.stats().then(function(response) {
        $scope.data = response.data;
    });
}]);

























/*


angular.module('exam.controllers', ['exam.services'])
    .controller('AppCtrl', [
    '$scope',"apitracking", function($scope,Exam) {
        apitracking.stats().then(function ( response) {
          $scope.data = response.data;
        });
        //$scope.y = Exam.y;
        //$scope.a = Exam.a;
        //$scope.c = Exam.c;
    }

]);

*/