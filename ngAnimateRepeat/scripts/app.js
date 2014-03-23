(function () {
    'use strict';

    var app = angular.module('app', [
        // Angular modules 
        'ngAnimate'
    ]);

    app.controller("MainCtrl", function ($scope) {
        $scope.count = 0;
        $scope.items = [$scope.count++ + " Lorem ipsum dolor sit amet, consectetur adipiscing elit"];

        
        $scope.addAnother = function () {
            var another = $scope.count++ + " Lorem ipsum dolor sit amet, consectetur adipiscing elit ";
            $scope.items.splice(1, 0, another);
        };

        $scope.remove = function () {
            $scope.items.pop();
        };
    });
})();