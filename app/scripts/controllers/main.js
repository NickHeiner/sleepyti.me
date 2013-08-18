'use strict';

angular.module('sleepyti.meApp')
    .controller('MainCtrl', function($scope, offsetFromWakeup, offsetFromSleep, createMoment, defaultSleep,
                                     defaultWakeup, DEFAULT_SLEEP_TIME_MINS, SLEEP_CYCLE_LENGTH) {
        $scope.hours = _.range(13);
        $scope.minutes = _.range(60);
        $scope.amPm = ['AM', 'PM'];

        $scope.constants = {
            DEFAULT_SLEEP_TIME_MINS: DEFAULT_SLEEP_TIME_MINS,
            SLEEP_CYCLE_LENGTH: SLEEP_CYCLE_LENGTH
        }

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
