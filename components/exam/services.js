'use strict';
angular.module('exam.services', [])
    .factory('TrackingServices', ['$http', '$q', function($http, $q) {
    var TrackingService = {};

    TrackingService.stats = function() {
        var deferred = $q.defer();

        $http.get('http://eco-tracking.memo.edu.vn/stats')
        .then(function(response) {
            deferred.resolve(response);
        });

        return deferred.promise;
    };
    return TrackingService;
}]);






























/*
angular.module('exam.services', [])
    .factory('apitracking', ['ExamServices',  function(ExamServices) {
        var apitracking = {};
        function apitracking(start) {
           return Exam.start(start).then(function(response) {
           });
        }
    }])

    .factory('ExamServices', [
    '$http', '$q',
    function($http, $q) {
        var HOST = 'http://eco-tracking.memo.edu.vn';
        function exam(data) {
            var deferred = $q.defer();

            $http.get(HOST + '/stats').then(function(response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
        return apitracking;

    }]);
*/
