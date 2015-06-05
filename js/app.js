angular.module('myApp', [])
.controller('MainCtrl', function($scope, User) {

    $scope.message = "This is your week";

    $scope.data = User;

    $scope.save = function() {
      chrome.storage.sync.set({"userData": $scope.data}, function() {
        // Notify that we saved.
        console.log('Settings saved: ', $scope.data);
      });
    }

    $scope.checkBox = function(box){
      box.complete = !box.complete;
      $scope.save();
    }

    chrome.storage.sync.get("userData", function(obj) {
        console.log('got userData:', obj.userData);
        $scope.$apply($scope.data = obj.userData);
    });

    $scope.reset = function(){
      console.log(User);
      $scope.data = User;
    }

})
.factory('User', function() {
var data =[{
          title: 'Meditation',
          boxes: [
        		{complete: false},
        		{complete: false},
        		{complete: false},
        		{complete: false},
        		{complete: false}
            ],
          color: 'orange'
          },
          {
          title: 'Exercise',
          boxes: [
              {complete: false},
              {complete: false},
              {complete: false},
              {complete: false},
              {complete: false},
              {complete: false},
              {complete: false},
            ],
          color: 'green'
          },{
          title: 'Coursera',
          boxes: [
              {complete: false},
              {complete: false},
              {complete: false},
            ],
          color: 'blue'
          }
          ]

    return data;
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
});