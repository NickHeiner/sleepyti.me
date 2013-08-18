'use strict';

angular.module('sleepyti.meApp')
    .controller('MainCtrl', function($scope, offsetFromWakeup, offsetFromSleep, createMoment, defaultSleep,
                                     defaultWakeup, DEFAULT_SLEEP_TIME_MINS, SLEEP_CYCLE_LENGTH) {

        $scope.constants = {
            DEFAULT_SLEEP_TIME_MINS: DEFAULT_SLEEP_TIME_MINS,
            SLEEP_CYCLE_LENGTH: SLEEP_CYCLE_LENGTH
        };

        var defaultSleepMoment = defaultSleep(),
            defaultWakeupMoment = defaultWakeup();

        $scope.baseTimes = {
            wakeup: {
                hour: defaultWakeupMoment.hours() % 12,
                minute: defaultWakeupMoment.minutes(),
                am: defaultWakeupMoment.hours() > 12 ? 'PM' : 'AM'
            },
            sleep: {
                hour: defaultSleepMoment.hours() % 12,
                minute: defaultSleepMoment.minutes(),
                am: defaultSleepMoment.hours() > 12 ? 'PM' : 'AM'
            }
        };

        $scope.offsets = {
            goToSleepTimes: [],
            wakeupTimes: []
        };

        $scope.$watch('[baseTimes.wakeup.hour, baseTimes.wakeup.minute]', function() {
            $scope.offsets.goToSleepTimes = offsetFromWakeup(createMoment(
                $scope.baseTimes.wakeup.hour,
                $scope.baseTimes.wakeup.minute
            ));
        }, true);

        $scope.$watch('[baseTimes.sleep.hour, baseTimes.sleep.minute]', function() {
            $scope.offsets.wakeupTimes = offsetFromSleep(createMoment(
                $scope.baseTimes.sleep.hour,
                $scope.baseTimes.sleep.minute
            ));
        }, true);
    });
