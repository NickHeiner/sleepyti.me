'use strict';

angular.module('sleepyti.meApp')
    .controller('MainCtrl', function($scope, offsetFromWakeup, offsetFromSleep, createMoment, defaultSleep, defaultWakeup) {
        $scope.hours = _.range(1, 13);
        $scope.minutes = _.range(1, 61);
        $scope.amPm = ['AM', 'PM'];

        var defaultSleepMoment = defaultSleep(),
            defaultWakeupMoment = defaultWakeup();

        $scope.wakeup = {
            hour: defaultWakeupMoment.hours() % 12,
            minute: defaultWakeupMoment.minutes(),
            am: defaultWakeupMoment.hours() > 12 ? 'PM' : 'AM'
        };

        $scope.sleep = {
            hour: defaultSleepMoment.hours() % 12,
            minute: defaultSleepMoment.minutes(),
            am: defaultSleepMoment.hours() > 12 ? 'PM' : 'AM'
        };

        $scope.$watch('[wakeup.hour, wakeup.minute]', function() {
            $scope.sleepTimes = offsetFromWakeup(createMoment($scope.wakeup.hour, $scope.wakeup.minute));
        }, true);

        $scope.$watch('[sleep.hour, sleep.minute]', function() {
            $scope.wakeupTimes = offsetFromSleep(createMoment($scope.sleep.hour, $scope.sleep.minute));
        }, true);
    });
