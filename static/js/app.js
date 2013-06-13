'use strict';

var app = angular.module('my-app', []);

app.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.test = 'blah';
}]);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'HomeCtrl',
        templateUrl: '/static/templates/home.ng'
    }).otherwise({redirectTo: '/'});
}]);

