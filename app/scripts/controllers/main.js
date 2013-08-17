'use strict';

angular.module('sleepyti.meApp')
    .controller('MainCtrl', function($scope, offsetFromWakeup, offsetFromSleep, createMoment) {
        $scope.hours = _.range(1, 13);
        $scope.minutes = _.range(1, 61);
        $scope.amPm = ['AM', 'PM'];

        $scope.sleep = $scope.wakeup = {
            hour: 1,
            minute: 1,
            am: 'AM'
        };

        $scope.$watch('[wakeup.hour, wakeup.minute]', function() {
            $scope.sleepTimes = offsetFromWakeup(createMoment($scope.wakeup.hour, $scope.wakeup.minute));
        }, true);

        $scope.$watch('[sleep.hour, sleep.minute]', function() {
            $scope.wakeupTimes = offsetFromSleep(createMoment($scope.sleep.hour, $scope.sleep.minute));
        });
    });
