'use strict';

var app = angular.module('my-app', []);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'HomeCtrl',
        templateUrl: '/static/templates/home.ng'
    }).otherwise({redirectTo: '/'});
}]);

app.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.test = 'blah';
}]);
