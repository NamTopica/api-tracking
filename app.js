'use strict';
// Declare app level module which depends on filters, and services
angular.module('app', [
    'ngRoute',
    'showtable',
    'exam.controllers'
]).config([
    '$routeProvider',
    '$locationProvider',
    '$httpProvider',AppConfig]);

function AppConfig($routeProvider, $locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider.when('/', {
	templateUrl: 'teamplate/_index.html',
	controller: 'top'
    });
    $routeProvider.otherwise({redirectTo: '/'});

    $httpProvider.defaults.headers.post['Content-Type'] =
	'application/x-www-form-urlencoded;charset=utf-8';

    $httpProvider.defaults.transformRequest = [function(obj) {
	var str = [];
	for(var p in obj)
	    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
	return str.join("&");
    }];

}

var module = angular.module('showtable', []);
module.controller('top', ['$scope',
function($scope) {


}]);
