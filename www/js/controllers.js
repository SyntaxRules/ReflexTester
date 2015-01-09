angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    })
    .controller('HomeCtrl', function ($scope, $timeout) {

        var beginTime, endTime;

        $scope.testing = false;
        $scope.waitTime = false;
        $scope.lastTime = 0.00;

        $scope.beginTest = function() {
            $scope.testing = true;

            $timeout(function() {
                $scope.testing = false;
                $scope.waitTime = true;
                beginTime = new Date();
            }, Math.random() * 1500);
        };

        $scope.endTest = function() {
            endTime = new Date();
            $scope.waitTime = false;

            $scope.lastTime = endTime.getTime() - beginTime.getTime();
        }

        $scope.toggleTest = function() {
            if ($scope.waitTime)
                $scope.endTest();
            else if ($scope.testing)
                $scope.lastTime = 0.00;
            else
                $scope.beginTest();
        }


    })
    .controller('ScoresCtrl', function ($scope) {

    });
