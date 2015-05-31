angular.module('myApp', [])
.controller('MainCtrl', function($scope) {
	$scope.test = "there!";

    $scope.squareColor = 'purple';
    $scope.message = "This is your week"

    $scope.meditation = [
		{complete: false},
		{complete: false},
		{complete: false},
		{complete: false},
		{complete: false}
    ]

    $scope.exercise = [
	    {complete: false},
	    {complete: false},
	    {complete: false},
	    {complete: false},
	    {complete: false},
	    {complete: false},
	    {complete: false},
    ]

    $scope.coursera = [
	    {complete: false},
	    {complete: false},
	    {complete: false},
    ]
})
.directive('squares', function squares() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'squares/square.html',
        controller: ['$scope',

            function($scope) {
                $scope.squareMessage = "im spo cool";
                $scope.fill = true;

            }]
    };
})
.factory('UserService', function() {
  var defaults = {
    location: 'autoip'
  };
  var service = {
    user: defaults
  };

  return service;
})